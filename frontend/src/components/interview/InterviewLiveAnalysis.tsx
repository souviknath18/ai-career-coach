import { CheckCircle2, TrendingUp } from "lucide-react";

export default function InterviewLiveAnalysis() {
  return (
    <section className="rounded-[2rem] bg-[#f5f4ef] p-5 sm:p-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h3 className="text-[18px] font-bold text-[#31332f]">
          Live Analysis
        </h3>

        <div className="flex items-center gap-2 rounded-full bg-[#fde7d3] px-3 py-1.5 text-[#635445]">
          <span className="text-[10px] font-bold uppercase tracking-wider">
            Response Score
          </span>

          <span className="text-[18px] font-extrabold">82%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-1">
        <div className="rounded-[1.5rem] bg-white p-5">
          <div className="mb-3 flex items-center gap-2 text-[#466743]">
            <CheckCircle2 size={20} strokeWidth={1.8} />

            <span className="text-[13px] font-bold uppercase tracking-wide">
              Strengths
            </span>
          </div>

          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-[14px] leading-6 text-[#5e605b]">
              <span className="mt-1 text-[#466743]">•</span>
              Demonstrates emotional intelligence
            </li>

            <li className="flex items-start gap-2 text-[14px] leading-6 text-[#5e605b]">
              <span className="mt-1 text-[#466743]">•</span>
              Uses structured STAR method
            </li>
          </ul>
        </div>

        <div className="rounded-[1.5rem] bg-white p-5">
          <div className="mb-3 flex items-center gap-2 text-[#a73b21]">
            <TrendingUp size={20} strokeWidth={1.8} />

            <span className="text-[13px] font-bold uppercase tracking-wide">
              Improvements
            </span>
          </div>

          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-[14px] leading-6 text-[#5e605b]">
              <span className="mt-1 text-[#a73b21]">•</span>
              Could be more concise in the middle
            </li>

            <li className="flex items-start gap-2 text-[14px] leading-6 text-[#5e605b]">
              <span className="mt-1 text-[#a73b21]">•</span>
              Quantify the resolution outcome
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}