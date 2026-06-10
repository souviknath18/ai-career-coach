"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Brain, BriefcaseBusiness } from "lucide-react";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/onboarding");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);
  
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-100 via-emerald-50 to-sky-100 sm:flex sm:justify-center">
      <div className="pointer-events-none absolute left-10 top-10 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />

      <section className="relative min-h-screen w-full overflow-hidden bg-[#fbf9f5] sm:max-w-[430px] sm:shadow-[0_25px_80px_rgba(0,0,0,0.16)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fbf9f5] to-[#eaffe3]" />

        {/* Very soft moving background circles - edges only */}
        <div className="circle-edge-one absolute -left-36 -top-20 h-72 w-72 rounded-full bg-[#c6edbf]/20" />
        <div className="circle-edge-two absolute -right-44 top-20 h-80 w-80 rounded-full bg-[#d4e4f6]/24" />
        <div className="circle-edge-three absolute -left-36 bottom-8 h-72 w-72 rounded-full bg-[#fde7d3]/20" />
        <div className="circle-edge-four absolute -right-36 bottom-36 h-64 w-64 rounded-full bg-[#c6edbf]/16" />

        {/* Small low-opacity moving dots */}
        <div className="circle-small-one absolute left-16 top-[27%] h-8 w-8 rounded-full bg-[#466743]/10" />
        <div className="circle-small-two absolute right-20 top-[34%] h-10 w-10 rounded-full bg-[#d4e4f6]/35" />
        <div className="circle-small-three absolute left-12 bottom-[28%] h-7 w-7 rounded-full bg-[#fde7d3]/35" />
        <div className="circle-small-four absolute right-16 bottom-[18%] h-8 w-8 rounded-full bg-[#466743]/8" />

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8 text-center">
          <div className="relative mb-12">
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-60 shadow-[0_40px_60px_rgba(49,51,47,0.05)]" />

            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              <div className="flex -space-x-3">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#d4e4f6]">
                  <Brain
                    size={30}
                    className="text-[#516170]"
                    strokeWidth={1.8}
                  />
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c6edbf] shadow-sm">
                  <BriefcaseBusiness
                    size={24}
                    className="text-[#395937]"
                    strokeWidth={1.8}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight text-[#31332f]">
              Career Coach
            </h1>

            <p className="mx-auto max-w-[260px] text-[15px] leading-7 text-[#5e605b]/80">
              Build your future with AI guidance
            </p>
          </div>

          <div className="mt-20 h-[2px] w-20 overflow-hidden rounded-full bg-[#e8e7e2]">
            <div className="h-full w-1/2 animate-loading-bar rounded-full bg-[#466743]/45" />
          </div>

          <div className="absolute bottom-14">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#5e605b]/35">
              Your path, clearly defined.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}