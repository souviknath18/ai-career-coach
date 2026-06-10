"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import MobileScreen from "@/components/layout/MobileScreen";
import Topbar from "@/components/layout/Topbar";
import SubscriptionHero from "@/components/subscription/SubscriptionHero";
import PricingGrid from "@/components/subscription/PricingGrid";
import PaymentTrustSection from "@/components/subscription/PaymentTrustSection";
import SubscriptionTestimonial from "@/components/subscription/SubscriptionTestimonial";

export default function SubscriptionPage() {
  const router = useRouter();

  return (
    <MobileScreen>
      <div className="relative h-screen overflow-hidden bg-[#fbf9f5]">
        <Topbar
          title="Premium Coach"
          leftIcon={<ArrowLeft size={21} strokeWidth={1.8} />}
          onLeftClick={() => router.back()}
          rightContent={<div className="h-9 w-9" />}
        />

        <main className="mobile-scrollbar h-screen overflow-y-auto overflow-x-hidden px-5 pb-14 pt-24 sm:px-6 md:px-10 xl:px-5">
          <section className="md:mx-auto md:max-w-[720px] xl:mx-0 xl:max-w-none">
            <SubscriptionHero />

            <PricingGrid />

            <PaymentTrustSection />

            <SubscriptionTestimonial />

            <footer className="mt-14 pb-6 text-center">
              <div className="flex justify-center gap-4 text-[11px] text-[#5e605b] underline decoration-[#b2b2ad]/30 underline-offset-4">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms</a>
                <a href="#">Help</a>
              </div>

              <p className="mt-4 text-[10px] text-[#5e605b]/60">
                © 2026 Premium Coach AI. All rights reserved.
              </p>
            </footer>
          </section>
        </main>
      </div>
    </MobileScreen>
  );
}