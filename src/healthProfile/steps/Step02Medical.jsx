import CheckboxGroup from "../ui/CheckboxGroup";
import FormCol from "../ui/FormCol";
import TextAreaField from "../ui/TextAreaField";
import FieldList from "../ui/FieldList";
import Divider from "../ui/Divider";
import RadioGroup from "../ui/RadioGroup";
import { useFormContext } from "react-hook-form";

export default function Step02Medical() {
  const { watch } = useFormContext();
  const values = watch("medical");
  const showMedicineList =
    values.medicines?.length > 0 && !values.medicines?.includes("false");

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6 mt-5">
      <FormCol span="full">
        <RadioGroup
          name="medical.familyHistory"
          label="Har du eller någon i din släkt haft sjukdomar, operationer, vaccinationer eller antibiotikakurer?"
          options={[
            { value: "yes", label: "Ja" },
            { value: "no", label: "Nej" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>
      {values.familyHistory === "yes" && (
        <FormCol span="full">
          <TextAreaField
            name="medical.familyNotes"
            label="Ange gärna år, typ och antal."
            rows={5}
          />
        </FormCol>
      )}

      <Divider />

      <FormCol span="full">
        <CheckboxGroup
          name="medical.medicines"
          label="Tar du några mediciner?"
          options={[
            { value: "medicines", label: "Läkemedel" },
            { value: "dietary-supplements", label: "Kosttillskott" },
            { value: "herbs", label: "Örter" },
            { value: "homeopathic-remedies", label: "Homeopatmedel" },
            { value: "other", label: "Annat" },
            { value: "false", label: "Inget" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>

      {showMedicineList && (
        <FormCol span="full">
          <FieldList
            name="medical.medicinesList"
            inputs={[
              {
                label: "Produktnamn",
                id: "productName",
                placeholder: "Produktnamn",
              },
              { label: "Dosering", id: "dosage", placeholder: "Dosering" },
              {
                label: "Sedan hur länge?",
                id: "duration",
                placeholder: "T.ex. 13 månader",
              },
            ]}
            product="medicin"
            emptyRow={{ productName: "", dosage: "", duration: "" }}
          />
        </FormCol>
      )}

      <Divider />

      <FormCol span="full">
        <RadioGroup
          name="medical.otherTreatment"
          label="Går du på någon annan behandling?"
          options={[
            { value: "yes", label: "Ja" },
            { value: "no", label: "Nej" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>

      {values.otherTreatment === "yes" && (
        <FormCol span="full">
          <TextAreaField
            name="medical.otherTreatmentDetails"
            label="Vilken/vilka och hur länge?"
            rows={5}
            required="Detta fält är obligatoriskt"
          />
        </FormCol>
      )}
    </div>
  );
}
