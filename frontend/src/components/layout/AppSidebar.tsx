"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bot,
  BriefcaseBusiness,
  Crown,
  FileText,
  Home,
  LogOut,
  Settings,
  Sparkles,
  Upload,
  User,
  Video,
  X,
} from "lucide-react";
import { useEffect } from "react";

type AppSidebarProps = {
  open: boolean;
  onCloseAction: () => void;
};

const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "Upload Resume",
    href: "/resume-upload",
    icon: Upload,
  },
  {
    label: "Resume Analysis",
    href: "/resume-analysis",
    icon: FileText,
  },
  {
    label: "Job Match",
    href: "/job-matching",
    icon: BriefcaseBusiness,
  },
  {
    label: "AI Chat Coach",
    href: "/ai-chat",
    icon: Bot,
  },
  {
    label: "Mock Interview",
    href: "/mock-interview",
    icon: Video,
  },
  {
    label: "Subscription",
    href: "/subscription",
    icon: Crown,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: User,
  },
];

export default function AppSidebar({
  open,
  onCloseAction,
}: AppSidebarProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        onClick={onCloseAction}
        className={
          open
            ? "absolute inset-0 z-[80] bg-[#31332f]/35 backdrop-blur-[2px] transition-opacity duration-300"
            : "pointer-events-none absolute inset-0 z-[80] bg-[#31332f]/0 opacity-0 transition-opacity duration-300"
        }
      />

      <aside
        className={
          open
            ? "absolute left-0 top-0 z-[90] h-full w-[82%] max-w-[340px] translate-x-0 overflow-hidden bg-[#fbf9f5] shadow-[20px_0_60px_rgba(49,51,47,0.15)] transition-transform duration-300 ease-out sm:max-w-[360px]"
            : "absolute left-0 top-0 z-[90] h-full w-[82%] max-w-[340px] -translate-x-full overflow-hidden bg-[#fbf9f5] shadow-none transition-transform duration-300 ease-out sm:max-w-[360px]"
        }
      >
        <div className="mobile-scrollbar relative flex h-full flex-col overflow-y-auto">
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#c6edbf]/35 blur-[90px]" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#d4e4f6]/35 blur-[100px]" />

          <div className="relative z-10 flex items-center justify-between border-b border-[#e9e8e3]/70 px-5 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#c6edbf]/45 text-[#395937]">
                <Sparkles size={21} strokeWidth={1.8} />
              </div>

              <div>
                <h2 className="text-[17px] font-bold text-[#31332f]">
                  Sage &amp; Solace
                </h2>
                <p className="text-[12px] text-[#5e605b]">
                  AI Career Coach
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onCloseAction}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#5e605b] transition-all hover:bg-[#e9e8e3]/70 active:scale-95"
            >
              <X size={20} strokeWidth={1.8} />
            </button>
          </div>

          <div className="relative z-10 px-4 py-5">
            <div className="mb-5 rounded-[1.5rem] bg-white/80 p-4 shadow-[0_18px_35px_rgba(49,51,47,0.05)]">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5e605b]/60">
                Career Progress
              </p>

              <div className="mt-3 flex items-end justify-between">
                <div>
                  <p className="text-2xl font-bold text-[#31332f]">85%</p>
                  <p className="text-[12px] text-[#5e605b]">
                    Resume strength
                  </p>
                </div>

                <div className="rounded-full bg-[#c6edbf]/45 px-3 py-1 text-[11px] font-bold text-[#395937]">
                  Strong
                </div>
              </div>
            </div>

            <nav className="space-y-1.5">
              {menuItems.map((item) => {
                const Icon = item.icon;

                const active =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onCloseAction}
                    className={
                      active
                        ? "flex items-center gap-3 rounded-2xl bg-[#c6edbf]/45 px-4 py-3.5 text-[#395937] transition-all"
                        : "flex items-center gap-3 rounded-2xl px-4 py-3.5 text-[#5e605b] transition-all hover:bg-[#e9e8e3]/60 hover:text-[#395937]"
                    }
                  >
                    <Icon size={20} strokeWidth={1.8} />

                    <span className="text-[14px] font-semibold">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="relative z-10 mt-auto border-t border-[#e9e8e3]/70 p-4">
            <Link
              href="/settings"
              onClick={onCloseAction}
              className="mb-2 flex items-center gap-3 rounded-2xl px-4 py-3 text-[#5e605b] transition-all hover:bg-[#e9e8e3]/60 hover:text-[#395937]"
            >
              <Settings size={19} strokeWidth={1.8} />
              <span className="text-[14px] font-semibold">Settings</span>
            </Link>

            <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-[#a73b21] transition-all hover:bg-[#fd795a]/10">
              <LogOut size={19} strokeWidth={1.8} />
              <span className="text-[14px] font-semibold">Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}