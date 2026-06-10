import { TrendingUp } from "lucide-react";

export default function JobMatchAnalysis() {
  return (
    <section>
      <div className="mb-5">
        <h2 className="text-[28px] font-extrabold tracking-tight text-[#31332f]">
          Match Analysis
        </h2>
      </div>

      <div className="rounded-[2rem] bg-[#f5f4ef] p-6 sm:p-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-wider text-[#5e605b]">
              Overall Alignment
            </span>

            <div className="mt-1 text-[46px] font-extrabold leading-none text-[#466743]">
              78%
            </div>
          </div>

          <span className="inline-flex items-center gap-1 rounded-full bg-[#c6edbf] px-3 py-1 text-[12px] font-semibold text-[#3a5b38]">
            <TrendingUp size={14} strokeWidth={2} />
            Strong Match
          </span>
        </div>

        <div className="mt-6 h-3 w-full overflow-hidden rounded-full bg-[#e9e8e3]">
          <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[#466743]/60 to-[#466743]" />
        </div>

        <p className="mt-6 text-[15px] italic leading-7 text-[#5e605b]">
          “Your background in systems architecture and team leadership
          perfectly aligns with the core requirements. A slight gap exists in
          cloud native security certifications.”
        </p>
      </div>
    </section>
  );
}