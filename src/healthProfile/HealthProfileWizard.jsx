import { steps } from "./utils/steps";
import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { devSeed as seedData } from "./utils/devSeed";

import FormShell from "./ui/FormShell";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import ProgressBar from "./ui/ProgressBar";
import Divider from "./ui/Divider";
import { deepMerge } from "./utils/storage";

const devSeed = import.meta.env.DEV ? seedData : {};

export default function HealthProfileWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitState, setSubmitState] = useState("idle");
  const Step = steps[currentStep].component;
  const isLastStep = currentStep === steps.length - 1;

  const savedValues = JSON.parse(localStorage.getItem("healthForm") || "null");
  const defaultV = steps
    .filter((step) => step.defaultValues)
    .reduce((acc, step) => ({ ...acc, ...step.defaultValues }), {});
  const form = useForm({
    defaultValues: deepMerge(deepMerge(defaultV, devSeed), savedValues),
    shouldFocusError: true,
  });
  const { handleSubmit, trigger, watch } = form;

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

  async function onSubmit() {
    setSubmitState("submitting");
    try {
      // TODO: skicka data till API här
      await new Promise((resolve) => setTimeout(resolve, 800));
      localStorage.removeItem("healthForm");
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
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
              className="cursor-pointer border rounded-lg px-3.5 py-1.5 bg-primary-300 text-white border-primary-300"
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
