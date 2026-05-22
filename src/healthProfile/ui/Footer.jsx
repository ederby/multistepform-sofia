import Button from "./Button";
import Divider from "./Divider";

export default function Footer({ handleStep, currentStep, isLastStep, isSubmitting }) {
  return (
    <>
      <Divider style="mt-4 md:mt-6" />
      <div
        className={`w-full flex mt-4 md:mt-6 ${currentStep !== 0 ? "justify-between" : "justify-end"}`}
      >
        {currentStep !== 0 && (
          <Button
            onClick={() => handleStep("prev")}
            variant="secondary"
            disabled={isSubmitting}
          >
            Föregående
          </Button>
        )}
        {isLastStep ? (
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Skickar in..." : "Skicka in"}
          </Button>
        ) : (
          <Button onClick={() => handleStep("next")}>
            Nästa
          </Button>
        )}
      </div>
    </>
  );
}
