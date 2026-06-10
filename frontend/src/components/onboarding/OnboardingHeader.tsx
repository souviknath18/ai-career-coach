"use client";

import { Brain } from "lucide-react";

type OnboardingHeaderProps = {
  onSkipAction: () => void;
};

export default function OnboardingHeader({
  onSkipAction,
}: OnboardingHeaderProps) {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 flex h-16 items-center justify-between bg-[#fbf9f5]/80 px-6 backdrop-blur-xl">
      <div className="flex items-center gap-2">
        <Brain size={21} className="text-[#466743]" strokeWidth={1.8} />

        <span className="text-[18px] font-bold tracking-tight text-[#466743]">
          Career Coach
        </span>
      </div>

      <button
        type="button"
        onClick={onSkipAction}
        className="text-[14px] font-semibold text-[#5e605b] transition-all active:scale-95"
      >
        Skip
      </button>
    </header>
  );
}