import { useFormContext } from "react-hook-form";
import ErrorField from "./ErrorField";

export default function CheckboxGroup({
  name,
  label,
  options,
  order = "col",
  required,
}) {
  const flexOrder = order === "col" ? "flex-col" : "flex-row gap-2.5";
  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();
  const values = watch(name);
  const { onChange: registerOnchange, ...rest } = register(name, { required });
  const fieldError = name.split(".").reduce((obj, key) => obj?.[key], errors);

  function handleChange(e) {
    if (e.target.value === "false") {
      values.includes("false") ? setValue(name, []) : setValue(name, ["false"]);
    } else {
      values.includes("false") &&
        setValue(name, [
          ...values.filter((value) => value !== "false"),
          e.target.value,
        ]);
      registerOnchange(e);
    }
  }

  return (
    <>
      <fieldset className={`flex ${flexOrder} flex-wrap gap-y-1.5`}>
        <legend className="block mb-2.5 text-sm font-medium text-heading">
          {label} {required && <span className="text-red-700">*</span>}
        </legend>
        {options.map((option) => (
          <div className="flex items-center gap-1.5" key={option.value}>
            <input
              {...rest}
              type="checkbox"
              id={`${name}-${option.value}`}
              onChange={handleChange}
              value={option.value}
              className="cursor-pointer appearance-none w-4 h-4 rounded-full border border-gray-400 checked:border-primary-300 checked:shadow-[inset_0_0_0_2px_white,inset_0_0_0_8px_var(--color-primary-300)]"
            />
            <label
              className="cursor-pointer flex-1"
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
