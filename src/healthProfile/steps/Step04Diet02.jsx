import { useFormContext } from "react-hook-form";
import FormCol from "../ui/FormCol";
import RadioGroup from "../ui/RadioGroup";
import TextAreaField from "../ui/TextAreaField";
import Divider from "../ui/Divider";
import CheckboxGroup from "../ui/CheckboxGroup";
import TextField from "../ui/TextField";

export default function Step04Diet02() {
  const { watch } = useFormContext();
  const values = watch("diet2");

  return (
    <div className="grid grid-cols-12 gap-x-4 gap-y-4 md:gap-y-6 mt-5 items-end">
      {/* Vete / Mjölkprodukter / Socker / Koffein */}
      <FormCol span="half">
        <TextField
          name="diet2.wheatFrequency"
          label="Hur många gånger per vecka äter du vete?"
          placeholder="Tex. bröd, kakor, kex, pasta, bulgur, mussli mm."
          type="number"
          min={0}
          required="Detta fält är obligatoriskt"
        />
      </FormCol>
      <FormCol span="half">
        <TextField
          name="diet2.dairyFrequency"
          label="Hur många gånger per vecka äter du mjölkprodukter?"
          placeholder="Tex. mjölk, ost, glass, yoghurt, milkshake mm."
          type="number"
          min={0}
          required="Detta fält är obligatoriskt"
        />
      </FormCol>
      <FormCol span="half">
        <TextField
          name="diet2.sugarFrequency"
          label="Hur många gånger per vecka äter du socker?"
          placeholder="Tex. kaffebröd, kakor, ketchup, godis, läsk, fruktyoghurt mm."
          type="number"
          min={0}
          required="Detta fält är obligatoriskt"
        />
      </FormCol>
      <FormCol span="half">
        <TextField
          name="diet2.caffeineFrequency"
          label="Hur många gånger per vecka konsumerar du koffein?"
          placeholder="Tex. kaffe, svart te mm."
          type="number"
          min={0}
          required="Detta fält är obligatoriskt"
        />
      </FormCol>

      <Divider />

      {/* Snabbmat / halvfabrikat */}
      <FormCol span="third">
        <TextField
          name="diet2.fastFood.pizza"
          label="Pizza"
          placeholder="Ggr/vecka"
          type="number"
          min={0}
          required="Detta fält är obligatoriskt"
        />
      </FormCol>
      <FormCol span="third">
        <TextField
          name="diet2.fastFood.kebabFalafel"
          label="Kebab/falafel"
          placeholder="Ggr/vecka"
          type="number"
          min={0}
          required="Detta fält är obligatoriskt"
        />
      </FormCol>
      <FormCol span="third">
        <TextField
          name="diet2.fastFood.streetFood"
          label="Gatukök"
          placeholder="Ggr/vecka"
          type="number"
          min={0}
          required="Detta fält är obligatoriskt"
        />
      </FormCol>
      <FormCol span="third">
        <TextField
          name="diet2.fastFood.burger"
          label="Hamburgare"
          placeholder="Ggr/vecka"
          type="number"
          min={0}
          required="Detta fält är obligatoriskt"
        />
      </FormCol>
      <FormCol span="third">
        <TextField
          name="diet2.fastFood.readyMeals"
          label="Hel/halvfabrikat"
          placeholder="Ggr/vecka"
          type="number"
          min={0}
          required="Detta fält är obligatoriskt"
        />
      </FormCol>

      <Divider />

      {/* Reaktioner på livsmedel */}
      <FormCol span="full">
        <CheckboxGroup
          name="diet2.foodReactions"
          label="Får du några reaktioner av något av följande födoämnen?"
          options={[
            { value: "wheat", label: "Vete" },
            { value: "dairy", label: "Mjölkprodukter" },
            { value: "onion", label: "Lök" },
            { value: "fattyFood", label: "Fet mat/fett" },
            { value: "pepper", label: "Paprika" },
            { value: "sugar", label: "Socker" },
            { value: "caffeine", label: "Koffein" },
            { value: "alcohol", label: "Alkohol" },
          ]}
          order="row"
        />
      </FormCol>

      {values.foodReactions.length > 0 && (
        <FormCol span="full">
          <TextAreaField
            name="diet2.foodReactionSymptoms"
            label="Vilka symptom får du?"
            placeholder="Tex. illamående, gaser, svullen buk, hyperaktivitet, trötthet, slembildning"
            required="Detta fält är obligatoriskt"
          />
        </FormCol>
      )}

      <Divider />

      {/* Socker/fritering */}
      <FormCol span="half">
        <CheckboxGroup
          name="diet2.sugarFriedProducts"
          label="Vilka produkter med socker/fritering äter du?"
          options={[
            { value: "cookies", label: "Kakor" },
            { value: "chocolate", label: "Choklad" },
            { value: "candy", label: "Smågosdis" },
            { value: "iceCream", label: "Glass" },
            { value: "cereal", label: "Flingor" },
            { value: "soda", label: "Läsk" },
            { value: "juice", label: "Saft" },
            { value: "jam", label: "Marmelad/sylt" },
            { value: "fruitYogurt", label: "Fruktyoghurt" },
            { value: "chips", label: "Chips" },
            { value: "fries", label: "Pommes frites" },
            { value: "falafel", label: "Falafel" },
            { value: "other", label: "Övrigt" },
          ]}
          order="row"
        />
      </FormCol>

      {values.sugarFriedProducts.includes("other") && (
        <FormCol span="half">
          <TextField
            name="diet2.sugarFriedOther"
            label="Beskriv övrigt"
            placeholder="Annat socker/fritering"
            type="text"
            required="Detta fält är obligatoriskt"
          />
        </FormCol>
      )}

      {values.sugarFriedProducts.length > 0 && (
        <FormCol span="half">
          <TextField
            name="diet2.sugarFriedFrequency"
            label="Hur många gånger i veckan?"
            placeholder="Antal gånger"
            type="number"
            min={0}
            required="Detta fält är obligatoriskt"
          />
        </FormCol>
      )}

      <Divider />

      {/* Alkohol */}
      <FormCol span="full">
        <RadioGroup
          name="diet2.drinksAlcohol"
          label="Dricker du alkohol?"
          options={[
            { value: "true", label: "Ja" },
            { value: "false", label: "Nej" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>

      {values.drinksAlcohol === "true" && (
        <>
          <FormCol span="half">
            <RadioGroup
              name="diet2.alcoholPreference"
              label="Vad föredrar du?"
              options={[
                { value: "beer", label: "Öl" },
                { value: "wine", label: "Vin" },
                { value: "spirits", label: "Starksprit" },
              ]}
              order="row"
              required="Välj ett alternativ"
            />
          </FormCol>
          <FormCol span="half">
            <TextField
              name="diet2.alcoholWeekly"
              label="Hur mycket alkohol dricker du i veckan?"
              placeholder="T.ex. 2 glas vin, 3 öl..."
              type="text"
              required="Detta fält är obligatoriskt"
            />
          </FormCol>
        </>
      )}

      <Divider />

      {/* Allergier */}
      <FormCol span="full">
        <TextAreaField
          name="diet2.allergies"
          label="Har du några allergier/födoämnesöverkänslighet?"
          rows={4}
        />
      </FormCol>
    </div>
  );
}
