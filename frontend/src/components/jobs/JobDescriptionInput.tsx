"use client";

import { Sparkles } from "lucide-react";

export default function JobDescriptionInput() {
  return (
    <section>
      <div className="mb-5">
        <h2 className="text-[28px] font-extrabold tracking-tight text-[#31332f]">
          Input Job Description
        </h2>

        <p className="mt-1 text-[15px] leading-7 text-[#5e605b]">
          Paste the role details to see how your profile aligns with this
          opportunity.
        </p>
      </div>

      <div className="relative">
        <textarea
          placeholder="Paste the job description here..."
          className="mobile-scrollbar min-h-[260px] w-full resize-none rounded-t-[3rem] rounded-b-lg border-none bg-[#e9e8e3] p-6 pb-24 text-[15px] leading-7 text-[#31332f] outline-none placeholder:text-[#7a7b76] transition-all focus:bg-white focus:ring-2 focus:ring-[#466743]/20 sm:p-8 sm:pb-24"
        />

        <div className="absolute bottom-5 right-5">
          <button className="flex items-center gap-2 rounded-full bg-gradient-to-br from-[#466743] to-[#3a5b38] px-6 py-3 text-[14px] font-semibold text-white shadow-sm transition-all active:scale-95 sm:px-8">
            Analyze Match
            <Sparkles size={16} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </section>
  );
}