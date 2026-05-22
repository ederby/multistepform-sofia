import { useFormContext } from "react-hook-form";
import FormCol from "../ui/FormCol";
import RadioGroup from "../ui/RadioGroup";
import TextAreaField from "../ui/TextAreaField";
import Divider from "../ui/Divider";
import CheckboxGroup from "../ui/CheckboxGroup";
import TextField from "../ui/TextField";
import { meatOptions, seafoodOptions } from "../utils/options";

export default function Step03Diet01() {
  const { watch } = useFormContext();
  const values = watch("diet1");

  return (
    <div className="grid grid-cols-12 gap-x-4 gap-y-4 md:gap-y-6 mt-5 items-end">
      <FormCol span="full">
        <RadioGroup
          name="diet1.hasType"
          label="Har du någon särskild kosthållning eller diet?"
          options={[
            { value: "true", label: "Ja" },
            { value: "false", label: "Nej" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>

      {values.hasType === "true" && (
        <FormCol span="full">
          <TextAreaField
            name="diet1.hasTypeNotes"
            label="Beskriv vilken typ av kost"
            required="Detta fält är obligatoriskt"
          />
        </FormCol>
      )}

      <FormCol span="full">
        <CheckboxGroup
          name="diet1.dietMealPattern"
          label="Hur ser dina måltidsvanor ut?"
          options={[
            { value: "regular", label: "Regelbunden" },
            { value: "irregular", label: "Oregelbundna" },
            { value: "stressEating", label: "Jag äter ofta under stress" },
            { value: "calmEating", label: "Jag äter oftast i lugn och ro" },
            { value: "other", label: "Annat" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>

      {values.dietMealPattern.includes("other") && (
        <FormCol span="full">
          <TextAreaField
            name="diet1.dietMealPatternNotes"
            label="Beskriv mer"
            required="Detta fält är obligatoriskt"
          />
        </FormCol>
      )}

      <Divider />

      <FormCol span="full">
        <CheckboxGroup
          name="diet1.dietFoodType"
          label="Hur skulle du beskriva den mat du oftast äter?"
          options={[
            {
              value: "mostlyHomecooked",
              label: "Främst hemlagad från grunden",
            },
            {
              value: "mixedHomeSemi",
              label: "En blandning av hemlagat och halvfabrikat",
            },
            { value: "mostlyProcessed", label: "Ofta halvfabrikat/färdigmat" },
            {
              value: "takeawayRestaurant",
              label: "Ofta hämtmat eller restaurang",
            },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>
      <FormCol span="full">
        <TextAreaField
          name="diet1.dietFoodTypeNotes"
          label="Utveckla gärna mer"
        />
      </FormCol>

      <FormCol span="half">
        <TextField
          name="diet1.fruits"
          label="Vilka frukter äter du, och hur ofta?"
          placeholder="T.ex. Banan, äpple. 1 frukt om dagen"
          type="text"
          required="Detta fält är obligatoriskt"
        />
      </FormCol>
      <FormCol span="half">
        <TextField
          name="diet1.vegetables"
          label="Vilka grönsaker äter du, och hur ofta?"
          placeholder="T.ex. Morot, vitkål. 1 grönsak om dagen"
          type="text"
          required="Detta fält är obligatoriskt"
        />
      </FormCol>

      <FormCol span="full">
        <CheckboxGroup
          name="diet1.cookingMethods"
          label="Hur brukar din mat vara tillagad? (Flera alternativ kan väljas)"
          options={[
            {
              value: "microwaved",
              label: "Micrad",
            },
            {
              value: "friedDeep",
              label: "Friterad",
            },
            { value: "boiled", label: "Kokt" },
            { value: "panFried", label: "Stekt" },
            { value: "ovenBaked", label: "Ugnsbakad" },
            { value: "raw", label: "Rå" },
            { value: "wokFried", label: "Wokad" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>

      <Divider />

      <FormCol span="half">
        <TextField
          name="diet1.favoriteFoods"
          label="Vilka maträtter eller livsmedel tycker du särskilt mycket om?"
          type="text"
          required="Detta fält är obligatoriskt"
        />
      </FormCol>
      <FormCol span="half">
        <TextField
          name="diet1.foodPositiveResponse"
          label="Vilken mat upplever du att du mår bra av?"
          type="text"
          required="Detta fält är obligatoriskt"
        />
      </FormCol>

      <FormCol span="half">
        <TextField
          name="diet1.cravings"
          label="Vilken typ av mat brukar du ofta bli sugen på?"
          type="text"
          placeholder="T.ex. Sötsaker, salta snacks..."
          required="Detta fält är obligatoriskt"
        />
      </FormCol>
      <FormCol span="half">
        <TextField
          name="diet1.hardToGiveUp"
          label="Finns det något livsmedel, dryck eller annat som du skulle ha svårt att avstå från?"
          type="text"
          placeholder="Mat/dryck/tobak mm."
          required="Detta fält är obligatoriskt"
        />
      </FormCol>

      <Divider />

      <FormCol span="full">
        <RadioGroup
          name="diet1.meatConsumption"
          label="Hur ofta äter du kött?"
          options={[
            {
              value: "daily",
              label: "Dagligen",
            },
            {
              value: "weekly",
              label: "Några gånger i veckan",
            },
            { value: "monthly", label: "Någon gång i månaden" },
            { value: "false", label: "Aldrig" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>

      {values.meatConsumption && values.meatConsumption !== "false" && (
          <>
            <FormCol span="full">
              <CheckboxGroup
                name="diet1.meatConsumptionType"
                label="Vilken typ av kött äter du och hur många gånger per vecka?"
                options={meatOptions}
                order="row"
                required="Välj ett alternativ"
              />
            </FormCol>
            {values.meatConsumptionType.map((type) => (
              <FormCol
                key={type}
                span={
                  values.meatConsumptionType.length === 1
                    ? "full"
                    : values.meatConsumptionType.length === 2
                      ? "half"
                      : values.meatConsumptionType.length === 3
                        ? "third"
                        : "fourth"
                }
              >
                <TextField
                  name={`diet1.meatFrequency.${type}`}
                  label={
                    meatOptions.find((option) => option.value === type).label
                  }
                  type="number"
                  min={0}
                  required="Detta fält är obligatoriskt"
                />
              </FormCol>
            ))}
          </>
        )}

      <Divider />

      <FormCol span="full">
        <RadioGroup
          name="diet1.seafoodConsumption"
          label="Hur ofta äter du fisk/skaldjur?"
          options={[
            {
              value: "daily",
              label: "Dagligen",
            },
            {
              value: "weekly",
              label: "Några gånger i veckan",
            },
            { value: "monthly", label: "Någon gång i månaden" },
            { value: "false", label: "Aldrig" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>

      {values.seafoodConsumption && values.seafoodConsumption !== "false" && (
          <>
            <FormCol span="full">
              <CheckboxGroup
                name="diet1.seafoodConsumptionType"
                label="Vilken typ av fisk/skaldjur äter du och hur många gånger per vecka?"
                options={seafoodOptions}
                order="row"
                required="Välj ett alternativ"
              />
            </FormCol>
            {values.seafoodConsumptionType.map((type) => (
              <FormCol
                key={type}
                span={
                  values.seafoodConsumptionType.length === 1
                    ? "full"
                    : values.seafoodConsumptionType.length === 2
                      ? "half"
                      : values.seafoodConsumptionType.length === 3
                        ? "third"
                        : "fourth"
                }
              >
                <TextField
                  name={`diet1.seafoodFrequency.${type}`}
                  label={
                    seafoodOptions.find((option) => option.value === type).label
                  }
                  type="number"
                  min={0}
                  required="Detta fält är obligatoriskt"
                />
              </FormCol>
            ))}
          </>
        )}
      {["otherFish", "otherSeafood"].some((v) =>
        values.seafoodConsumptionType.includes(v),
      ) && (
        <FormCol span="full">
          <TextAreaField
            name="diet1.otherSeafoodNotes"
            label="Vilken annan fisk/skaldjur?"
          />
        </FormCol>
      )}

      {values.seafoodConsumption && values.seafoodConsumption !== "false" && (
          <FormCol span="full">
            <CheckboxGroup
              name="diet1.seafoodMethods"
              label="Hur äter du oftast din fisk/skaldjur?"
              options={[
                {
                  value: "can",
                  label: "Burk",
                },
                {
                  value: "frozen",
                  label: "Fryst",
                },
                { value: "smoked", label: "Rökt" },
                { value: "pickled", label: "Gravad" },
              ]}
              order="row"
              required="Välj ett alternativ"
            />
          </FormCol>
        )}

      <FormCol span="full">
        <TextField
          name="diet1.seafoodWeeklyPortions"
          label="Hur många portioner fisk/skaldjur äter du varje vecka?"
          type="number"
          min={0}
          placeholder="Antal portioner"
          required="Detta fält är obligatoriskt"
        />
      </FormCol>
    </div>
  );
}
