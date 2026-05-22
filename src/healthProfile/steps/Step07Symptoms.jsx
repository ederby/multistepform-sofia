import { useFormContext } from "react-hook-form";
import FormCol from "../ui/FormCol";
import RadioGroup from "../ui/RadioGroup";
import TextAreaField from "../ui/TextAreaField";
import Divider from "../ui/Divider";
import CheckboxGroup from "../ui/CheckboxGroup";
import TextField from "../ui/TextField";

export default function Step07Symptoms() {
  const { watch } = useFormContext();
  const values = watch("symptoms");

  return (
    <div className="grid grid-cols-12 gap-x-4 gap-y-4 md:gap-y-6 mt-5 items-end">

      {/* Matsmältning */}
      <FormCol span="full">
        <CheckboxGroup
          name="symptoms.digestiveSymptoms"
          label="Vilka mag- och tarmsymptom stämmer in på dig?"
          options={[
            { value: "gas", label: "Gaser" },
            { value: "diarrhea", label: "Diarré" },
            { value: "constipation", label: "Förstoppning" },
            { value: "itching", label: "Klåda i ändtarmen" },
            { value: "reflux", label: "Sura uppstötningar" },
            { value: "nausea", label: "Illamående" },
            { value: "bloated", label: "Uppsvälld" },
          ]}
          order="row"
        />
      </FormCol>

      {values.digestiveSymptoms.length > 0 && (
        <>
          <FormCol span="full">
            <CheckboxGroup
              name="symptoms.digestiveTiming"
              label="När känner du av dessa symptom?"
              options={[
                { value: "beforeMeal", label: "Före måltid" },
                { value: "afterMeal", label: "Efter måltid" },
                { value: "skippedMeal", label: "Om jag hoppar över en måltid" },
                { value: "heavyMeal", label: "Vid tunga/sena måltider" },
              ]}
              order="row"
              required="Välj ett alternativ"
            />
          </FormCol>
          <FormCol span="half">
            <TextAreaField
              name="symptoms.digestiveTriggers"
              label="Är det något annat som triggar dessa symptom?"
              rows={2}
            />
          </FormCol>
          <FormCol span="half">
            <TextAreaField
              name="symptoms.digestiveAfterFood"
              label="Får du dessa symptom efter någon speciell typ av kost?"
              rows={2}
            />
          </FormCol>
        </>
      )}

      <FormCol span="half">
        <CheckboxGroup
          name="symptoms.stoolConsistency"
          label="Hur upplever du oftast din avföring?"
          options={[
            { value: "hard", label: "Hård" },
            { value: "soft", label: "Mjuk" },
            { value: "loose", label: "Lös" },
            { value: "watery", label: "Vattnig" },
            { value: "sticky", label: "Kladdig" },
            { value: "mucus", label: "Slem" },
            { value: "liquid", label: "Flytande" },
          ]}
          order="col"
          required="Välj ett alternativ"
        />
      </FormCol>
      <FormCol span="half">
        <TextField
          name="symptoms.bowelFrequency"
          label="Hur ofta har du tarmtömning?"
          placeholder="T.ex. 1 gång per dag, 3 gånger i veckan"
          type="text"
          required="Detta fält är obligatoriskt"
        />
      </FormCol>

      <Divider />

      {/* För kvinnor */}
      <FormCol span="full">
        <p className="text-sm font-semibold text-heading">För kvinnor</p>
      </FormCol>

      <FormCol span="half">
        <RadioGroup
          name="symptoms.menstruationLength"
          label="Hur lång är din menstruation?"
          options={[
            { value: "short", label: "Kort" },
            { value: "long", label: "Lång" },
          ]}
          order="row"
        />
      </FormCol>
      <FormCol span="half">
        <RadioGroup
          name="symptoms.menstruationRegularity"
          label="Är din menstruation regelbunden?"
          options={[
            { value: "regular", label: "Regelbunden" },
            { value: "irregular", label: "Oregelbunden" },
          ]}
          order="row"
        />
      </FormCol>
      <FormCol span="half">
        <TextField
          name="symptoms.bleedingDescription"
          label="Hur mycket blöder du och hur många dagar?"
          placeholder="T.ex. Rikligt, 5 dagar"
          type="text"
        />
      </FormCol>
      <FormCol span="half">
        <TextField
          name="symptoms.cycleLength"
          label="Hur lång är din menscykel?"
          placeholder="T.ex. 28 dagar"
          type="text"
        />
      </FormCol>

      <FormCol span="full">
        <CheckboxGroup
          name="symptoms.pmsSymptoms"
          label="Hur är dina PMS-symptom?"
          options={[
            { value: "tearful", label: "Gråtmild" },
            { value: "lowSelfEsteem", label: "Sänkt självförtroende" },
            { value: "aggressive", label: "Aggressiv" },
            { value: "angry", label: "Ilsken" },
            { value: "sugarCraving", label: "Stort sötsug" },
            { value: "fragile", label: "Skör" },
          ]}
          order="row"
        />
      </FormCol>

      <FormCol span="full">
        <CheckboxGroup
          name="symptoms.menopauseSymptoms"
          label="Hur är dina klimakteriesymptom?"
          options={[
            { value: "hotFlashes", label: "Svettningar" },
            { value: "dryMucosa", label: "Sköra slemhinnor" },
            { value: "osteoporosis", label: "Benskörhet" },
          ]}
          order="row"
        />
      </FormCol>

      <FormCol span="half">
        <TextField
          name="symptoms.contraceptives"
          label="Använder du preventivmedel? Vilka?"
          type="text"
          placeholder="T.ex. P-piller, spiral"
        />
      </FormCol>
      <FormCol span="half">
        <TextAreaField
          name="symptoms.otherHormonalSymptoms"
          label="Har du några andra hormonella symptom?"
          rows={2}
        />
      </FormCol>

      <Divider />

      {/* Leder */}
      <FormCol span="full">
        <CheckboxGroup
          name="symptoms.jointSymptoms"
          label="Vilka alternativ stämmer in på dina leder?"
          options={[
            { value: "pain", label: "Smärta" },
            { value: "stiffness", label: "Stelhet" },
            { value: "soreness", label: "Ömhet" },
            { value: "weakMuscles", label: "Försvagade muskler" },
            { value: "cramps", label: "Kramper" },
            { value: "weakStrength", label: "Svag styrka" },
          ]}
          order="row"
        />
      </FormCol>

      {values.jointSymptoms.length > 0 && (
        <>
          <FormCol span="half">
            <TextField
              name="symptoms.jointLocation"
              label="Var sitter dina ledproblem?"
              type="text"
              placeholder="T.ex. Knän, axlar, höfter"
              required="Detta fält är obligatoriskt"
            />
          </FormCol>
          <FormCol span="half">
            <TextField
              name="symptoms.jointOther"
              label="Upplever du några andra symptom i dina leder?"
              type="text"
            />
          </FormCol>
        </>
      )}

      <Divider />

      {/* Muskler */}
      <FormCol span="full">
        <CheckboxGroup
          name="symptoms.muscleSymptoms"
          label="Vilka alternativ stämmer in på dina muskler?"
          options={[
            { value: "pain", label: "Smärta" },
            { value: "stiffness", label: "Stelhet" },
            { value: "soreness", label: "Ömhet" },
            { value: "weakMuscles", label: "Försvagade muskler" },
            { value: "cramps", label: "Kramper" },
            { value: "weakStrength", label: "Svag styrka" },
          ]}
          order="row"
        />
      </FormCol>

      {values.muscleSymptoms.length > 0 && (
        <>
          <FormCol span="half">
            <TextField
              name="symptoms.muscleLocation"
              label="Var sitter dina muskelproblem?"
              type="text"
              placeholder="T.ex. Rygg, nacke, vader"
              required="Detta fält är obligatoriskt"
            />
          </FormCol>
          <FormCol span="half">
            <TextField
              name="symptoms.muscleOther"
              label="Upplever du några andra symptom i dina muskler?"
              type="text"
            />
          </FormCol>
        </>
      )}

      <Divider />

      {/* Blodcirkulation */}
      <FormCol span="full">
        <CheckboxGroup
          name="symptoms.circulationSymptoms"
          label="Vilka alternativ stämmer in på din blodcirkulation?"
          options={[
            { value: "handsWhite", label: "Händer/fötter blir lätt vita" },
            { value: "handsCold", label: "Händer/fötter blir lätt kalla" },
            { value: "handsWarm", label: "Händer/fötter blir lätt varma" },
            { value: "numbWarm", label: "Domnar vid varmt väder" },
            { value: "numbCold", label: "Domnar vid kallt väder" },
          ]}
          order="row"
        />
      </FormCol>

      {values.circulationSymptoms.length > 0 && (
        <FormCol span="full">
          <TextField
            name="symptoms.circulationOther"
            label="Upplever du några andra symptom med din blodcirkulation?"
            type="text"
          />
        </FormCol>
      )}

      <Divider />

      {/* Tänder */}
      <FormCol span="half">
        <CheckboxGroup
          name="symptoms.dentalFillings"
          label="Har du fyllningar i dina tänder?"
          options={[
            { value: "plastic", label: "Plast" },
            { value: "porcelain", label: "Porslin" },
            { value: "amalgam", label: "Amalgam" },
            { value: "gold", label: "Guld" },
          ]}
          order="row"
        />
      </FormCol>
      <FormCol span="half">
        <CheckboxGroup
          name="symptoms.dentalIssues"
          label="Har du något av följande?"
          options={[
            { value: "rootFillings", label: "Rotfyllningar" },
            { value: "teethGrinding", label: "Tandgnissel" },
            { value: "gumDisease", label: "Tandlossning" },
            { value: "toothPain", label: "Tandvärk" },
            { value: "tenseJaw", label: "Spännda käkar" },
          ]}
          order="row"
        />
      </FormCol>

      <Divider />

      {/* Hud */}
      <FormCol span="full">
        <CheckboxGroup
          name="symptoms.skinSymptoms"
          label="Vilka symptom stämmer in på din hud?"
          options={[
            { value: "acne", label: "Akne" },
            { value: "eczema", label: "Eksem" },
            { value: "boils", label: "Bölder" },
            { value: "rash", label: "Utslag" },
            { value: "dry", label: "Torr" },
            { value: "oily", label: "Fet" },
            { value: "sore", label: "Sårig" },
            { value: "easilyBruised", label: "Får lätt blåmärken" },
            { value: "poorHealing", label: "Nedsatt sårläkning" },
            { value: "fungal", label: "Svampig" },
            { value: "sweatsEasily", label: "Svettas lätt" },
          ]}
          order="row"
        />
      </FormCol>

      {values.skinSymptoms.length > 0 && (
        <FormCol span="full">
          <TextField
            name="symptoms.skinLocation"
            label="Var på kroppen har du dessa symptom?"
            type="text"
            placeholder="T.ex. Ansikte, rygg, armar"
            required="Detta fält är obligatoriskt"
          />
        </FormCol>
      )}

      <Divider />

      {/* Avslutande frågor */}
      <FormCol span="full">
        <TextAreaField
          name="symptoms.currentEmotionalState"
          label="Hur mår du just nu? Finns det något som tynger dig känslomässigt?"
          rows={4}
          required="Detta fält är obligatoriskt"
        />
      </FormCol>
      <FormCol span="full">
        <TextAreaField
          name="symptoms.heartDesire"
          label="Har du någon önskan djupt i ditt hjärta som du saknar i ditt liv?"
          rows={3}
        />
      </FormCol>
      <FormCol span="full">
        <TextAreaField
          name="symptoms.otherInfo"
          label="Övrigt som jag som terapeut behöver känna till?"
          rows={3}
        />
      </FormCol>
      <FormCol span="half">
        <TextAreaField
          name="symptoms.motivation"
          label="Hur motiverad är du på att förändra din situation?"
          rows={3}
          required="Detta fält är obligatoriskt"
        />
      </FormCol>
      <FormCol span="half">
        <TextAreaField
          name="symptoms.improvementGoals"
          label="Vad önskar du allra helst se förbättring på?"
          rows={3}
          required="Detta fält är obligatoriskt"
        />
      </FormCol>
    </div>
  );
}
