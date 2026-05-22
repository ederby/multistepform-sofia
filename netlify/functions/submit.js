// Proxar formulärets inskickning vidare till WordPress.
// Den hemliga token ligger bara här (Netlify env-variabler), aldrig i klient-bundlen.
// Krävda env-variabler: WP_SUBMIT_URL, WP_SUBMIT_TOKEN

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method Not Allowed" }) };
  }

  const url = process.env.WP_SUBMIT_URL;
  const token = process.env.WP_SUBMIT_TOKEN;
  if (!url || !token) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Servern är inte konfigurerad" }),
    };
  }

  let data;
  try {
    data = JSON.parse(event.body || "");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Ogiltig JSON" }) };
  }
  if (!data || typeof data !== "object" || !data.general) {
    return { statusCode: 400, body: JSON.stringify({ error: "Ogiltig payload" }) };
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-HealthForm-Token": token,
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      return { statusCode: 502, body: JSON.stringify({ error: "Fel från WordPress" }) };
    }
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch {
    return { statusCode: 502, body: JSON.stringify({ error: "Kunde inte nå WordPress" }) };
  }
}
