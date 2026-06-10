"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import MobileScreen from "@/components/layout/MobileScreen";
import Topbar from "@/components/layout/Topbar";
import EditProfileAvatar from "@/components/profile/EditProfileAvatar";
import EditProfileForm from "@/components/profile/EditProfileForm";
import EditProfileMentorNote from "@/components/profile/EditProfileMentorNote";
import BottomNavigation from "@/components/layout/BottomNavigation";

export default function EditProfilePage() {
  const router = useRouter();

  return (
    <MobileScreen>
      <div className="relative h-screen overflow-hidden bg-[#fbf9f5]">
        <Topbar
          title="Edit Profile"
          leftIcon={<ArrowLeft size={21} strokeWidth={1.8} />}
          onLeftClick={() => router.back()}
          rightContent={<div className="h-9 w-9" />}
        />

        <main className="mobile-scrollbar h-screen overflow-y-auto overflow-x-hidden px-5 pb-24 pt-24 sm:px-6 md:px-10 xl:px-5">
          <section className="md:mx-auto md:max-w-[720px] xl:mx-0 xl:max-w-none">
            <EditProfileAvatar />

            <EditProfileForm />

            <EditProfileMentorNote />

            <footer className="mt-12 flex h-20 items-center justify-center rounded-t-[2rem] bg-[#f5f4ef]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#5e605b]/50">
                AI Career Coach • Sage &amp; Solace
              </p>
            </footer>

            <BottomNavigation />
          </section>
        </main>
      </div>
    </MobileScreen>
  );
}