import { ReactNode } from "react";
import { Menu } from "lucide-react";

type TopbarProps = {
  title: string;
  leftIcon?: ReactNode;
  onLeftClick?: () => void;
  rightContent?: ReactNode;
};

export default function Topbar({
  title,
  leftIcon = <Menu size={21} strokeWidth={1.8} />,
  onLeftClick,
  rightContent,
}: TopbarProps) {
  return (
    <header className="fixed top-0 left-1/2 z-50 flex h-[68px] w-full -translate-x-1/2 items-center justify-between border-b border-[#e9e8e3]/50 bg-[#fbf9f5]/85 px-4 backdrop-blur-xl sm:max-w-[520px] md:max-w-full xl:max-w-[430px]">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onLeftClick}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#395937] transition-all hover:bg-[#e9e8e3]/60 active:scale-95"
        >
          {leftIcon}
        </button>

        <h1 className="truncate text-[19px] font-bold tracking-tight text-[#395937]">
          {title}
        </h1>
      </div>

      {rightContent ?? (
        <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-[0_6px_18px_rgba(49,51,47,0.08)]">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
            alt="User avatar"
            className="h-full w-full object-cover"
          />
        </div>
      )}
    </header>
  );
}