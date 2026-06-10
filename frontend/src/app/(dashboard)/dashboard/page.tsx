"use client";

import { useState } from "react";
import Topbar from "@/components/layout/Topbar";
import ResumeScoreCard from "@/components/dashboard/ResumeScoreCard";
import DashboardFeatureGrid from "@/components/dashboard/DashboardFeatureGrid";
import CareerReflectionCard from "@/components/dashboard/CareerReflectionCard";
import BottomNavigation from "@/components/layout/BottomNavigation";
import MobileScreen from "@/components/layout/MobileScreen";
import AppSidebar from "@/components/layout/AppSidebar";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <MobileScreen>
      <div className="relative h-screen overflow-hidden bg-[#fbf9f5]">
        <Topbar
          title="Sage & Solace"
          onLeftClick={() => setSidebarOpen(true)}
        />

        <main className="mobile-scrollbar h-screen overflow-y-auto overflow-x-hidden px-5 pb-24 pt-20">
          <section className="mb-8">
            <h2 className="text-[28px] font-extrabold tracking-tight text-[#31332f]">
              Hi, Souvik 👋
            </h2>

            <p className="text-[15px] leading-7 text-[#5e605b]">
              Ready to refine your professional story today?
            </p>
          </section>

          <ResumeScoreCard />

          <DashboardFeatureGrid />

          <CareerReflectionCard />
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