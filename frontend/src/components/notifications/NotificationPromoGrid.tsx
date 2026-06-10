import { GraduationCap, Sparkles } from "lucide-react";

export default function NotificationPromoGrid() {
  return (
    <section className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-1">
      <div className="flex h-48 flex-col justify-between rounded-[2rem] border border-[#466743]/10 bg-[#c6edbf]/30 p-7">
        <Sparkles size={31} strokeWidth={1.8} className="text-[#466743]" />

        <div>
          <h4 className="text-[18px] font-bold leading-tight text-[#395937]">
            AI Strategy Check
          </h4>

          <p className="mt-1 text-[12px] text-[#395937]/80">
            Refine your 2026 growth path
          </p>
        </div>
      </div>

      <div className="flex h-48 flex-col justify-between rounded-[2rem] bg-[#fde7d3] p-7">
        <GraduationCap
          size={31}
          strokeWidth={1.8}
          className="text-[#6c5c4d]"
        />

        <div>
          <h4 className="text-[18px] font-bold leading-tight text-[#635445]">
            Masterclass Series
          </h4>

          <p className="mt-1 text-[12px] text-[#635445]/80">
            New leadership courses live
          </p>
        </div>
      </div>
    </section>
  );
}