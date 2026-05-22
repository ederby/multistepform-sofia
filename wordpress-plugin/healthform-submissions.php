<?php
/**
 * Plugin Name: HealthForm Submissions
 * Description: Tar emot inskickningar fran halsoprofil-formularet (React/Netlify) via en skyddad REST-endpoint och sparar dem som privata poster.
 * Version: 1.0.0
 *
 * INSTALLATION
 * 1. Ladda upp den har filen till wp-content/plugins/ och aktivera "HealthForm Submissions".
 * 2. Lagg till en hemlig token i wp-config.php (samma varde som WP_SUBMIT_TOKEN i Netlify):
 *        define('HEALTHFORM_TOKEN', 'en-lang-slumpmassig-strang');
 * 3. (Valfritt) Satt mottagaradress for notismejl, annars anvands adminmejlen:
 *        define('HEALTHFORM_NOTIFY_EMAIL', 'terapeut@example.com');
 *
 * Endpoint: POST /wp-json/healthform/v1/submit  (kraver header X-HealthForm-Token)
 */

if (!defined('ABSPATH')) {
    exit;
}

define('HEALTHFORM_CPT', 'health_submission');

/**
 * Registrera custom post type — privat, syns bara i wp-admin.
 */
add_action('init', function () {
    register_post_type(HEALTHFORM_CPT, [
        'labels' => [
            'name'          => 'Halsoprofiler',
            'singular_name' => 'Halsoprofil',
            'menu_name'     => 'Halsoprofiler',
        ],
        'public'              => false,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_rest'        => false,
        'publicly_queryable'  => false,
        'exclude_from_search' => true,
        'has_archive'         => false,
        'rewrite'             => false,
        'menu_icon'           => 'dashicons-clipboard',
        'supports'            => ['title'],
    ]);
});

/**
 * Registrera REST-endpointen.
 */
add_action('rest_api_init', function () {
    register_rest_route('healthform/v1', '/submit', [
        'methods'             => 'POST',
        'callback'            => 'healthform_handle_submit',
        'permission_callback' => 'healthform_verify_token',
    ]);
});

/**
 * Verifiera den delade hemligheten (timing-saker jamforelse).
 */
function healthform_verify_token(WP_REST_Request $request) {
    if (!defined('HEALTHFORM_TOKEN') || HEALTHFORM_TOKEN === '') {
        return new WP_Error('healthform_misconfigured', 'HEALTHFORM_TOKEN saknas i wp-config.php.', ['status' => 500]);
    }
    $provided = $request->get_header('x-healthform-token');
    if (!is_string($provided) || !hash_equals(HEALTHFORM_TOKEN, $provided)) {
        return new WP_Error('healthform_forbidden', 'Ogiltig token.', ['status' => 401]);
    }
    return true;
}

/**
 * Ta emot och spara en inskickning.
 */
function healthform_handle_submit(WP_REST_Request $request) {
    $data = $request->get_json_params();
    if (empty($data) || !is_array($data) || empty($data['general'])) {
        return new WP_Error('healthform_bad_request', 'Ogiltig data.', ['status' => 400]);
    }

    $name = isset($data['general']['name'])
        ? sanitize_text_field($data['general']['name'])
        : '';

    $title = sprintf(
        'Halsoprofil - %s - %s',
        $name !== '' ? $name : 'Okand',
        date_i18n('Y-m-d H:i')
    );

    $post_id = wp_insert_post([
        'post_type'   => HEALTHFORM_CPT,
        'post_status' => 'private',
        'post_title'  => $title,
    ], true);

    if (is_wp_error($post_id)) {
        return new WP_Error('healthform_save_failed', 'Kunde inte spara inskickningen.', ['status' => 500]);
    }

    update_post_meta($post_id, 'healthform_data', wp_json_encode($data, JSON_UNESCAPED_UNICODE));

    healthform_send_notification($name, $data);

    return new WP_REST_Response(['ok' => true, 'id' => $post_id], 201);
}

/**
 * Skicka notismejl till terapeuten.
 */
function healthform_send_notification($name, $data) {
    $to = (defined('HEALTHFORM_NOTIFY_EMAIL') && HEALTHFORM_NOTIFY_EMAIL)
        ? HEALTHFORM_NOTIFY_EMAIL
        : get_option('admin_email');

    $phone = isset($data['general']['phone']) ? sanitize_text_field($data['general']['phone']) : '-';
    $date  = isset($data['general']['consultationDate']) ? sanitize_text_field($data['general']['consultationDate']) : '-';

    $body  = "En ny halsoprofil har skickats in.\n\n";
    $body .= 'Namn: ' . ($name !== '' ? $name : '-') . "\n";
    $body .= 'Telefon: ' . $phone . "\n";
    $body .= 'Datum for konsultation: ' . $date . "\n\n";
    $body .= "Se hela profilen i WordPress-admin:\n";
    $body .= admin_url('edit.php?post_type=' . HEALTHFORM_CPT) . "\n";

    wp_mail($to, 'Ny halsoprofil: ' . ($name !== '' ? $name : 'Okand'), $body);
}

/**
 * Visa inskickad data i wp-admin.
 */
add_action('add_meta_boxes', function () {
    add_meta_box(
        'healthform_data_box',
        'Inskickad halsoprofil',
        'healthform_render_meta_box',
        HEALTHFORM_CPT,
        'normal',
        'high'
    );
});

function healthform_render_meta_box($post) {
    $json = get_post_meta($post->ID, 'healthform_data', true);
    $data = $json ? json_decode($json, true) : null;
    if (!is_array($data)) {
        echo '<p>Ingen data sparad.</p>';
        return;
    }
    echo healthform_render_value($data); // phpcs:ignore — escapas rekursivt i healthform_render_value()
}

/**
 * Rendera ett (eventuellt nastlat) varde som escapead HTML-lista.
 */
function healthform_render_value($value) {
    if (is_array($value)) {
        if (empty($value)) {
            return '<em>-</em>';
        }
        $is_list = array_keys($value) === range(0, count($value) - 1);
        $out = '<ul style="margin:.25em 0 .25em 1.25em;list-style:disc;">';
        foreach ($value as $key => $child) {
            if ($is_list) {
                $out .= '<li>' . healthform_render_value($child) . '</li>';
            } else {
                $out .= '<li><strong>' . esc_html($key) . ':</strong> ' . healthform_render_value($child) . '</li>';
            }
        }
        return $out . '</ul>';
    }
    if ($value === '' || $value === null) {
        return '<em>-</em>';
    }
    return esc_html((string) $value);
}
