"use client";

import { useRef, useState } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import MobileScreen from "@/components/layout/MobileScreen";
import Topbar from "@/components/layout/Topbar";
import BottomNavigation from "@/components/layout/BottomNavigation";
import AppSidebar from "@/components/layout/AppSidebar";
import OptimizerHero from "@/components/resume/optimizer/OptimizerHero";
import ResumeSectionOptimizer from "@/components/resume/optimizer/ResumeSectionOptimizer";
import OptimizerInsights from "@/components/resume/optimizer/OptimizerInsights";
import OptimizerActionBar from "@/components/resume/optimizer/OptimizerActionBar";

const resumeSections = [
  {
    id: "summary",
    label: "Profile Summary",
    role: "Career Overview",
    original: "Full Stack Developer with experience in building web applications.",
    optimized:
      "Full Stack Developer with 2+ years of experience building scalable AI-powered web applications using Next.js, Django REST Framework, FastAPI, PostgreSQL, and RAG-based workflows.",
    tags: ["Stronger positioning", "AI keywords", "Clear tech stack"],
  },
  {
    id: "experience",
    label: "Experience",
    role: "Full Stack Developer",
    original:
      "Built an AI career coaching platform with resume analysis, job matching, AI chat, and interview preparation features.",
    optimized:
      "Engineered a full-stack AI career coaching platform using Next.js, Django REST Framework, FastAPI, PostgreSQL, RAG, embeddings, and vector search to deliver resume analysis, semantic job matching, AI chat coaching, and mock interview feedback.",
    tags: ["ATS keywords added", "Stronger action verb", "Clear product impact"],
  },
  {
    id: "projects",
    label: "Projects",
    role: "AI Finance Assistant",
    original:
      "Created AI finance assistant with dashboard, transaction features, and chat.",
    optimized:
      "Developed an AI personal finance assistant with transaction analytics, RAG-powered chat, semantic search, automated financial insights, and secure JWT-based workflows using Next.js, Django, PostgreSQL, and OpenAI APIs.",
    tags: ["Project impact", "AI depth", "Backend strength"],
  },
  {
    id: "skills",
    label: "Skills",
    role: "Technical Skills",
    original: "React, Next.js, Django, Python, PostgreSQL, Tailwind CSS",
    optimized:
      "Frontend: React, Next.js, TypeScript, Tailwind CSS. Backend: Django REST Framework, FastAPI, PostgreSQL, REST APIs, JWT Authentication. AI: RAG, embeddings, semantic search, vector database, OpenAI APIs.",
    tags: ["Grouped skills", "ATS readable", "Better structure"],
  },
  {
    id: "education",
    label: "Education",
    role: "Academic Background",
    original: "Bachelor's degree in Computer Science.",
    optimized:
      "Bachelor's degree in Computer Science with a strong foundation in software engineering, databases, web development, and AI-powered application development.",
    tags: ["More specific", "Career aligned", "ATS friendly"],
  },
];

export type ResumeSection = (typeof resumeSections)[number];

export default function ResumeOptimizerPage() {
  const router = useRouter();
  const sectionScrollRef = useRef<HTMLDivElement | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [score, setScore] = useState(75);
  const [progress, setProgress] = useState(40);
  const [selectedSectionId, setSelectedSectionId] = useState("experience");
  const [activeIndicator, setActiveIndicator] = useState<
    "start" | "middle" | "end"
  >("start");

  const selectedSection =
    resumeSections.find((section) => section.id === selectedSectionId) ??
    resumeSections[0];

  const handleApplySuggestion = () => {
    setScore((prev) => Math.min(prev + 4, 95));
    setProgress((prev) => Math.min(prev + 15, 100));
  };

  const scrollToPosition = (position: "start" | "middle" | "end") => {
    const container = sectionScrollRef.current;

    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;

    setActiveIndicator(position);

    if (position === "start") {
      container.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }

    if (position === "middle") {
      container.scrollTo({
        left: maxScroll / 2,
        behavior: "smooth",
      });
    }

    if (position === "end") {
      container.scrollTo({
        left: maxScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <MobileScreen>
      <div className="relative h-screen overflow-hidden bg-[#fbf9f5]">
        <Topbar
          title="AI Resume Optimizer"
          leftIcon={<ArrowLeft size={21} strokeWidth={1.8} />}
          onLeftClick={() => router.back()}
          rightContent={
            <button className="flex h-9 w-9 items-center justify-center rounded-full text-[#466743] transition-all hover:bg-[#e9e8e3]/60 active:scale-95">
              <Sparkles size={19} strokeWidth={1.8} />
            </button>
          }
        />

        <main className="mobile-scrollbar h-screen overflow-y-auto overflow-x-hidden px-5 pb-40 pt-24 sm:px-6 md:px-10 xl:px-5">
          <section className="space-y-8 md:mx-auto md:max-w-[720px] xl:mx-0 xl:max-w-none">
            <OptimizerHero score={score} />

            <div className="relative -mx-5 sm:-mx-6 md:-mx-10 xl:-mx-5">
              <div
                ref={sectionScrollRef}
                style={{ WebkitOverflowScrolling: "touch" }}
                className="flex gap-3 overflow-x-auto scroll-smooth px-5 py-1 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] sm:px-6 md:px-10 xl:px-5"
              >
                {resumeSections.map((section) => {
                  const active = selectedSectionId === section.id;

                  return (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => setSelectedSectionId(section.id)}
                      className={
                        active
                          ? "shrink-0 scale-105 rounded-full bg-[#466743] px-5 py-2.5 text-[13px] font-bold text-[#eaffe3] shadow-sm transition-all duration-300 active:scale-95"
                          : "shrink-0 rounded-full bg-white px-5 py-2.5 text-[13px] font-bold text-[#5e605b] shadow-sm transition-all duration-300 active:scale-95"
                      }
                    >
                      {section.label}
                    </button>
                  );
                })}
              </div>

              <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-[#fbf9f5] to-transparent" />

              <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#fbf9f5] via-[#fbf9f5]/90 to-transparent" />

              <div className="mt-3 flex items-center justify-center gap-1.5">
                <button
                  type="button"
                  onClick={() => scrollToPosition("start")}
                  className={
                    activeIndicator === "start"
                      ? "h-1.5 w-6 rounded-full bg-[#466743] transition-all duration-300"
                      : "h-1.5 w-1.5 rounded-full bg-[#466743]/30 transition-all duration-300"
                  }
                />

                <button
                  type="button"
                  onClick={() => scrollToPosition("middle")}
                  className={
                    activeIndicator === "middle"
                      ? "h-1.5 w-6 rounded-full bg-[#466743] transition-all duration-300"
                      : "h-1.5 w-1.5 rounded-full bg-[#466743]/30 transition-all duration-300"
                  }
                />

                <button
                  type="button"
                  onClick={() => scrollToPosition("end")}
                  className={
                    activeIndicator === "end"
                      ? "h-1.5 w-6 rounded-full bg-[#466743] transition-all duration-300"
                      : "h-1.5 w-1.5 rounded-full bg-[#466743]/30 transition-all duration-300"
                  }
                />
              </div>
            </div>

            <ResumeSectionOptimizer
              section={selectedSection}
              onApplySuggestionAction={handleApplySuggestion}
            />

            <OptimizerInsights />
          </section>
        </main>

        <OptimizerActionBar progress={progress} />

        <BottomNavigation />

        <AppSidebar
          open={sidebarOpen}
          onCloseAction={() => setSidebarOpen(false)}
        />
      </div>
    </MobileScreen>
  );
}