"use client";

import { useRef } from "react";
import { PlusCircle, Send } from "lucide-react";

export default function ChatInputBar() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "56px";

    if (!textarea.value.trim()) {
      textarea.style.height = "56px";
      return;
    }

    textarea.style.height = "auto";

    const newHeight = Math.min(textarea.scrollHeight, 180);

    textarea.style.height = `${Math.max(newHeight, 56)}px`;
  };

  return (
    <div className="fixed bottom-[74px] left-1/2 z-40 w-full -translate-x-1/2 border-t border-[#e9e8e3]/60 bg-[#fbf9f5] px-4 py-4 shadow-[0_-4px_48px_rgba(49,51,47,0.04)] sm:max-w-[520px] md:max-w-full md:px-10 xl:max-w-[430px] xl:px-4">
      <div className="grid grid-cols-[28px_1fr] items-end gap-2 md:mx-auto md:max-w-[720px] xl:max-w-none">
        <button
          type="button"
          className="flex h-[56px] w-[28px] items-center justify-center text-[#5e605b] transition-all hover:text-[#466743] active:scale-95"
        >
          <PlusCircle size={24} strokeWidth={1.8} />
        </button>

        <div className="relative">
          <textarea
            ref={textareaRef}
            rows={1}
            onInput={handleInput}
            placeholder="Type your career question..."
            className="chat-input-scrollbar block h-[56px] min-h-[56px] max-h-[180px] w-full resize-none overflow-y-auto rounded-2xl border-none bg-[#e9e8e3] px-5 py-4 pr-14 text-[14px] leading-6 text-[#31332f] outline-none placeholder:text-[#5e605b]/50 transition-all focus:bg-white focus:ring-2 focus:ring-[#466743]/20"
          />

          <button
            type="button"
            className="absolute bottom-[10px] right-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[#466743] text-[#eaffe3] shadow-md transition-all hover:brightness-105 active:scale-95"
          >
            <Send size={16} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </div>
  );
}