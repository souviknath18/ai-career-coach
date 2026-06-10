import { CheckCircle, NotebookPen } from "lucide-react";

export default function CareerReflectionCard() {
  return (
    <section className="mt-8">
      <div className="overflow-hidden rounded-[1.75rem] bg-[#e9e8e3] shadow-[0_20px_30px_rgba(49,51,47,0.04)]">
        <div className="rounded-t-[1.75rem] border-b border-[#e3e3dc]/40 bg-white p-5">
          <div className="mb-3 flex items-center gap-2.5">
            <NotebookPen
              className="text-[#5e605b]"
              size={20}
              strokeWidth={1.8}
            />

            <h4 className="text-[18px] font-semibold text-[#31332f]">
              Daily Career Reflection
            </h4>
          </div>

          <textarea
            placeholder="What did you learn about your professional goals today?"
            className="min-h-[120px] w-full resize-none border-none bg-transparent text-[15px] leading-7 text-[#31332f] outline-none placeholder:text-[#5e605b]/50 focus:ring-0"
          />
        </div>

        <div className="flex items-center justify-between px-5 py-3.5">
          <span className="max-w-[180px] text-[11px] italic leading-5 text-[#5e605b]">
            Your reflections are private and securely stored.
          </span>

          <button className="flex items-center gap-1.5 rounded-full bg-[#c6edbf]/40 px-3 py-1.5 text-[13px] font-semibold text-[#466743] transition-all active:scale-95">
            Save
            <CheckCircle size={15} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}