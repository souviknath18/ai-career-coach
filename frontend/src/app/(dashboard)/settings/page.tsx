"use client";

import { useState } from "react";
import { ArrowLeft, UserCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import MobileScreen from "@/components/layout/MobileScreen";
import Topbar from "@/components/layout/Topbar";
import BottomNavigation from "@/components/layout/BottomNavigation";
import AppSidebar from "@/components/layout/AppSidebar";
import SettingsProfileHeader from "@/components/settings/SettingsProfileHeader";
import SettingsSection from "@/components/settings/SettingsSection";
import SettingsRow from "@/components/settings/SettingsRow";
import SettingsToggle from "@/components/settings/SettingsToggle";
import DangerZone from "@/components/settings/DangerZone";

export default function SettingsPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <MobileScreen>
      <div className="relative h-screen overflow-hidden bg-[#fbf9f5]">
        <Topbar
          title="Settings"
          onLeftClick={() => setSidebarOpen(true)}
          rightContent={
            <button
              type="button"
              onClick={() => router.push("/profile")}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#466743] transition-all hover:bg-[#e9e8e3]/60 active:scale-95"
            >
              <UserCircle size={21} strokeWidth={1.8} />
            </button>
          }
        />

        <main className="mobile-scrollbar h-screen overflow-y-auto overflow-x-hidden px-5 pb-28 pt-24 sm:px-6 md:px-10 xl:px-5">
          <section className="space-y-10 md:mx-auto md:max-w-[720px] xl:mx-0 xl:max-w-none">
            <SettingsProfileHeader />

            <SettingsSection title="Account">
              <SettingsRow icon="user" label="Edit Profile" href="/profile/edit" />
              <SettingsRow icon="lock" label="Change Password" href="/settings/password" />
              <SettingsRow
                icon="card"
                label="Subscription Plan"
                href="/subscription"
                badge="Pro"
              />
            </SettingsSection>

            <SettingsSection title="Notifications">
              <SettingsRow icon="bell" label="Push Notifications" right={<SettingsToggle enabled />} />
              <SettingsRow icon="mail" label="Email Updates" right={<SettingsToggle />} />
            </SettingsSection>

            <SettingsSection title="Privacy">
              <SettingsRow icon="shield" label="Privacy Policy" href="/privacy" external />
              <SettingsRow icon="share" label="Data Sharing" right={<SettingsToggle enabled />} />
            </SettingsSection>

            <SettingsSection title="App Settings">
              <SettingsRow icon="moon" label="Dark Mode" right={<SettingsToggle />} />
              <SettingsRow icon="trash" label="Clear Cache" danger rightText="124 MB" />
            </SettingsSection>

            <DangerZone />
          </section>
        </main>

        <BottomNavigation />

        <AppSidebar open={sidebarOpen} onCloseAction={() => setSidebarOpen(false)} />
      </div>
    </MobileScreen>
  );
}