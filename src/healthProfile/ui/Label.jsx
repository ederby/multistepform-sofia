export default function Label({ htmlFor, children, style = "" }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-2.5 text-sm font-medium text-heading ${style}`}
    >
      {children}
    </label>
  );
}
