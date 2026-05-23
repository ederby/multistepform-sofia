import { useFormContext } from "react-hook-form";
import FormCol from "../ui/FormCol";
import RadioGroup from "../ui/RadioGroup";
import TextAreaField from "../ui/TextAreaField";
import Divider from "../ui/Divider";
import CheckboxGroup from "../ui/CheckboxGroup";
import TextField from "../ui/TextField";

export default function Step06Lifestyle02() {
  const { watch } = useFormContext();
  const values = watch("lifestyle2");

  return (
    <div className="grid grid-cols-12 gap-x-4 gap-y-4 md:gap-y-6 mt-5 items-end">

      {/* Sömn */}
      <FormCol span="full">
        <CheckboxGroup
          name="lifestyle2.sleepQuality"
          label="Hur är din sömn? (Flera alternativ kan väljas)"
          options={[
            { value: "regular", label: "Regelbunden" },
            { value: "deep", label: "Djup" },
            { value: "lightSleeper", label: "Lättväckt" },
            { value: "wakesDuringNight", label: "Sover inte natten igenom" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>

      <FormCol span="full">
        <CheckboxGroup
          name="lifestyle2.sleepOnset"
          label="Hur är det med insomning och uppvaknande?"
          options={[
            { value: "easyToSleep", label: "Lätt att somna" },
            { value: "hardToSleep", label: "Svårt att somna" },
            { value: "hardToWake", label: "Svårt att vakna" },
            { value: "easyToWake", label: "Lätt att vakna" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>

      <FormCol span="half">
        <TextField
          name="lifestyle2.bedtimeWeekdays"
          label="Vilken tid lägger du dig på vardagar?"
          placeholder="T.ex. 22:30"
          type="text"
          required="Detta fält är obligatoriskt"
        />
      </FormCol>
      <FormCol span="half">
        <TextField
          name="lifestyle2.waketimeWeekdays"
          label="Vilken tid går du upp på vardagar?"
          placeholder="T.ex. 07:00"
          type="text"
          required="Detta fält är obligatoriskt"
        />
      </FormCol>
      <FormCol span="half">
        <TextField
          name="lifestyle2.bedtimeWeekends"
          label="Vilken tid lägger du dig på helgen?"
          placeholder="T.ex. 23:30"
          type="text"
          required="Detta fält är obligatoriskt"
        />
      </FormCol>
      <FormCol span="half">
        <TextField
          name="lifestyle2.waketimeWeekends"
          label="Vilken tid går du upp på helgen?"
          placeholder="T.ex. 09:00"
          type="text"
          required="Detta fält är obligatoriskt"
        />
      </FormCol>

      <Divider />

      {/* Energinivå under dagen */}
      <FormCol span="half">
        <RadioGroup
          name="lifestyle2.energyPeak"
          label="När på dagen känner du dig som piggast?"
          options={[
            { value: "morning", label: "Morgon" },
            { value: "forenoon", label: "FM" },
            { value: "lunch", label: "Lunch" },
            { value: "afternoon", label: "EM" },
            { value: "evening", label: "Kväll" },
            { value: "night", label: "Natt" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>
      <FormCol span="half">
        <RadioGroup
          name="lifestyle2.energyLow"
          label="När på dagen känner du dig som tröttast?"
          options={[
            { value: "morning", label: "Morgon" },
            { value: "forenoon", label: "FM" },
            { value: "lunch", label: "Lunch" },
            { value: "afternoon", label: "EM" },
            { value: "evening", label: "Kväll" },
            { value: "night", label: "Natt" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>

      <Divider />

      {/* Mobiltelefon */}
      <FormCol span="full">
        <RadioGroup
          name="lifestyle2.phoneInMorning"
          label="Tittar du på din mobiltelefon det första du gör på morgonen?"
          options={[
            { value: "true", label: "Ja" },
            { value: "false", label: "Nej" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>
      <FormCol span="half">
        <TextField
          name="lifestyle2.phoneShutdownTime"
          label="När slutar du använda mobilen på kvällen?"
          placeholder="T.ex. 21:00"
          type="text"
        />
      </FormCol>
      <FormCol span="half">
        <TextAreaField
          name="lifestyle2.phoneImpact"
          label="Tycker du att din mobil påverkar ditt fokus eller dina relationer?"
          rows={2}
        />
      </FormCol>

      <Divider />

      {/* Utomhus */}
      <FormCol span="full">
        <RadioGroup
          name="lifestyle2.outdoors60min"
          label="Är du utomhus minst 60 minuter varje dag?"
          options={[
            { value: "true", label: "Ja" },
            { value: "false", label: "Nej" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>

      <Divider />

      {/* Minne & koncentration */}
      <FormCol span="full">
        <CheckboxGroup
          name="lifestyle2.cognitiveSymptoms"
          label="Vilka alternativ stämmer in på dig?"
          options={[
            { value: "goodMemory", label: "Bra minne" },
            { value: "poorMemory", label: "Dåligt minne" },
            { value: "poorLearning", label: "Dålig inlärning" },
            { value: "hardDecisions", label: "Svårt att ta beslut" },
            { value: "hardFocus", label: "Svårt att koncentrera mig" },
            { value: "brainFog", label: "Hjärndimma" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>

      <Divider />

      {/* Andning */}
      <FormCol span="full">
        <CheckboxGroup
          name="lifestyle2.breathing"
          label="Hur upplever du din andning under dagen?"
          options={[
            { value: "calmBreathing", label: "Andas lugnt och känner mig lugn" },
            { value: "fastBreathing", label: "Andas snabbt/ytligt" },
            { value: "barelyNotice", label: "Känner knappt mina andetag" },
            { value: "fastHeartbeat", label: "Snabbt hjärtslag" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>
      <FormCol span="full">
        <TextAreaField
          name="lifestyle2.calmBreathingTrigger"
          label="Vad får dig att känna dig lugn och kunna andas djupt?"
          rows={2}
        />
      </FormCol>

      <Divider />

      {/* Känslor */}
      <FormCol span="full">
        <CheckboxGroup
          name="lifestyle2.emotions"
          label="Vilka känslor stämmer ofta in på dig?"
          options={[
            { value: "moodSwings", label: "Humörsvängningar" },
            { value: "evenMood", label: "Jämn i humöret" },
            { value: "quickTemper", label: "Brusar lätt upp" },
            { value: "grudges", label: "Långsint" },
            { value: "anxiety", label: "Ångest" },
            { value: "fears", label: "Rädslor" },
            { value: "nervousness", label: "Nervositet" },
            { value: "lowMood", label: "Nedstämdhet" },
            { value: "anger", label: "Arg" },
            { value: "worried", label: "Orolig" },
            { value: "ambivalent", label: "Ambivalent" },
            { value: "rapidEmotions", label: "Skiftar känslor snabbt" },
            { value: "calm", label: "Lugn" },
          ]}
          order="row"
          required="Välj ett alternativ"
        />
      </FormCol>

      <Divider />

      {/* Immunförsvar */}
      <FormCol span="full">
        <CheckboxGroup
          name="lifestyle2.immuneSystem"
          label="Hur är ditt immunförsvar?"
          options={[
            { value: "infectionProne", label: "Infektionskänslig" },
            { value: "easyColds", label: "Får lätt förkylningar" },
            { value: "easilyInfected", label: "Smittas lätt av andra" },
            { value: "false", label: "Sällan sjuk" },
          ]}
          order="row"
        />
      </FormCol>
      <FormCol span="full">
        <TextAreaField
          name="lifestyle2.immuneNotes"
          label="Är det något annat du vill tillägga angående ditt immunförsvar?"
          rows={2}
        />
      </FormCol>
    </div>
  );
}
