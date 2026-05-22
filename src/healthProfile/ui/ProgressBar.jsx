import { Check } from "lucide-react";
import { steps } from "../utils/steps";

export default function ProgressBar({ currentStep }) {
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
        {steps.map((step, index) => (
          <li key={step.id} className="">
            <div
              className={`flex justify-center items-center text-xs col-span-1`}
            >
              <div
                className={`${currentStep > index ? "text-white bg-primary-300 border-primary-300" : currentStep === index ? "text-primary-300 bg-white" : "text-gray-400 border-gray-300 bg-white"} w-8 h-8 flex justify-center items-center  border rounded-2xl`}
              >
                {currentStep > index ? (
                  <Check size={16} strokeWidth={2} color="var(--color-white)" />
                ) : (
                  index + 1
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
