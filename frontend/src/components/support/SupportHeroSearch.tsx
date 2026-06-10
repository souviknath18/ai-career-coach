import { Search } from "lucide-react";

export default function SupportHeroSearch() {
  return (
    <section className="mb-10">
      <h2 className="text-[28px] font-extrabold tracking-tight text-[#31332f]">
        How can we support your growth today?
      </h2>

      <div className="group relative mt-6">
        <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-[#5e605b] transition-colors group-focus-within:text-[#466743]">
          <Search size={20} strokeWidth={1.8} />
        </div>

        <input
          type="text"
          placeholder="Search FAQs or topics"
          className="w-full rounded-[2rem] border-none bg-[#e9e8e3] py-4 pl-12 pr-5 text-[15px] text-[#31332f] outline-none placeholder:text-[#5e605b]/60 shadow-sm transition-all focus:bg-white focus:ring-2 focus:ring-[#466743]/20"
        />
      </div>
    </section>
  );
}