import Link from "next/link";
import {
  Bell,
  ChevronRight,
  CircleHelp,
  CreditCard,
  LogOut,
  UserRound,
} from "lucide-react";

const accountItems = [
  {
    label: "Account Settings",
    href: "/settings",
    icon: UserRound,
  },
  {
    label: "Payment History",
    href: "/settings/payments",
    icon: CreditCard,
  },
  {
    label: "Notification Preferences",
    href: "/settings/notifications",
    icon: Bell,
  },
  {
    label: "Help & Support",
    href: "/settings/support",
    icon: CircleHelp,
  },
];

export default function ProfileMenuList() {
  return (
    <section>
      <h4 className="mb-4 ml-4 text-[13px] font-bold uppercase tracking-widest text-[#5e605b]">
        Account
      </h4>

      <nav className="space-y-2">
        {accountItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between rounded-2xl bg-[#f5f4ef] p-5 transition-all hover:bg-[#efeee9]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e3e3dc] text-[#466743]">
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                <span className="text-[15px] font-medium text-[#31332f]">
                  {item.label}
                </span>
              </div>

              <ChevronRight
                className="text-[#b2b2ad] transition-transform group-hover:translate-x-1"
                size={20}
                strokeWidth={1.8}
              />
            </Link>
          );
        })}

        <div className="pt-6">
          <button className="group flex w-full items-center gap-4 rounded-2xl p-5 text-[#a73b21] transition-all hover:bg-[#fd795a]/5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fd795a]/20">
              <LogOut size={20} strokeWidth={1.8} />
            </div>

            <span className="text-[15px] font-semibold">Logout</span>
          </button>
        </div>
      </nav>
    </section>
  );
}