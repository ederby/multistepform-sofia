import Button from "./Button";
import Divider from "./Divider";

export default function Footer({
  handleStep,
  currentStep,
  isLastStep,
  isSubmitting,
  showSkipToReview,
  onSkipToReview,
}) {
  return (
    <>
      <Divider style="mt-4 md:mt-6" />
      {showSkipToReview && (
        <div className="w-full flex justify-center mt-3">
          <button
            type="button"
            onClick={onSkipToReview}
            className="text-sm text-primary-300 hover:text-primary-600 cursor-pointer transition-colors"
          >
            Gå direkt till granskningen →
          </button>
        </div>
      )}
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
            Föregående — steg {currentStep}
          </Button>
        )}
        {isLastStep ? (
          <Button
            key="submit"
            type="submit"
            disabled={isSubmitting}
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
            Nästa — steg {currentStep + 2}
          </Button>
        )}
      </div>
    </>
  );
}
