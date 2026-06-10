export default function CoachPerspectiveCard() {
  return (
    <section className="rounded-[3rem] bg-white p-6 shadow-[0_4px_48px_rgba(49,51,47,0.04)] sm:p-8">
      <div className="flex flex-col gap-7 md:flex-row md:items-center xl:flex-col xl:items-stretch">
        <div className="aspect-square w-full overflow-hidden rounded-[2rem] md:w-1/3 xl:w-full">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
            alt="Team meeting"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-[20px] font-bold text-[#31332f]">
            Coach&apos;s Perspective
          </h3>

          <p className="mt-4 text-[15px] leading-7 text-[#5e605b]">
            This role values <strong>Cultural Alignment</strong> over raw
            technical stacking. In your next interaction, emphasize your
            people-first architecture approach. They are looking for a mentor,
            not just a builder.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-full border border-[#b2b2ad]/30 px-5 py-2.5 text-[14px] font-semibold text-[#466743] transition-all hover:bg-[#f5f4ef] active:scale-95">
              Draft Cover Letter
            </button>

            <button className="rounded-full border border-[#b2b2ad]/30 px-5 py-2.5 text-[14px] font-semibold text-[#466743] transition-all hover:bg-[#f5f4ef] active:scale-95">
              Prep Interview Questions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}