"use client";

import { Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ResumeAnalysisScore() {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center pb-6 pt-6 text-center">
      <div className="relative flex h-44 w-44 items-center justify-center sm:h-48 sm:w-48">
        <div className="absolute inset-0 rounded-full bg-[conic-gradient(#466743_85%,#efeee9_0)] shadow-sm" />

        <div className="absolute inset-[14px] rounded-full bg-white" />

        <div className="relative z-10 flex h-36 w-36 flex-col items-center justify-center rounded-full bg-white shadow-lg sm:h-40 sm:w-40">
          <span className="text-[46px] font-extrabold tracking-tight text-[#466743] sm:text-5xl">
            85
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#5e605b]">
            Out of 100
          </span>
        </div>
      </div>

      <div className="mt-7 max-w-md">
        <h2 className="text-[24px] font-bold text-[#31332f]">
          Excellent Progress!
        </h2>

        <p className="mt-2 text-[15px] leading-7 text-[#5e605b]">
          Your resume is highly competitive. A few minor adjustments could put
          you in the top 5% of candidates for senior roles.
        </p>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={() => router.push("/resume-optimizer")}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#466743] to-[#3a5b38] px-6 py-3.5 text-[15px] font-bold text-[#eaffe3] shadow-lg shadow-[#466743]/15 transition-all active:scale-95"
        >
          Improve Resume with AI
          <Sparkles size={17} strokeWidth={1.8} />
        </button>
      </div>
    </section>
  );
}