import Divider from "../ui/Divider";
import FormCol from "../ui/FormCol";
import RadioGroup from "../ui/RadioGroup";
import TextAreaField from "../ui/TextAreaField";
import TextField from "../ui/TextField";

export default function Step01General() {
  return (
    <div className="grid grid-cols-12 gap-x-4 gap-y-4 md:gap-y-6 mt-5">
      <FormCol span="half">
        <TextField
          name="general.name"
          label="Namn"
          placeholder="För- och efternamn"
          required="Detta fält är obligatoriskt"
        />
      </FormCol>
      <FormCol span="fourth">
        <TextField
          name="general.personalNumber"
          label="Personnummer"
          placeholder="ÅÅMMDD-xxxx"
          type="text"
          required="Detta fält är obligatoriskt"
          pattern={{
            value: /^\d{6}-?\d{4}$/,
            message: "Ange i formatet ÅÅMMDD-XXXX eller ÅÅMMDDxxxx",
          }}
        />
      </FormCol>
      <FormCol span="fourth">
        <TextField
          name="general.consultationDate"
          label="Datum för konsultation"
          type="date"
          required="Välj ett datum"
        />
      </FormCol>

      <FormCol span="third">
        <TextField
          name="general.height"
          label="Längd (cm)"
          placeholder="Längd i cm"
          type="number"
          min={50}
          max={250}
          required="Detta fält är obligatoriskt"
        />
      </FormCol>
      <FormCol span="third">
        <TextField
          name="general.weight"
          label="Vikt (kg)"
          placeholder="Vikt i kg"
          type="number"
          min={20}
          max={300}
          required="Detta fält är obligatoriskt"
        />
      </FormCol>
      <FormCol span="third">
        <RadioGroup
          name="general.gender"
          label="Kön"
          options={[
            { value: "male", label: "Man" },
            { value: "female", label: "Kvinna" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>

      <Divider />

      <FormCol span="full">
        <TextField name="general.address" label="Adress" placeholder="Adress" />
      </FormCol>

      <FormCol span="half">
        <TextField name="general.occupation" label="Yrke" placeholder="Yrke" />
      </FormCol>
      <FormCol span="half">
        <TextField
          name="general.phone"
          label="Telefon"
          placeholder="Telefon"
          type="tel"
          required="Detta fält är obligatoriskt"
          pattern={{
            value: /^[0-9]{7,11}$/,
            message: "Ange ett giltigt nummer",
          }}
        />
      </FormCol>

      <Divider />

      <FormCol span="full">
        <TextAreaField
          name="general.notes"
          label="Vad söker du för och hur länge har du haft symptomen?"
          rows={5}
          required="Detta fält är obligatoriskt"
        />
      </FormCol>
    </div>
  );
}
