import { Check } from "lucide-react";
import { steps } from "../utils/steps";

export default function ProgressBar({ currentStep, maxStep, onStepClick }) {
  return (
    <div className="w-full mb-6 relative">
      <span className={`sm:hidden w-full block text-center`}>
        Steg {currentStep + 1}/{steps.length}
      </span>
      <progress
        className="w-full sm:px-6 md:px-10 h-1 sm:absolute top-[50%] translate-y-[-50%] [&::-webkit-progress-value]:bg-primary-300 [&::-webkit-progress-bar]:bg-gray-200"
        value={currentStep}
        max={steps.length - 1}
      ></progress>
      <ul
        className="hidden sm:grid relative z-1 grid-flow-col"
        style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
      >
        {steps.map((step, index) => {
          const isCurrent = index === currentStep;
          const isLocked = index > maxStep;
          const isCompleted = !isCurrent && !isLocked;

          const stateClass = isCompleted
            ? "text-white bg-primary-300 border-primary-300 hover:bg-primary-600 hover:border-primary-600 cursor-pointer"
            : isCurrent
              ? "text-primary-300 bg-white cursor-default"
              : "text-gray-400 border-gray-300 bg-white cursor-not-allowed";

          return (
            <li key={step.id} className="flex justify-center">
              <button
                type="button"
                onClick={() => isCompleted && onStepClick(index)}
                disabled={isLocked}
                title={step.title}
                className={`w-8 h-8 flex justify-center items-center text-xs border rounded-2xl transition-colors ${stateClass}`}
              >
                {isCompleted ? (
                  <Check size={16} strokeWidth={2} color="var(--color-white)" />
                ) : (
                  index + 1
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
