import Label from "./Label";
import Button from "./Button";
import FieldListRow from "./FieldListRow";
import { useFieldArray, useFormContext } from "react-hook-form";

export default function FieldList({ inputs, product = "rad", name, emptyRow }) {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name });

  function addRow() {
    append(emptyRow ?? { productName: "", dosage: "", duration: "" });
  }
  function removeRow(index) {
    if (fields.length === 1) return;
    remove(index);
  }

  return (
    <>
      <div className="hidden md:grid grid-cols-19 gap-4 md:gap-4 mt-5 items-end">
        {inputs.map((input) => (
          <div key={input.id} className="col-span-12 md:col-span-6">
            <Label htmlFor={input.id}>{input.label}</Label>
          </div>
        ))}
      </div>
      {fields.map((field, index) => (
        <div
          className="grid grid-cols-12 md:grid-cols-19 gap-x-4 md:gap-x-4 mb-4 items-start border-b border-gray-200 pb-4"
          key={field.id}
        >
          <FieldListRow
            removeRow={removeRow}
            index={index}
            inputs={inputs}
            rowsLength={fields.length}
            name={name}
            required="Detta fält är obligatorisk"
          />
        </div>
      ))}
      <div className="mt-2.5">
        <Button size="small" onClick={addRow}>
          Lägg till {product}
        </Button>
      </div>
    </>
  );
}
