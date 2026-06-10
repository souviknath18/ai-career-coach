import { Lightbulb, SearchCheck, TrendingUp } from "lucide-react";

export default function OptimizerInsights() {
  return (
    <section className="space-y-5">
      <div className="rounded-[2rem] bg-[#e9e8e3] p-6">
        <h3 className="mb-5 text-[18px] font-extrabold text-[#31332f]">
          Real-time Insights
        </h3>

        <div className="space-y-3">
          <Insight icon={SearchCheck} label="Keyword Match" value="+12%" />
          <Insight icon={TrendingUp} label="Impact Score" value="+18%" />
          <Insight icon={Lightbulb} label="Formatting" value="Stable" />
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] bg-[#466743] p-6 text-[#eaffe3]">
        <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

        <h3 className="relative z-10 text-[19px] font-extrabold">
          Mentor Tip
        </h3>

        <p className="relative z-10 mt-3 text-[14px] leading-7 text-[#eaffe3]/90">
          Instead of only saying what you built, show business value,
          measurable outcomes, and the AI technologies used.
        </p>
      </div>

      <div className="rounded-[2rem] bg-white p-6 shadow-[0_20px_40px_rgba(49,51,47,0.04)]">
        <h3 className="mb-4 text-[17px] font-extrabold text-[#31332f]">
          Missing ATS Keywords
        </h3>

        <div className="flex flex-wrap gap-2">
          {["FastAPI", "RAG", "Vector DB", "JWT", "PostgreSQL", "Docker"].map(
            (keyword) => (
              <span
                key={keyword}
                className="rounded-full bg-[#f5f4ef] px-3 py-1.5 text-[12px] font-semibold text-[#5e605b]"
              >
                {keyword}
              </span>
            )
          )}
        </div>

        <button className="mt-5 rounded-full bg-[#c6edbf]/45 px-5 py-2.5 text-[13px] font-bold text-[#395937] transition-all active:scale-95">
          Add Keywords Automatically
        </button>
      </div>
    </section>
  );
}

function Insight({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof SearchCheck;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white p-4">
      <div className="flex items-center gap-3">
        <Icon className="text-[#466743]" size={19} strokeWidth={1.8} />
        <span className="text-[14px] font-semibold text-[#31332f]">
          {label}
        </span>
      </div>

      <span className="text-[13px] font-extrabold text-[#466743]">
        {value}
      </span>
    </div>
  );
}