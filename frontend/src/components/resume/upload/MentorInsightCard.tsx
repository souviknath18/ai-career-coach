import { Brain } from "lucide-react";

export default function MentorInsightCard() {
  return (
    <aside className="relative mt-14 overflow-hidden rounded-[2rem] bg-[#fde7d3] p-6 sm:mt-20 sm:rounded-[3rem] sm:p-8">
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#fbf9f5]/30 blur-3xl" />

      <Brain
        className="mb-4 text-[#635445]"
        size={24}
        strokeWidth={1.8}
      />

      <h5 className="mb-2 text-[18px] font-bold text-[#635445] sm:text-[20px]">
        Mentor&apos;s Insight
      </h5>

      <p className="text-[14px] leading-7 text-[#635445]/80 sm:text-[15px]">
        “A resume isn&apos;t just a list of jobs; it&apos;s the narrative of
        your growth. Our AI looks beyond the keywords to find the story that
        makes you unique.”
      </p>
    </aside>
  );
}