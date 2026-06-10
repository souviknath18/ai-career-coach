"use client";

import { Upload } from "lucide-react";

type ResumeUploadDropzoneProps = {
  onFileSelectAction: (file: File) => void;
};

export default function ResumeUploadDropzone({
  onFileSelectAction,
}: ResumeUploadDropzoneProps) {
  return (
    <label className="group relative block cursor-pointer">
      <div className="flex min-h-[260px] w-full flex-col items-center justify-center rounded-[1.75rem] border-2 border-dashed border-[#466743]/70 bg-transparent p-6 text-center transition-all duration-300 group-hover:bg-[#f5f4ef] sm:aspect-[4/3] sm:min-h-0 sm:rounded-[2rem] sm:p-8 md:aspect-[16/9] xl:aspect-[4/3]">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#c6edbf] text-[#395937] transition-transform duration-300 group-hover:scale-110 sm:mb-6 sm:h-20 sm:w-20">
          <Upload size={32} strokeWidth={1.8} className="sm:h-[38px] sm:w-[38px]" />
        </div>

        <p className="text-[18px] font-bold text-[#466743] sm:text-[20px]">
          Tap to upload PDF
        </p>

        <p className="mt-2 text-[13px] text-[#5e605b] sm:text-[14px]">
          Max file size: 5 MB
        </p>
      </div>

      <input
        type="file"
        accept=".pdf"
        className="absolute inset-0 cursor-pointer opacity-0"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) onFileSelectAction(file);
        }}
      />
    </label>
  );
}