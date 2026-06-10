"use client";

type ResumeUploadButtonProps = {
  disabled: boolean;
  onClickAction: () => void;
};

export default function ResumeUploadButton({
  disabled,
  onClickAction,
}: ResumeUploadButtonProps) {
  return (
    <div className="mt-10 flex justify-center sm:mt-12">
      <button
        type="button"
        disabled={disabled}
        onClick={onClickAction}
        className="w-full rounded-full bg-gradient-to-br from-[#466743] to-[#3a5b38] px-8 py-3.5 text-[15px] font-bold text-[#eaffe3] shadow-lg shadow-[#466743]/10 transition-all active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 sm:px-12 sm:py-4 sm:text-[17px] md:w-auto"
      >
        Analyze Resume
      </button>
    </div>
  );
}