"use client";

import { useState } from "react";
import { ArrowLeft, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";
import MobileScreen from "@/components/layout/MobileScreen";
import Topbar from "@/components/layout/Topbar";
import BottomNavigation from "@/components/layout/BottomNavigation";
import AppSidebar from "@/components/layout/AppSidebar";
import ResumeAnalysisScore from "@/components/resume/analysis/ResumeAnalysisScore";
import AnalysisBentoGrid from "@/components/resume/analysis/AnalysisBentoGrid";
import AIMentorSuggestion from "@/components/resume/analysis/AIMentorSuggestion";
import DownloadReportButton from "@/components/resume/analysis/DownloadReportButton";
import EmptyResumeAnalysisState from "@/components/resume/analysis/EmptyResumeAnalysis";

export default function ResumeAnalysisPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const hasResumeAnalysis = true;

  return (
    <MobileScreen>
      <div className="relative h-screen overflow-hidden bg-[#fbf9f5]">
        <Topbar
          title="Resume Analysis"
          onLeftClick={() => setSidebarOpen(true)}
        />

        <main className="mobile-scrollbar h-screen overflow-y-auto overflow-x-hidden px-5 pt-24 pb-24 sm:px-6 md:px-10 xl:px-5">
          <section
            className={
              hasResumeAnalysis
                ? "md:mx-auto md:max-w-[720px] xl:mx-0 xl:max-w-none"
                : "flex min-h-full md:mx-auto md:max-w-[720px] xl:mx-0 xl:max-w-none"
            }
          >
            {hasResumeAnalysis ? (
              <>
                <ResumeAnalysisScore />
                <AnalysisBentoGrid />
                <AIMentorSuggestion />
                <DownloadReportButton />
              </>
            ) : (
              <EmptyResumeAnalysisState />
            )}
          </section>
        </main>

        <BottomNavigation />

        <AppSidebar
          open={sidebarOpen}
          onCloseAction={() => setSidebarOpen(false)}
        />
      </div>
    </MobileScreen>
  );
}