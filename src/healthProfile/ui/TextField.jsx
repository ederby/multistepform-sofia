import { useFormContext } from "react-hook-form";
import Label from "./Label";
import ErrorField from "./ErrorField";

export default function TextField({
  label,
  placeholder,
  disabled = false,
  type = "text",
  name,
  required,
  pattern,
  min,
  max,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const todaysDate =
    type === "date" ? new Date().toLocaleDateString("sv-SE") : undefined;
  const fieldError = name.split(".").reduce((obj, key) => obj?.[key], errors);
  const dateValidation =
    type === "date"
      ? {
          validate: (value) =>
            !value ||
            new Date(value) >= new Date(new Date().toDateString()) ||
            "Datumet kan inte vara i det förflutna",
        }
      : {};
  const minMax =
    type === "number" && (min !== undefined || max !== undefined)
      ? {
          min: { value: min, message: `Minst ${min}` },
          max: { value: max, message: `Max ${max}` },
        }
      : {};

  return (
    <div>
      {label && (
        <Label htmlFor={name}>
          {label} {required && <span className="text-red-700">*</span>}
        </Label>
      )}
      <input
        {...register(name, { required, pattern, ...dateValidation, ...minMax })}
        id={name}
        className={`w-full border ${fieldError ? "border-red-700" : "border-gray-400"} text-heading text-sm rounded-lg focus:ring-primary-100 focus:border-primary-100 block px-3 py-2.5 shadow-xs placeholder:text-body transition-colors`}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        min={type === "date" ? todaysDate : undefined}
      />
      {fieldError && <ErrorField>{fieldError.message}</ErrorField>}
    </div>
  );
}
