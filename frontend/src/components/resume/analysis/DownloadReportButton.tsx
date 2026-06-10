"use client";

import { Download } from "lucide-react";

export default function DownloadReportButton() {
  return (
    <div className="mt-8 pb-4">
      <button className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-br from-[#466743] to-[#3a5b38] py-4 text-[16px] font-bold text-[#eaffe3] shadow-xl shadow-[#466743]/20 transition-all active:scale-[0.98]">
        <Download size={19} strokeWidth={2} />
        Download Detailed Report
      </button>
    </div>
  );
}