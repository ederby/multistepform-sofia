export default function Button({
  children,
  size = "medium",
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
  className = "",
}) {
  const style =
    size === "small"
      ? "px-2.5 py-1 text-sm"
      : size === "medium"
        ? "px-3.5 py-1.5 md:px-4 md:py-2"
        : size === "big"
          ? "px-6 py-4"
          : "";
  const btnVariant =
    variant === "primary"
      ? "bg-primary-300 text-white border-primary-300"
      : variant === "secondary"
        ? "border-primary-300 text-primary-300"
        : "border-gray-400";

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`cursor-pointer border rounded-lg ${style} ${btnVariant} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}
