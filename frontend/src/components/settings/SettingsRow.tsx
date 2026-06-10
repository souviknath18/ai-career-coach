import Link from "next/link";
import {
  Bell,
  ChevronRight,
  CreditCard,
  ExternalLink,
  Lock,
  Mail,
  Moon,
  Share2,
  Shield,
  Trash2,
  User,
} from "lucide-react";
import { ReactNode } from "react";

type SettingsRowProps = {
  icon: "user" | "lock" | "card" | "bell" | "mail" | "shield" | "share" | "moon" | "trash";
  label: string;
  href?: string;
  badge?: string;
  right?: ReactNode;
  rightText?: string;
  danger?: boolean;
  external?: boolean;
};

const icons = {
  user: User,
  lock: Lock,
  card: CreditCard,
  bell: Bell,
  mail: Mail,
  shield: Shield,
  share: Share2,
  moon: Moon,
  trash: Trash2,
};

export default function SettingsRow({
  icon,
  label,
  href,
  badge,
  right,
  rightText,
  danger = false,
  external = false,
}: SettingsRowProps) {
  const Icon = icons[icon];

  const content = (
    <div className="group flex items-center justify-between p-4 transition-colors hover:bg-[#efeee9]">
      <div className="flex items-center gap-4">
        <Icon
          size={20}
          strokeWidth={1.8}
          className={danger ? "text-[#a73b21]" : "text-[#466743]"}
        />

        <span
          className={
            danger
              ? "text-[15px] font-medium text-[#a73b21]"
              : "text-[15px] font-medium text-[#31332f]"
          }
        >
          {label}
        </span>
      </div>

      <div className="flex items-center gap-2">
        {badge && (
          <span className="rounded-full bg-[#c6edbf] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#395937]">
            {badge}
          </span>
        )}

        {rightText && (
          <span className="px-2 text-[12px] font-bold text-[#7a7b76]">
            {rightText}
          </span>
        )}

        {right}

        {!right && !rightText && (
          external ? (
            <ExternalLink size={18} className="text-[#b2b2ad]" />
          ) : (
            <ChevronRight
              size={19}
              className="text-[#b2b2ad] transition-transform group-hover:translate-x-1"
            />
          )
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}