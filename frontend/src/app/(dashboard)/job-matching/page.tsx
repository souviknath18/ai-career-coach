"use client";

import { useState } from "react";
import MobileScreen from "@/components/layout/MobileScreen";
import Topbar from "@/components/layout/Topbar";
import BottomNavigation from "@/components/layout/BottomNavigation";
import AppSidebar from "@/components/layout/AppSidebar";
import JobDescriptionInput from "@/components/jobs/JobDescriptionInput";
import JobMatchAnalysis from "@/components/jobs/JobMatchAnalysis";
import SkillsComparisonGrid from "@/components/jobs/SkillsComparisonGrid";
import CoachPerspectiveCard from "@/components/jobs/CoachPerspectiveCard";

export default function JobMatchingPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <MobileScreen>
      <div className="relative h-screen overflow-hidden bg-[#fbf9f5]">
        <Topbar
          title="Job Match"
          onLeftClick={() => setSidebarOpen(true)}
        />

        <main className="mobile-scrollbar h-screen overflow-y-auto overflow-x-hidden px-5 pb-28 pt-24 sm:px-6 md:px-10 xl:px-5">
          <section className="space-y-10 md:mx-auto md:max-w-[720px] xl:mx-0 xl:max-w-none">
            <JobDescriptionInput />

            <JobMatchAnalysis />

            <SkillsComparisonGrid />

            <CoachPerspectiveCard />
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