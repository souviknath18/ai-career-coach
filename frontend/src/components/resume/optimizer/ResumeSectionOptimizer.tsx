"use client";

import { CheckCircle2, Edit3, RefreshCcw, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { ResumeSection } from "@/app/(dashboard)/resume-optimizer/page";

type ResumeSectionOptimizerProps = {
  section: ResumeSection;
  onApplySuggestionAction: () => void;
};

export default function ResumeSectionOptimizer({
  section,
  onApplySuggestionAction,
}: ResumeSectionOptimizerProps) {
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    setApplied(false);
  }, [section.id]);

  const handleApply = () => {
    setApplied(true);
    onApplySuggestionAction();
  };

  return (
    <section className="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_40px_rgba(49,51,47,0.04)]">
      <div className="flex items-center justify-between gap-4 bg-[#efeee9] px-6 py-5">
        <div>
          <h3 className="text-[21px] font-extrabold text-[#31332f]">
            {section.label}
          </h3>

          <p className="mt-1 text-[13px] text-[#5e605b]">
            {section.role}
          </p>
        </div>

        <div className="shrink-0 rounded-full bg-[#c6edbf]/50 px-3 py-1 text-[11px] font-bold text-[#395937]">
          High Impact
        </div>
      </div>

      <div className="border-b border-[#e9e8e3] p-6">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#5e605b]">
          Original Entry
        </p>

        <div className="rounded-[1.5rem] bg-[#f5f4ef] p-4">
          <p className="text-[14px] italic leading-7 text-[#516170]">
            “{section.original}”
          </p>
        </div>
      </div>

      <div className="bg-[#fde7d3]/25 p-6">
        <div className="mb-4 flex items-center gap-2">
          <Sparkles className="text-[#466743]" size={19} strokeWidth={1.8} />

          <h4 className="text-[18px] font-bold text-[#31332f]">
            AI Optimized Version
          </h4>
        </div>

        <p className="text-[14px] leading-7 text-[#31332f]">
          {section.optimized}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {section.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            onClick={handleApply}
            className={
              applied
                ? "flex w-full items-center justify-center gap-2 rounded-full bg-[#e3e3dc] px-6 py-3.5 text-[14px] font-bold text-[#5e605b]"
                : "flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#466743] to-[#3a5b38] px-6 py-3.5 text-[14px] font-bold text-[#eaffe3] shadow-lg shadow-[#466743]/10 transition-all active:scale-95"
            }
          >
            <CheckCircle2 size={17} strokeWidth={2} />
            {applied ? "Suggestion Applied" : "Apply Suggestion"}
          </button>

          <button className="flex w-full items-center justify-center gap-2 rounded-full border border-[#b2b2ad]/30 px-6 py-3.5 text-[14px] font-bold text-[#466743] transition-all hover:bg-[#f5f4ef] active:scale-95">
            <Edit3 size={16} strokeWidth={2} />
            Edit Manually
          </button>

          <button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#f5f4ef] px-6 py-3.5 text-[14px] font-bold text-[#516170] transition-all hover:bg-[#efeee9] active:scale-95">
            <RefreshCcw size={16} strokeWidth={2} />
            Generate Alternative
          </button>
        </div>
      </div>
    </section>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-[#c6edbf]/35 px-3 py-1 text-[11px] font-bold text-[#395937]">
      {label}
    </span>
  );
}