import { useFormContext } from "react-hook-form";
import { ChevronDown } from "lucide-react";
import Label from "./Label";
import ErrorField from "./ErrorField";

export default function SelectField({
  name,
  label,
  options,
  required,
  placeholder = "Välj…",
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const fieldError = name.split(".").reduce((obj, key) => obj?.[key], errors);

  return (
    <div>
      {label && (
        <Label htmlFor={name}>
          {label} {required && <span className="text-red-700">*</span>}
        </Label>
      )}
      <div className="relative">
        <select
          {...register(name, { required })}
          id={name}
          className={`w-full appearance-none border ${fieldError ? "border-red-700" : "border-gray-400"} text-heading text-sm rounded-lg focus:ring-primary-100 focus:border-primary-100 block pl-3 pr-9 py-2.5 shadow-xs bg-white cursor-pointer transition-colors`}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={18}
          strokeWidth={1.5}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-heading"
        />
      </div>
      {fieldError && <ErrorField>{fieldError.message}</ErrorField>}
    </div>
  );
}
