import { Sparkles } from "lucide-react";

type AIMessageProps = {
  message: string;
  time: string;
};

export default function AIMessage({ message, time }: AIMessageProps) {
  return (
    <div className="flex max-w-[88%] items-start gap-3 sm:gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#466743] text-[#eaffe3] shadow-lg">
        <Sparkles size={19} strokeWidth={1.8} />
      </div>

      <div className="space-y-2">
        <div className="rounded-br-2xl rounded-tl-sm rounded-tr-2xl rounded-bl-2xl border border-[#b2b2ad]/10 bg-[#f5f4ef] p-4 text-[14px] leading-7 text-[#31332f] shadow-sm sm:p-5 sm:text-[15px]">
          {message}
        </div>

        <span className="ml-1 text-[10px] font-medium text-[#5e605b]">
          {time}
        </span>
      </div>
    </div>
  );
}