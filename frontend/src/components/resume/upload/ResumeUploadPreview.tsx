"use client";

import { FileText, Trash2 } from "lucide-react";

type ResumeUploadPreviewProps = {
  file: File;
  onRemoveAction: () => void;
};

function formatFileSize(size: number) {
  const mb = size / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}

export default function ResumeUploadPreview({
  file,
  onRemoveAction,
}: ResumeUploadPreviewProps) {
  return (
    <div className="mt-6 rounded-[1.75rem] bg-white p-4 shadow-[0_-4px_48px_rgba(49,51,47,0.04)] sm:mt-8 sm:rounded-[2rem] sm:p-5">
      <div className="flex items-center justify-between gap-3 sm:gap-4">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fde7d3] text-[#504234] sm:h-12 sm:w-12">
            <FileText size={21} strokeWidth={1.8} className="sm:h-[23px] sm:w-[23px]" />
          </div>

          <div className="min-w-0">
            <h4 className="truncate text-[14px] font-semibold text-[#31332f] sm:text-[15px]">
              {file.name}
            </h4>

            <p className="text-[12px] text-[#5e605b] sm:text-[13px]">
              {formatFileSize(file.size)} • Ready to analyze
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onRemoveAction}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#5e605b] transition-all hover:bg-[#fd795a]/10 hover:text-[#a73b21] active:scale-95 sm:h-10 sm:w-10"
        >
          <Trash2 size={18} strokeWidth={1.8} className="sm:h-[19px] sm:w-[19px]" />
        </button>
      </div>
    </div>
  );
}