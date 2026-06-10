"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import MobileScreen from "@/components/layout/MobileScreen";
import Topbar from "@/components/layout/Topbar";
import BottomNavigation from "@/components/layout/BottomNavigation";
import SupportHeroSearch from "@/components/support/SupportHeroSearch";
import SupportQuickTip from "@/components/support/SupportQuickTip";
import SupportFAQList from "@/components/support/SupportFAQList";
import ContactSupportCard from "@/components/support/ContactSupportCard";

export default function HelpSupportPage() {
  const router = useRouter();

  return (
    <MobileScreen>
      <div className="relative h-screen overflow-hidden bg-[#fbf9f5]">
        <Topbar
          title="Help Center"
          leftIcon={<ArrowLeft size={21} strokeWidth={1.8} />}
          onLeftClick={() => router.back()}
          rightContent={<div className="h-9 w-9" />}
        />

        <main className="mobile-scrollbar h-screen overflow-y-auto overflow-x-hidden px-5 pb-32 pt-24 sm:px-6 md:px-10 xl:px-5">
          <section className="md:mx-auto md:max-w-[720px] xl:mx-0 xl:max-w-none">
            <SupportHeroSearch />

            <SupportQuickTip />

            <SupportFAQList />

            <ContactSupportCard />

            <div className="mt-14 overflow-hidden rounded-[2rem] opacity-80">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=900&auto=format&fit=crop"
                alt="Minimal support workspace"
                className="h-48 w-full object-cover grayscale sepia"
              />
            </div>
          </section>
        </main>

        <BottomNavigation />
      </div>
    </MobileScreen>
  );
}