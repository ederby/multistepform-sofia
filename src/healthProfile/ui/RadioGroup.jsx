import { useFormContext } from "react-hook-form";
import ErrorField from "./ErrorField";

export default function RadioGroup({
  name,
  label,
  options,
  order = "col",
  onChange = () => {},
  required,
}) {
  const flexOrder = order === "col" ? "flex-col" : "flex-row gap-2.5";
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const fieldError = name.split(".").reduce((obj, key) => obj?.[key], errors);
  const { onChange: rhfOnChange, ...registerProps } = register(name, { required });

  function handleOnChange(e) {
    rhfOnChange(e);
    onChange(e.target.value);
  }

  return (
    <>
      <fieldset className={`flex ${flexOrder} gap-y-1.5 flex-wrap`}>
        <legend className="block mb-2.5 text-sm font-medium text-heading">
          {label} {required && <span className="text-red-700">*</span>}
        </legend>
        {options.map((option) => (
          <div className="flex items-center gap-1.5" key={option.value}>
            <input
              {...registerProps}
              type="radio"
              id={`${name}-${option.value}`}
              value={option.value}
              onChange={handleOnChange}
              className="cursor-pointer appearance-none w-4 h-4 rounded-full border border-gray-400 checked:border-primary-300 checked:shadow-[inset_0_0_0_2px_white,inset_0_0_0_8px_var(--color-primary-300)]"
            />
            <label
              className="cursor-pointer"
              htmlFor={`${name}-${option.value}`}
            >
              {option.label}
            </label>
          </div>
        ))}
      </fieldset>
      {fieldError && <ErrorField>{fieldError.message}</ErrorField>}
    </>
  );
}
