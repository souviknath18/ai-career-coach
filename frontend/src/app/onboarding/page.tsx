"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import MobileScreen from "@/components/layout/MobileScreen";
import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import OnboardingIllustration from "@/components/onboarding/OnboardingIllustration";
import OnboardingDots from "@/components/onboarding/OnboardingDots";

const slides = [
  {
    type: "resume",
    title: "Analyze Your Resume with AI",
    description:
      "Get instant feedback on your resume keywords, formatting, and ATS compatibility.",
    stepText: "Step 1 of 3: Resume Insights",
  },
  {
    type: "coach",
    title: "24/7 AI Career Coach",
    description:
      "Ask any career-related question, from salary negotiation to networking tips, anytime.",
    stepText: "Step 2 of 3: AI Guidance",
  },
  {
    type: "interview",
    title: "Master Your Interviews",
    description:
      "Practice with real-time feedback on your tone, confidence, and response quality.",
    stepText: "Step 3 of 3: Interview Practice",
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);

  const currentSlide = slides[activeStep];
  const isLastStep = activeStep === slides.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      router.push("/signup");
      return;
    }

    setActiveStep((prev) => prev + 1);
  };

  return (
    <MobileScreen>
      <div className="relative h-screen overflow-hidden bg-[#fbf9f5]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fbf9f5] to-[#eaffe3]" />

        <OnboardingHeader onSkipAction={() => router.push("/signup")} />

        <main className="mobile-scrollbar relative z-10 flex h-screen flex-col overflow-y-auto overflow-x-hidden px-8 pb-10 pt-20">
          <section className="flex flex-1 flex-col justify-center">
            <OnboardingIllustration type={currentSlide.type} />

            <div className="mt-8 space-y-3">
              <h1 className="text-[30px] font-extrabold leading-tight tracking-tight text-[#31332f]">
                {currentSlide.title}
              </h1>

              <p className="max-w-[320px] text-[15px] leading-7 text-[#5e605b]">
                {currentSlide.description}
              </p>
            </div>
          </section>

          <section className="space-y-8 pt-6">
            <OnboardingDots total={slides.length} activeStep={activeStep} />

            <div className="space-y-4">
              <button
                type="button"
                onClick={handleNext}
                className="w-full rounded-full bg-gradient-to-br from-[#466743] to-[#3a5b38] py-4 text-[17px] font-bold text-[#eaffe3] shadow-lg shadow-[#466743]/10 transition-all active:scale-95"
              >
                {isLastStep ? "Get Started" : "Next"}
              </button>

              <p className="text-center text-[12px] font-medium text-[#5e605b]/60">
                {currentSlide.stepText}
              </p>
            </div>
          </section>
        </main>
      </div>
    </MobileScreen>
  );
}