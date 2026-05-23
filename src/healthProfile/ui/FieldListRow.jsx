import { CircleX } from "lucide-react";
import Label from "./Label";
import { Fragment } from "react";
import { useFormContext } from "react-hook-form";
import ErrorField from "./ErrorField";

export default function FieldListRow({
  removeRow,
  inputs,
  index,
  rowsLength,
  name,
  required,
}) {
  const style = `md:col-span-${18 / inputs.length}`;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      {inputs.map((input, i) => {
        const inputError = `${name}.${index}.${input.id}`
          .split(".")
          .reduce((obj, key) => obj?.[key], errors);
        return (
          <div
            className={`col-span-12 mb-2 md:mb-0 ${style}`}
            key={`${input.id}-${i}`}
          >
            <Label htmlFor={input.id} style="col-span-full inline md:hidden">
              {input.label}
            </Label>
            <input
              {...register(`${name}.${index}.${input.id}`, { required })}
              id={`${index}-${input.id}`}
              type={input.type || "text"}
              placeholder={input.placeholder}
              className={`w-full border ${inputError ? "border-red-700" : "border-gray-400"} text-heading text-sm rounded-lg focus:ring-primary-100 focus:border-primary-100 block px-3 py-2.5 shadow-xs placeholder:text-body transition-colors`}
            />
            {inputError && <ErrorField>{inputError.message}</ErrorField>}
          </div>
        );
      })}

      <button
        className={`col-span-1 self-center text-primary-100 transition-colors ${rowsLength > 1 ? "cursor-pointer hover:text-primary-600" : "cursor-not-allowed hidden md:inline"}`}
        onClick={() => removeRow(index)}
        type="button"
      >
        <CircleX strokeWidth={1} />
      </button>
    </>
  );
}
