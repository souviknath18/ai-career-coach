"use client";

import { useState } from "react";
import MobileScreen from "@/components/layout/MobileScreen";
import Topbar from "@/components/layout/Topbar";
import BottomNavigation from "@/components/layout/BottomNavigation";
import AppSidebar from "@/components/layout/AppSidebar";
import ChatDateBadge from "@/components/chat/ChatDateBadge";
import AIMessage from "@/components/chat/AIMessage";
import UserMessage from "@/components/chat/UserMessage";
import InsightMessageCard from "@/components/chat/InsightMessageCard";
import ReflectionMessage from "@/components/chat/ReflectionMessage";
import TypingIndicator from "@/components/chat/TypingIndicator";
import ChatInputBar from "@/components/chat/ChatInputBar";

export default function AIChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <MobileScreen>
      <div className="relative h-screen overflow-hidden bg-[#fbf9f5]">
        <Topbar
          title="AI Career Coach"
          onLeftClick={() => setSidebarOpen(true)}
          rightContent={
            <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-[0_6px_18px_rgba(49,51,47,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
                alt="User avatar"
                className="h-full w-full object-cover"
              />
            </div>
          }
        />

        <main className="mobile-scrollbar h-screen overflow-y-auto overflow-x-hidden px-5 pb-44 pt-24 md:px-10 xl:px-5">
          <section className="space-y-8 md:mx-auto md:max-w-[720px] xl:mx-0 xl:max-w-none">
            <ChatDateBadge />

            <AIMessage
              message="Hello! I've been reviewing your recent project milestones. It seems you're excelling at cross-functional communication. How would you like to leverage this for your next career move?"
              time="9:41 AM • AI Mentor"
            />

            <UserMessage
              message="I'm thinking about transitioning into a Senior Product Manager role. I enjoy the strategy but want to maintain that human connection I have with the engineering team."
              time="9:42 AM • Delivered"
            />

            <InsightMessageCard />

            <ReflectionMessage />

            <TypingIndicator />
          </section>
        </main>

        <ChatInputBar />

        <BottomNavigation />

        <AppSidebar
          open={sidebarOpen}
          onCloseAction={() => setSidebarOpen(false)}
        />
      </div>
    </MobileScreen>
  );
}