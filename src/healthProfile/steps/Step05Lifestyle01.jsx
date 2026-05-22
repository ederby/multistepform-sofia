import { useFormContext } from "react-hook-form";
import FormCol from "../ui/FormCol";
import RadioGroup from "../ui/RadioGroup";
import TextAreaField from "../ui/TextAreaField";
import Divider from "../ui/Divider";
import CheckboxGroup from "../ui/CheckboxGroup";
import TextField from "../ui/TextField";

export default function Step05Lifestyle01() {
  const { watch } = useFormContext();
  const values = watch("lifestyle1");

  return (
    <div className="grid grid-cols-12 gap-x-4 gap-y-4 md:gap-y-6 mt-5 items-end">

      {/* Resor */}
      <FormCol span="full">
        <RadioGroup
          name="lifestyle1.travelFrequency"
          label="Hur ofta reser du?"
          options={[
            { value: "often", label: "Reser ofta" },
            { value: "rarely", label: "Reser sällan" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>
      <FormCol span="half">
        <TextAreaField
          name="lifestyle1.countriesVisited"
          label="Vilka länder har du besökt de senaste tio åren? (Nyligen först)"
          rows={3}
        />
      </FormCol>
      <FormCol span="half">
        <TextAreaField
          name="lifestyle1.travelIllness"
          label="Har du blivit sjuk på någon av dessa resor? Vilka symptom hade du då?"
          rows={3}
        />
      </FormCol>

      <Divider />

      {/* Jobb/skola */}
      <FormCol span="third">
        <RadioGroup
          name="lifestyle1.workSatisfaction"
          label="Hur trivs du på jobbet/skolan?"
          options={[
            { value: "good", label: "Trivs bra" },
            { value: "bad", label: "Trivs dåligt" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>
      <FormCol span="third">
        <RadioGroup
          name="lifestyle1.workStress"
          label="Hur är stressnivån på jobbet/skolan?"
          options={[
            { value: "low", label: "Bra nivå" },
            { value: "ok", label: "Ok nivå" },
            { value: "high", label: "Hög nivå" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>
      <FormCol span="third">
        <RadioGroup
          name="lifestyle1.workload"
          label="Hur är arbetsbördan på jobbet/skolan?"
          options={[
            { value: "stimulating", label: "Stimulerande" },
            { value: "balanced", label: "Balanserad" },
            { value: "heavy", label: "Betungande" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>

      <Divider />

      {/* Familj */}
      <FormCol span="half">
        <RadioGroup
          name="lifestyle1.hasChildren"
          label="Har du några barn?"
          options={[
            { value: "true", label: "Ja" },
            { value: "false", label: "Nej" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>
      <FormCol span="half">
        <RadioGroup
          name="lifestyle1.familyWellbeing"
          label="Hur trivs du med din familj?"
          options={[
            { value: "veryGood", label: "Mycket bra" },
            { value: "veryStress", label: "Mycket stress" },
            { value: "veryAnxious", label: "Mycket oro" },
            { value: "allGood", label: "Allt är bra" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>

      <Divider />

      {/* Motion */}
      <FormCol span="full">
        <RadioGroup
          name="lifestyle1.exercises"
          label="Motionerar du?"
          options={[
            { value: "true", label: "Ja" },
            { value: "false", label: "Nej" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>

      {values.exercises === "true" && (
        <>
          <FormCol span="half">
            <TextField
              name="lifestyle1.exerciseFrequency"
              label="Hur många gånger i veckan motionerar du?"
              placeholder="T.ex. Löpning 2ggr/veckan, styrka 3ggr/veckan"
              type="text"
              required="Detta fält är obligatoriskt"
            />
          </FormCol>
          <FormCol span="half">
            <TextField
              name="lifestyle1.exerciseType"
              label="Vilken typ av motion tycker du mest om?"
              placeholder="T.ex. Yoga, simning, styrketräning"
              type="text"
              required="Detta fält är obligatoriskt"
            />
          </FormCol>
        </>
      )}

      <Divider />

      {/* Meditation & Yoga */}
      <FormCol span={values.meditates === "true" ? "half" : "full"}>
        <RadioGroup
          name="lifestyle1.meditates"
          label="Mediterar du?"
          options={[
            { value: "true", label: "Ja" },
            { value: "false", label: "Nej" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>

      {values.meditates === "true" && (
        <FormCol span="half">
          <TextField
            name="lifestyle1.meditationType"
            label="Vilken typ av meditation och hur ofta?"
            placeholder="T.ex. Mindfulness, 3ggr/veckan"
            type="text"
            required="Detta fält är obligatoriskt"
          />
        </FormCol>
      )}

      <FormCol span={values.doesYoga === "true" ? "half" : "full"}>
        <RadioGroup
          name="lifestyle1.doesYoga"
          label="Gör du yoga?"
          options={[
            { value: "true", label: "Ja" },
            { value: "false", label: "Nej" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>

      {values.doesYoga === "true" && (
        <FormCol span="half">
          <TextField
            name="lifestyle1.yogaType"
            label="Vilken typ av yoga och hur ofta?"
            placeholder="T.ex. Hatha yoga, 2ggr/veckan"
            type="text"
            required="Detta fält är obligatoriskt"
          />
        </FormCol>
      )}

      <Divider />

      {/* Tobak */}
      <FormCol span="full">
        <CheckboxGroup
          name="lifestyle1.tobacco"
          label="Hur ser dina tobaksvanor ut?"
          options={[
            { value: "smokes", label: "Röker" },
            { value: "snuff", label: "Snusar" },
            { value: "nicotineGum", label: "Nikotintuggummi" },
            { value: "false", label: "Ingen tobak" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>

      {values.tobacco.length > 0 && !values.tobacco.includes("false") && (
        <FormCol span="full">
          <TextField
            name="lifestyle1.tobaccoAmount"
            label="I vilken mängd och hur länge har du hållit på?"
            placeholder="T.ex. 10 cigaretter/dag, i 5 år"
            type="text"
            required="Detta fält är obligatoriskt"
          />
        </FormCol>
      )}
    </div>
  );
}
