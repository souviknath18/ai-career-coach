import { Lightbulb } from "lucide-react";

export default function InsightMessageCard() {
  return (
    <div className="flex max-w-[92%] items-start gap-3 sm:gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#466743] text-[#eaffe3] shadow-lg">
        <Lightbulb size={19} strokeWidth={1.8} />
      </div>

      <div className="rounded-[2rem] border border-[#b2b2ad]/10 bg-[#fde7d3] p-5 shadow-sm sm:p-6">
        <h3 className="text-[18px] font-bold text-[#635445]">
          Strategic Insight
        </h3>

        <p className="mt-4 border-l-2 border-[#635445]/30 py-1 pl-4 text-[14px] italic leading-7 text-[#635445]/90 sm:text-[15px]">
          “The most effective Product Leaders aren&apos;t just visionaries;
          they are translators who bridge the gap between technical possibility
          and human need.”
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <button className="rounded-full bg-[#635445] px-4 py-2 text-[12px] font-bold text-[#fbf9f5] transition-all active:scale-95">
            Explore Roles
          </button>

          <button className="rounded-full border border-[#635445]/20 px-4 py-2 text-[12px] font-bold text-[#635445] transition-all active:scale-95">
            Save Insight
          </button>
        </div>
      </div>
    </div>
  );
}