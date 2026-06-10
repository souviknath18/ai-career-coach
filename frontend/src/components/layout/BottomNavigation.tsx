"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bot,
  FileText,
  LayoutDashboard,
  User,
  Video,
} from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Resume",
    href: "/resume-analysis",
    icon: FileText,
  },
  {
    label: "Coach",
    href: "/ai-chat",
    icon: Bot,
  },
  {
    label: "Interview",
    href: "/mock-interview",
    icon: Video,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: User,
  },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 z-50 flex h-[74px] w-full -translate-x-1/2 items-center justify-around border-t border-[#e9e8e3]/70 bg-[#fbf9f5]/92 px-2 backdrop-blur-xl sm:max-w-[520px] md:max-w-full xl:max-w-[430px]">
      {navItems.map((item) => {
        const Icon = item.icon;

        const active =
          pathname === item.href ||
          pathname.startsWith(item.href + "/");

        return (
          <Link
            key={item.href}
            href={item.href}
            className={
              active
                ? "flex w-[68px] flex-col items-center justify-center rounded-2xl bg-[#c6edbf]/45 py-2 text-[#395937] transition-all duration-300"
                : "flex w-[68px] flex-col items-center justify-center rounded-2xl py-2 text-[#7a7b76] transition-all duration-300 hover:text-[#466743]"
            }
          >
            <Icon size={22} strokeWidth={1.8} />

            <span className="mt-1 text-[10px] font-medium tracking-wide">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}