import { steps } from "./utils/steps";
import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import FormShell from "./ui/FormShell";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import ProgressBar from "./ui/ProgressBar";
import Divider from "./ui/Divider";
import Welcome from "./ui/Welcome";
import { deepMerge } from "./utils/storage";

export default function HealthProfileWizard() {
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [submitState, setSubmitState] = useState("idle");
  const Step = steps[currentStep].component;
  const isLastStep = currentStep === steps.length - 1;

  const savedValues = import.meta.env.DEV
    ? null
    : JSON.parse(localStorage.getItem("healthForm") || "null");
  const defaultV = steps
    .filter((step) => step.defaultValues)
    .reduce((acc, step) => ({ ...acc, ...step.defaultValues }), {});
  const form = useForm({
    defaultValues: deepMerge(defaultV, savedValues),
    shouldFocusError: true,
  });
  const { handleSubmit, trigger, watch } = form;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  useEffect(() => {
    const { unsubscribe } = watch((values) => {
      localStorage.setItem("healthForm", JSON.stringify(values));
    });
    return () => unsubscribe();
  }, [watch]);

  async function handleStep(direction) {
    const isValid = await trigger(steps[currentStep].fields);
    if (direction === "next") {
      if (!isValid) {
        const firstErrorField = steps[currentStep].fields.find((field) =>
          field
            .split(".")
            .reduce((obj, key) => obj?.[key], form.formState.errors),
        );
        if (firstErrorField) form.setFocus(firstErrorField);
        return;
      }
      currentStep !== steps.length - 1 &&
        setCurrentStep((prevStep) => prevStep + 1);
    }
    if (direction === "prev") {
      currentStep !== 0 && setCurrentStep((prevStep) => prevStep - 1);
    }
  }

  async function onSubmit(values) {
    setSubmitState("submitting");
    try {
      const res = await fetch("/.netlify/functions/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Inskickning misslyckades");
      localStorage.removeItem("healthForm");
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  if (!started) {
    return <Welcome onStart={() => setStarted(true)} />;
  }

  if (submitState === "success") {
    return (
      <div className="flex flex-col justify-center items-center w-full">
        <FormShell>
          <div className="text-center py-10">
            <h2 className="text-2xl mb-4">Tack!</h2>
            <p className="text-body">
              Ditt formulär har skickats in. Vi hör av oss snart.
            </p>
          </div>
        </FormShell>
      </div>
    );
  }

  if (submitState === "error") {
    return (
      <div className="flex flex-col justify-center items-center w-full">
        <FormShell>
          <div className="text-center py-10">
            <h2 className="text-2xl mb-4">Något gick fel</h2>
            <p className="text-body mb-4">
              Formuläret kunde inte skickas in. Försök igen.
            </p>
            <button
              onClick={() => setSubmitState("idle")}
              className="cursor-pointer border rounded-full px-3.5 py-1.5 bg-primary-300 text-white border-primary-300 transition-colors hover:bg-primary-600 hover:border-primary-600"
            >
              Försök igen
            </button>
          </div>
        </FormShell>
      </div>
    );
  }

  return (
    <FormProvider {...form}>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center w-full"
      >
        <FormShell>
          <Header title={steps[currentStep].title} />
          <ProgressBar currentStep={currentStep} />
          <Divider />
          <Step />
          <Footer
            handleStep={handleStep}
            currentStep={currentStep}
            isLastStep={isLastStep}
            isSubmitting={submitState === "submitting"}
          />
        </FormShell>
      </form>
      {import.meta.env.DEV && <DevTool control={form.control} />}
    </FormProvider>
  );
}
