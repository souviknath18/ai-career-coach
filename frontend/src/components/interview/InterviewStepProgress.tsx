export default function InterviewStepProgress() {
  return (
    <div className="flex items-center gap-2">
      <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest text-[#5e605b]/60">
        Step 3 of 5
      </span>

      <div className="h-1 flex-1 overflow-hidden rounded-full bg-[#efeee9]">
        <div className="h-full w-3/5 rounded-full bg-[#466743]" />
      </div>
    </div>
  );
}