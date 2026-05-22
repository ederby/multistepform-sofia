import { CircleAlert } from "lucide-react";

export default function ErrorField({ children }) {
  return (
    <p className="flex items-start gap-1 text-xs text-red-700 bg-red-100 py-1 px-2 rounded mt-1.5 border border-red-700">
      <span className="mt-0.5">
        <CircleAlert size={12} color="var(--color-red-700)" strokeWidth={2} />
      </span>
      <span>{children}</span>
    </p>
  );
}
