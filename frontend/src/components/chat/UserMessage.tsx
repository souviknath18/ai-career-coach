type UserMessageProps = {
  message: string;
  time: string;
};

export default function UserMessage({ message, time }: UserMessageProps) {
  return (
    <div className="ml-auto flex max-w-[88%] items-start justify-end gap-3 sm:gap-4">
      <div className="space-y-2 text-right">
        <div className="rounded-bl-2xl rounded-br-2xl rounded-tl-2xl rounded-tr-sm bg-[#466743] p-4 text-left text-[14px] leading-7 text-[#eaffe3] shadow-md sm:p-5 sm:text-[15px]">
          {message}
        </div>

        <span className="mr-1 text-[10px] font-medium text-[#5e605b]">
          {time}
        </span>
      </div>

      <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#b2b2ad]/20 bg-[#d4e4f6]">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
          alt="User"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}