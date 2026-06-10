"use client";

import { Mic } from "lucide-react";

type InterviewResponseBoxProps = {
  onStartVoiceAction: () => void;
};

export default function InterviewResponseBox({
  onStartVoiceAction,
}: InterviewResponseBoxProps) {
  return (
    <section>
      <div className="relative">
        <textarea
          placeholder="Type your response here..."
          className="mobile-scrollbar min-h-[180px] w-full resize-none rounded-br-lg rounded-tl-[3rem] rounded-tr-[2rem] rounded-bl-[2rem] border-none bg-[#e9e8e3] p-6 pb-24 text-[15px] leading-7 text-[#31332f] outline-none placeholder:text-[#5e605b]/50 transition-all focus:bg-white focus:ring-2 focus:ring-[#466743]/20"
        />

        <div className="absolute bottom-4 right-4">
          <button
            type="button"
            onClick={onStartVoiceAction}
            className="flex items-center gap-2 rounded-full bg-[#3a5b38] px-5 py-3 text-[#eaffe3] shadow-lg shadow-[#466743]/10 transition-all active:scale-95"
          >
            <Mic size={19} strokeWidth={1.8} />

            <span className="text-[14px] font-semibold">
              Tap to speak
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}