"use client";

import { ArrowLeft, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import MobileScreen from "@/components/layout/MobileScreen";
import Topbar from "@/components/layout/Topbar";
import BottomNavigation from "@/components/layout/BottomNavigation";
import NotificationsHero from "@/components/notifications/NotificationsHero";
import NotificationList from "@/components/notifications/NotificationList";
import NotificationPromoGrid from "@/components/notifications/NotificationPromoGrid";
import NotificationReflection from "@/components/notifications/NotificationReflection";

export default function NotificationsPage() {
  const router = useRouter();

  return (
    <MobileScreen>
      <div className="relative h-screen overflow-hidden bg-[#fbf9f5]">
        <Topbar
          title="Notifications"
          leftIcon={<ArrowLeft size={21} strokeWidth={1.8} />}
          onLeftClick={() => router.back()}
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

        <main className="mobile-scrollbar h-screen overflow-y-auto overflow-x-hidden px-5 pb-32 pt-24 sm:px-6 md:px-10 xl:px-5">
          <section className="md:mx-auto md:max-w-[720px] xl:mx-0 xl:max-w-none">
            <NotificationsHero />

            <NotificationList />

            <NotificationPromoGrid />

            <NotificationReflection />
          </section>
        </main>

        <BottomNavigation />
      </div>
    </MobileScreen>
  );
}