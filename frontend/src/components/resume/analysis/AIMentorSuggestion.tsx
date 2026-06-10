import { Sparkles } from "lucide-react";

export default function AIMentorSuggestion() {
  return (
    <section className="relative mt-8 overflow-hidden rounded-[2rem] bg-[#f5f4ef] p-6 sm:p-8">
      <Sparkles
        className="absolute -right-4 top-4 h-24 w-24 text-[#466743]/10"
        strokeWidth={1.3}
      />

      <div className="relative z-10">
        <h3 className="mb-3 text-[20px] font-bold text-[#31332f]">
          Refine with AI Mentor
        </h3>

        <p className="mb-6 text-[14px] leading-7 text-[#5e605b]">
          Our mentor suggests rewriting your experience at “Global Tech Inc.”
          to emphasize the leadership role you played in the digital
          transformation project.
        </p>

        <div className="mb-6 rounded-[1.5rem] bg-white p-4 shadow-sm">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#466743]">
            Mentor Draft
          </p>

          <p className="text-[14px] italic leading-7 text-[#31332f]">
            “Led a cross-functional team of 12 to deliver a cloud migration
            strategy, resulting in a 25% reduction in infrastructure overhead
            within the first fiscal quarter.”
          </p>
        </div>

        <button className="rounded-full bg-[#466743] px-6 py-3 text-[14px] font-semibold text-[#eaffe3] shadow-lg shadow-[#466743]/10 transition-all active:scale-95">
          Apply Suggestion
        </button>
      </div>
    </section>
  );
}