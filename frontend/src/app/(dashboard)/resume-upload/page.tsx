"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import MobileScreen from "@/components/layout/MobileScreen";
import Topbar from "@/components/layout/Topbar";
import BottomNavigation from "@/components/layout/BottomNavigation";
import AppSidebar from "@/components/layout/AppSidebar";
import ResumeUploadHero from "@/components/resume/upload/ResumeUploadHero";
import ResumeUploadDropzone from "@/components/resume/upload/ResumeUploadDropzone";
import ResumeUploadPreview from "@/components/resume/upload/ResumeUploadPreview";
import ResumeUploadButton from "@/components/resume/upload/ResumeUploadButton";
import MentorInsightCard from "@/components/resume/upload/MentorInsightCard";

export default function ResumeUploadPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <MobileScreen>
      <div className="relative h-screen overflow-hidden bg-[#fbf9f5]">
        <Topbar
          title="Upload Resume"
          onLeftClick={() => setSidebarOpen(true)}
        />

        <main className="mobile-scrollbar h-screen overflow-y-auto overflow-x-hidden px-5 pb-28 pt-24 md:px-10 xl:px-5">
          <section className="md:mx-auto md:max-w-[720px] xl:mx-0 xl:max-w-none">
            <ResumeUploadHero />

            <ResumeUploadDropzone onFileSelectAction={setSelectedFile} />

            {selectedFile && (
              <ResumeUploadPreview
                file={selectedFile}
                onRemoveAction={() => setSelectedFile(null)}
              />
            )}

            <ResumeUploadButton
              disabled={!selectedFile}
              onClickAction={() => router.push("/resume-analysis")}
            />

            <MentorInsightCard />
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