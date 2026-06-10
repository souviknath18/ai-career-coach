"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import MobileScreen from "@/components/layout/MobileScreen";
import Topbar from "@/components/layout/Topbar";
import BottomNavigation from "@/components/layout/BottomNavigation";
import PaymentHistoryHero from "@/components/payments/PaymentHistoryHero";
import PaymentTransactionGrid from "@/components/payments/PaymentTransactionGrid";
import PaymentMentorNote from "@/components/payments/PaymentMentorNote";

export default function PaymentHistoryPage() {
  const router = useRouter();

  return (
    <MobileScreen>
      <div className="relative h-screen overflow-hidden bg-[#fbf9f5]">
        <Topbar
          title="Payment History"
          leftIcon={<ArrowLeft size={21} strokeWidth={1.8} />}
          onLeftClick={() => router.back()}
          rightContent={<div className="h-9 w-9" />}
        />

        <main className="mobile-scrollbar h-screen overflow-y-auto overflow-x-hidden px-5 pb-32 pt-24 sm:px-6 md:px-10 xl:px-5">
          <section className="md:mx-auto md:max-w-[720px] xl:mx-0 xl:max-w-none">
            <PaymentHistoryHero />

            <PaymentTransactionGrid />

            <PaymentMentorNote />
          </section>
        </main>

        <BottomNavigation />
      </div>
    </MobileScreen>
  );
}