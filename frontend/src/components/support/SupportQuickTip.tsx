import { Sparkles } from "lucide-react";

export default function SupportQuickTip() {
  return (
    <section className="relative mb-10 overflow-hidden rounded-[2rem] bg-[#fde7d3] p-6 sm:p-8">
      <div className="relative z-10 max-w-md">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#635445]">
          Quick Tip
        </span>

        <p className="mt-2 text-[19px] font-bold leading-7 text-[#635445]">
          Most users find clarity by checking the Resume Analysis section
          first.
        </p>
      </div>

      <Sparkles
        className="absolute -bottom-6 -right-6 h-28 w-28 text-[#635445]/10"
        strokeWidth={1.2}
      />
    </section>
  );
}