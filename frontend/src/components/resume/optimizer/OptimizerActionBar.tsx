type OptimizerActionBarProps = {
  progress: number;
};

export default function OptimizerActionBar({ progress }: OptimizerActionBarProps) {
  return (
    <div className="fixed bottom-[74px] left-1/2 z-40 w-full -translate-x-1/2 bg-gradient-to-t from-[#fbf9f5] via-[#fbf9f5] to-transparent px-5 pb-4 pt-8 sm:max-w-[520px] md:max-w-full md:px-10 xl:max-w-[430px] xl:px-5">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#5e605b]">
            Optimization Progress
          </p>
          <p className="mt-1 text-[12px] font-semibold text-[#31332f]">
            {progress}% completed
          </p>
        </div>

        <button className="rounded-full bg-gradient-to-br from-[#466743] to-[#3a5b38] px-6 py-3 text-[14px] font-bold text-[#eaffe3] shadow-lg shadow-[#466743]/15 transition-all active:scale-95">
          Finalize Resume
        </button>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-[#e3e3dc]">
        <div
          className="h-full rounded-full bg-[#466743] transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}