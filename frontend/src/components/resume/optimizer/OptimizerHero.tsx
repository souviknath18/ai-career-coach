type OptimizerHeroProps = {
  score: number;
};

export default function OptimizerHero({ score }: OptimizerHeroProps) {
  const radius = 65;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <section className="overflow-hidden rounded-[2rem] bg-[#f5f4ef] p-6 shadow-[0_20px_40px_rgba(49,51,47,0.04)] sm:p-8">
      <div className="flex flex-col items-center gap-7 text-center md:flex-row md:text-left xl:flex-col xl:text-center">
        <div className="flex-1">
          <h2 className="text-[27px] font-extrabold leading-9 tracking-tight text-[#31332f]">
            Your Professional Horizon
          </h2>

          <p className="mt-3 text-[15px] leading-7 text-[#5e605b]">
            Improve your resume section-by-section with AI suggestions,
            keyword optimization, and recruiter-ready rewriting.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <Metric label="Keywords" value="72%" />
            <Metric label="Impact" value="64%" />
            <Metric label="Readability" value="89%" />
          </div>
        </div>

        <div className="relative flex h-40 w-40 shrink-0 items-center justify-center">
          <svg className="h-full w-full -rotate-90">
            <circle
              cx="80"
              cy="80"
              r={radius}
              fill="transparent"
              stroke="#e3e3dc"
              strokeWidth="7"
            />

            <circle
              cx="80"
              cy="80"
              r={radius}
              fill="transparent"
              stroke="#466743"
              strokeWidth="7"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-700"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[40px] font-extrabold text-[#31332f]">
              {score}
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#5e605b]">
              ATS Score
            </span>
          </div>

          <div className="absolute -right-3 -top-3 rounded-full bg-[#fde7d3] px-3 py-1 text-[11px] font-bold text-[#635445]">
            Target 95+
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-3 text-center">
      <p className="text-[10px] font-bold uppercase tracking-wide text-[#5e605b]">
        {label}
      </p>

      <p className="mt-1 text-[17px] font-extrabold text-[#466743]">
        {value}
      </p>
    </div>
  );
}