export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-3 pb-8 pl-12">
      <div className="flex gap-1">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#466743]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#466743] [animation-delay:0.2s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#466743] [animation-delay:0.4s]" />
      </div>

      <span className="text-[12px] font-medium italic text-[#5e605b]">
        AI Mentor is thinking...
      </span>
    </div>
  );
}