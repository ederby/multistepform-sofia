import Button from "./Button";
import Divider from "./Divider";

export default function Footer({ handleStep, currentStep, isLastStep, isSubmitting }) {
  return (
    <>
      <Divider style="mt-4 md:mt-6" />
      <div
        className={`w-full flex flex-col-reverse md:flex-row gap-2 md:gap-0 mt-4 md:mt-6 ${currentStep !== 0 ? "justify-between" : "justify-end"}`}
      >
        {currentStep !== 0 && (
          <Button
            onClick={() => handleStep("prev")}
            variant="secondary"
            disabled={isSubmitting}
            className="w-full md:w-auto"
          >
            Föregående
          </Button>
        )}
        {isLastStep ? (
          // Inskickning avstängd tills vidare
          <Button
            key="submit"
            type="submit"
            disabled
            className="w-full md:w-auto"
          >
            {isSubmitting ? "Skickar in..." : "Skicka in"}
          </Button>
        ) : (
          <Button
            key="next"
            onClick={() => handleStep("next")}
            className="w-full md:w-auto"
          >
            Nästa
          </Button>
        )}
      </div>
    </>
  );
}
