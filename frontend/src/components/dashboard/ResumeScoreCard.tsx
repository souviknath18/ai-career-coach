export default function ResumeScoreCard() {
  return (
    <section className="mb-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-white p-5 shadow-[0_30px_40px_-12px_rgba(49,51,47,0.05)]">
        <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#c6edbf]/20 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center gap-5 text-center">
          {/* Score Circle */}
          <div className="relative flex h-32 w-32 items-center justify-center">
            <svg className="h-full w-full -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                fill="transparent"
                stroke="#e9e8e3"
                strokeWidth="7"
              />

              <circle
                cx="64"
                cy="64"
                r="56"
                fill="transparent"
                stroke="#466743"
                strokeWidth="7"
                strokeDasharray="352"
                strokeDashoffset="53"
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-[#31332f]">
                85
              </span>

              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#5e605b]">
                / 100
              </span>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-3 inline-flex rounded-full bg-[#c6edbf]/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#395937]">
              Resume Score
            </div>

            <h3 className="text-[22px] font-bold leading-8 text-[#31332f]">
              Your profile is outperforming 82% of candidates.
            </h3>

            <p className="mt-3 text-[14px] leading-6 text-[#5e605b]">
              We&apos;ve identified 3 key improvements in your experience
              section that could boost your visibility for senior roles.
            </p>

            <button className="mt-5 rounded-full bg-gradient-to-br from-[#466743] to-[#3a5b38] px-7 py-3 text-[14px] font-semibold text-[#eaffe3] shadow-lg shadow-[#466743]/10 transition-all active:scale-95">
              Optimize Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}