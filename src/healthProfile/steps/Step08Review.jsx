import { useFormContext } from "react-hook-form";
import { getLabel } from "../utils/options";

function Section({ title, children }) {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-heading uppercase tracking-wide border-b border-gray-200 pb-1 mb-3">
        {title}
      </h3>
      <div className="flex flex-col gap-y-2">
        {children}
      </div>
    </div>
  );
}

function Row({ label, value }) {
  if (!value || (Array.isArray(value) && value.length === 0)) return null;
  const display = Array.isArray(value) ? value.map(getLabel).join(", ") : getLabel(value);
  if (!display) return null;
  return (
    <div className="text-sm">
      <span className="text-heading font-semibold">{label}: </span>
      <span className="text-heading">{display}</span>
    </div>
  );
}

export default function Step08Review() {
  const { watch } = useFormContext();
  const { general, medical, diet1, diet2, lifestyle1, lifestyle2, symptoms } = watch();

  return (
    <div className="mt-5 text-sm">
      <p className="text-body mb-6">
        Kontrollera att alla uppgifter stämmer innan du skickar in formuläret.
      </p>

      <Section title="Allmänna uppgifter">
        <Row label="Namn" value={general?.name} />
        <Row label="Personnummer" value={general?.personalNumber} />
        <Row label="Datum" value={general?.consultationDate} />
        <Row label="Kön" value={general?.gender} />
        <Row label="Längd" value={general?.height ? `${general.height} cm` : ""} />
        <Row label="Vikt" value={general?.weight ? `${general.weight} kg` : ""} />
        <Row label="Adress" value={general?.address} />
        <Row label="Yrke" value={general?.occupation} />
        <Row label="Telefon" value={general?.phone} />
        <Row label="Söker för" value={general?.notes} />
      </Section>

      <Section title="Medicinsk bakgrund">
        <Row label="Sjukdomar/operationer i familjen" value={medical?.familyHistory} />
        <Row label="Anteckningar" value={medical?.familyNotes} />
        <Row label="Mediciner" value={medical?.medicines} />
        <Row label="Annan behandling" value={medical?.otherTreatment === "yes" ? medical?.otherTreatmentDetails : medical?.otherTreatment} />
      </Section>

      <Section title="Kosthållning – del 1">
        <Row label="Speciel kost" value={diet1?.hasType === "true" ? diet1?.hasTypeNotes : diet1?.hasType} />
        <Row label="Måltidsvanor" value={diet1?.dietMealPattern} />
        <Row label="Mattyp" value={diet1?.dietFoodType} />
        <Row label="Frukter" value={diet1?.fruits} />
        <Row label="Grönsaker" value={diet1?.vegetables} />
        <Row label="Tillagning" value={diet1?.cookingMethods} />
        <Row label="Favoritmat" value={diet1?.favoriteFoods} />
        <Row label="Mår bra av" value={diet1?.foodPositiveResponse} />
        <Row label="Begär" value={diet1?.cravings} />
        <Row label="Svårt att avstå" value={diet1?.hardToGiveUp} />
        <Row label="Köttkonsumtion" value={diet1?.meatConsumption} />
        <Row label="Fisk/skaldjur" value={diet1?.seafoodConsumption} />
        <Row label="Portioner fisk/vecka" value={diet1?.seafoodWeeklyPortions} />
      </Section>

      <Section title="Kosthållning – del 2">
        <Row label="Vete (ggr/vecka)" value={diet2?.wheatFrequency} />
        <Row label="Mjölkprodukter (ggr/vecka)" value={diet2?.dairyFrequency} />
        <Row label="Socker (ggr/vecka)" value={diet2?.sugarFrequency} />
        <Row label="Koffein (ggr/vecka)" value={diet2?.caffeineFrequency} />
        <Row label="Reaktioner på livsmedel" value={diet2?.foodReactions} />
        <Row label="Reaktionssymptom" value={diet2?.foodReactionSymptoms} />
        <Row label="Socker/friterade produkter" value={diet2?.sugarFriedProducts} />
        <Row label="Dricker alkohol" value={diet2?.drinksAlcohol} />
        {diet2?.drinksAlcohol === "true" && (
          <>
            <Row label="Föredrar" value={diet2?.alcoholPreference} />
            <Row label="Alkohol/vecka" value={diet2?.alcoholWeekly} />
          </>
        )}
        <Row label="Allergier/överkänslighet" value={diet2?.allergies} />
      </Section>

      <Section title="Livsstil – del 1">
        <Row label="Reser" value={lifestyle1?.travelFrequency} />
        <Row label="Besökta länder" value={lifestyle1?.countriesVisited} />
        <Row label="Sjuk på resa" value={lifestyle1?.travelIllness} />
        <Row label="Trivs på jobbet" value={lifestyle1?.workSatisfaction} />
        <Row label="Stressnivå" value={lifestyle1?.workStress} />
        <Row label="Arbetsbörda" value={lifestyle1?.workload} />
        <Row label="Barn" value={lifestyle1?.hasChildren} />
        <Row label="Familjesituation" value={lifestyle1?.familyWellbeing} />
        <Row label="Motionerar" value={lifestyle1?.exercises} />
        {lifestyle1?.exercises === "true" && (
          <>
            <Row label="Träningsfrekvens" value={lifestyle1?.exerciseFrequency} />
            <Row label="Träningstyp" value={lifestyle1?.exerciseType} />
          </>
        )}
        <Row label="Mediterar" value={lifestyle1?.meditates === "true" ? lifestyle1?.meditationType : lifestyle1?.meditates} />
        <Row label="Yoga" value={lifestyle1?.doesYoga === "true" ? lifestyle1?.yogaType : lifestyle1?.doesYoga} />
        <Row label="Tobak" value={lifestyle1?.tobacco} />
        <Row label="Tobaksmängd" value={lifestyle1?.tobaccoAmount} />
      </Section>

      <Section title="Livsstil – del 2">
        <Row label="Sömnkvalitet" value={lifestyle2?.sleepQuality} />
        <Row label="Insomning/uppvaknande" value={lifestyle2?.sleepOnset} />
        <Row label="Lägger sig vardagar" value={lifestyle2?.bedtimeWeekdays} />
        <Row label="Går upp vardagar" value={lifestyle2?.waketimeWeekdays} />
        <Row label="Lägger sig helgen" value={lifestyle2?.bedtimeWeekends} />
        <Row label="Går upp helgen" value={lifestyle2?.waketimeWeekends} />
        <Row label="Piggast" value={lifestyle2?.energyPeak} />
        <Row label="Tröttast" value={lifestyle2?.energyLow} />
        <Row label="Mobil på morgonen" value={lifestyle2?.phoneInMorning} />
        <Row label="Mobil av" value={lifestyle2?.phoneShutdownTime} />
        <Row label="Utomhus 60 min" value={lifestyle2?.outdoors60min} />
        <Row label="Kognition" value={lifestyle2?.cognitiveSymptoms} />
        <Row label="Andning" value={lifestyle2?.breathing} />
        <Row label="Lugn av" value={lifestyle2?.calmBreathingTrigger} />
        <Row label="Känslor" value={lifestyle2?.emotions} />
        <Row label="Immunförsvar" value={lifestyle2?.immuneSystem} />
        <Row label="Immunnot" value={lifestyle2?.immuneNotes} />
      </Section>

      <Section title="Symptom & Avslutning">
        <Row label="Mag/tarmsymptom" value={symptoms?.digestiveSymptoms} />
        <Row label="Symptom-timing" value={symptoms?.digestiveTiming} />
        <Row label="Triggers" value={symptoms?.digestiveTriggers} />
        <Row label="Symptom efter kost" value={symptoms?.digestiveAfterFood} />
        <Row label="Avföringskaraktär" value={symptoms?.stoolConsistency} />
        <Row label="Tarmtömning" value={symptoms?.bowelFrequency} />
        <Row label="Menstruation (längd)" value={symptoms?.menstruationLength} />
        <Row label="Menstruation (regelbundenhet)" value={symptoms?.menstruationRegularity} />
        <Row label="Blödning" value={symptoms?.bleedingDescription} />
        <Row label="Cykel" value={symptoms?.cycleLength} />
        <Row label="PMS" value={symptoms?.pmsSymptoms} />
        <Row label="Klimakterium" value={symptoms?.menopauseSymptoms} />
        <Row label="Preventivmedel" value={symptoms?.contraceptives} />
        <Row label="Hormonella symptom" value={symptoms?.otherHormonalSymptoms} />
        <Row label="Ledsymptom" value={symptoms?.jointSymptoms} />
        <Row label="Ledproblem-plats" value={symptoms?.jointLocation} />
        <Row label="Muskelsymptom" value={symptoms?.muscleSymptoms} />
        <Row label="Muskelproblem-plats" value={symptoms?.muscleLocation} />
        <Row label="Cirkulationssymptom" value={symptoms?.circulationSymptoms} />
        <Row label="Tandfyllningar" value={symptoms?.dentalFillings} />
        <Row label="Tandproblem" value={symptoms?.dentalIssues} />
        <Row label="Hudsymptom" value={symptoms?.skinSymptoms} />
        <Row label="Hudproblem-plats" value={symptoms?.skinLocation} />
        <Row label="Hur mår du nu" value={symptoms?.currentEmotionalState} />
        <Row label="Hjärtats önskan" value={symptoms?.heartDesire} />
        <Row label="Övrigt" value={symptoms?.otherInfo} />
        <Row label="Motivation" value={symptoms?.motivation} />
        <Row label="Förbättringsmål" value={symptoms?.improvementGoals} />
      </Section>
    </div>
  );
}
