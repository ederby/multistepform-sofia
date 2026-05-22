import { useFormContext } from "react-hook-form";
import ErrorField from "./ErrorField";

export default function TextAreaField({
  name,
  disabled = false,
  placeholder,
  label,
  rows = 3,
  required = false,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const fieldError = name.split(".").reduce((obj, key) => obj?.[key], errors);

  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="block mb-2.5 text-sm font-medium text-heading"
        >
          {label} {required && <span className="text-red-700">*</span>}
        </label>
      )}
      <textarea
        {...register(name, { required })}
        id={name}
        rows={rows}
        disabled={disabled}
        placeholder={placeholder}
        className={`${fieldError ? "border-red-700" : "border-gray-400"} w-full border border-default-medium text-heading text-sm rounded focus:ring-brand focus:border-brand block px-3 py-2.5 shadow-xs placeholder:text-body`}
      />
      {fieldError && <ErrorField>{fieldError.message}</ErrorField>}
    </div>
  );
}
