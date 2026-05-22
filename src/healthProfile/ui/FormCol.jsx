export default function FormCol({ children, span = "full" }) {
  const style =
    span === "fourth"
      ? "md:col-span-3"
      : span === "third"
        ? "md:col-span-4"
        : span === "half"
          ? "md:col-span-6"
          : "";

  return <div className={`col-span-12 ${style}`}>{children}</div>;
}
