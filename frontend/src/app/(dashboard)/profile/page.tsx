"use client";

import { useState } from "react";
import { Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import MobileScreen from "@/components/layout/MobileScreen";
import Topbar from "@/components/layout/Topbar";
import BottomNavigation from "@/components/layout/BottomNavigation";
import AppSidebar from "@/components/layout/AppSidebar";
import ProfileHeaderCard from "@/components/profile/ProfileHeaderCard";
import SubscriptionPlanCard from "@/components/profile/SubscriptionPlanCard";
import ProfileMenuList from "@/components/profile/ProfileMenuList";

export default function ProfilePage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <MobileScreen>
      <div className="relative h-screen overflow-hidden bg-[#fbf9f5]">
        <Topbar
          title="Profile"
          onLeftClick={() => setSidebarOpen(true)}
          rightContent={
            <button
              type="button"
              onClick={() => router.push("/settings")}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#466743] transition-all hover:bg-[#e9e8e3]/60 active:scale-95"
            >
              <Settings size={19} strokeWidth={1.8} />
            </button>
          }
        />

        <main className="mobile-scrollbar h-screen overflow-y-auto overflow-x-hidden px-5 pb-28 pt-24 sm:px-6 md:px-10 xl:px-5">
          <section className="md:mx-auto md:max-w-[720px] xl:mx-0 xl:max-w-none">
            <ProfileHeaderCard />

            <SubscriptionPlanCard />

            <ProfileMenuList />
          </section>
        </main>

        <BottomNavigation />

        <AppSidebar
          open={sidebarOpen}
          onCloseAction={() => setSidebarOpen(false)}
        />
      </div>
    </MobileScreen>
  );
}