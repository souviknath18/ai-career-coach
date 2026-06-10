"use client";

import { FileText, Upload, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EmptyResumeAnalysisState() {
  const router = useRouter();

  return (
    <section className="flex w-full flex-col items-center justify-center text-center">
      <div className="relative mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-[#c6edbf]/35">
        <FileText className="text-[#466743]" size={46} strokeWidth={1.7} />
        <Sparkles
          className="absolute right-3 top-3 text-[#466743]"
          size={20}
          strokeWidth={1.8}
        />
      </div>

      <h2 className="max-w-[320px] text-[26px] font-extrabold leading-9 text-[#31332f]">
        Upload your resume to unlock AI analysis
      </h2>

      <p className="mt-3 max-w-[330px] text-[15px] leading-7 text-[#5e605b]">
        Once you upload your resume, Sage & Solace will analyze your strengths,
        gaps, ATS score, and personalized improvement suggestions.
      </p>

      <button
        type="button"
        onClick={() => router.push("/resume-upload")}
        className="mt-8 flex items-center gap-2 rounded-full bg-gradient-to-br from-[#466743] to-[#3a5b38] px-7 py-3.5 text-[15px] font-bold text-[#eaffe3] shadow-lg shadow-[#466743]/15 transition-all active:scale-95"
      >
        <Upload size={18} strokeWidth={2} />
        Upload Resume
      </button>
    </section>
  );
}