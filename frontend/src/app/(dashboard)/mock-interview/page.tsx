"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import MobileScreen from "@/components/layout/MobileScreen";
import Topbar from "@/components/layout/Topbar";
import BottomNavigation from "@/components/layout/BottomNavigation";
import AppSidebar from "@/components/layout/AppSidebar";
import InterviewStepProgress from "@/components/interview/InterviewStepProgress";
import InterviewQuestionCard from "@/components/interview/InterviewQuestionCard";
import InterviewResponseBox from "@/components/interview/InterviewResponseBox";
import InterviewLiveAnalysis from "@/components/interview/InterviewLiveAnalysis";
import NextQuestionButton from "@/components/interview/NextQuestionButton";
import VoiceInterviewModal from "@/components/interview/VoiceInterviewModal";

export default function MockInterviewPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [voiceOpen, setVoiceOpen] = useState(false);

  return (
    <MobileScreen>
      <div className="relative h-screen overflow-hidden bg-[#fbf9f5]">
        <Topbar
          title="Mock Interview"
          onLeftClick={() => setSidebarOpen(true)}
        />

        <main className="mobile-scrollbar h-screen overflow-y-auto overflow-x-hidden px-5 pb-28 pt-24 sm:px-6 md:px-10 xl:px-5">
          <section className="space-y-8 md:mx-auto md:max-w-[720px] xl:mx-0 xl:max-w-none">
            <InterviewStepProgress />

            <InterviewQuestionCard />

            <InterviewResponseBox
              onStartVoiceAction={() => setVoiceOpen(true)}
            />

            <InterviewLiveAnalysis />

            <NextQuestionButton />
          </section>
        </main>

        <BottomNavigation />

        <AppSidebar
          open={sidebarOpen}
          onCloseAction={() => setSidebarOpen(false)}
        />

        {voiceOpen && (
          <VoiceInterviewModal
            onCloseAction={() => setVoiceOpen(false)}
          />
        )}
      </div>
    </MobileScreen>
  );
}