"use client";

import { useRouter } from "next/navigation";

export default function SubscriptionPlanCard() {
  const router = useRouter();

  return (
    <section className="mb-10">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#efeee9] p-6 sm:p-8">
        <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#fde7d3]/40 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between xl:flex-col xl:items-start">
          <div>
            <span className="mb-3 inline-block rounded-full bg-[#e3e3dc] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#5e605b]">
              Current Plan
            </span>

            <h3 className="text-[24px] font-semibold text-[#31332f]">
              Free Plan
            </h3>

            <p className="mt-1 max-w-[260px] text-[14px] leading-6 text-[#5e605b]">
              Access to basic career modules and 3 monthly AI coaching
              sessions.
            </p>
          </div>

          <button
            type="button"
            onClick={() => router.push("/subscription")}
            className="w-full rounded-full bg-gradient-to-br from-[#466743] to-[#3a5b38] px-8 py-4 text-[15px] font-semibold text-[#eaffe3] shadow-[0_4px_24px_rgba(70,103,67,0.2)] transition-all active:scale-95 md:w-auto xl:w-full"
          >
            Upgrade to Premium
          </button>
        </div>
      </div>
    </section>
  );
}