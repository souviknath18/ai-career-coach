import { LucideIcon } from "lucide-react";

type NotificationCardProps = {
  title: string;
  time: string;
  description: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  unread?: boolean;
  muted?: boolean;
};

export default function NotificationCard({
  title,
  time,
  description,
  icon: Icon,
  iconBg,
  iconColor,
  unread = false,
  muted = false,
}: NotificationCardProps) {
  return (
    <div className={unread ? "relative group" : "group"}>
      {unread && (
        <div className="absolute -left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#466743] shadow-[0_0_8px_rgba(70,103,67,0.4)]" />
      )}

      <div
        className={
          muted
            ? "rounded-[2rem] bg-[#efeee9] p-5 opacity-60 transition-all group-active:scale-[0.98]"
            : unread
              ? "rounded-[2rem] bg-white p-5 transition-all hover:bg-[#f5f4ef] group-active:scale-[0.98]"
              : "rounded-[2rem] bg-[#efeee9] p-5 opacity-80 transition-all hover:opacity-100 group-active:scale-[0.98]"
        }
      >
        <div className="flex gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${iconBg} ${iconColor}`}
          >
            <Icon size={22} strokeWidth={1.8} />
          </div>

          <div className="flex-1 space-y-1">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-[16px] font-bold text-[#31332f]">
                {title}
              </h3>

              <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-[#5e605b]">
                {time}
              </span>
            </div>

            <p className="text-[14px] leading-6 text-[#5e605b]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}