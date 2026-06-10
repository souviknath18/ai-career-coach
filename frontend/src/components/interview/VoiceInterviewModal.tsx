"use client";

import {
  Mic,
  Brain,
  X,
  StopCircle,
} from "lucide-react";

type Props = {
  onCloseAction: () => void;
};

export default function VoiceInterviewModal({
  onCloseAction,
}: Props) {
  return (
    <div className="absolute inset-0 z-[200] bg-[#fbf9f5]">
      {/* Header */}
      <div className="flex h-16 items-center justify-between border-b border-[#e9e8e3] px-5">
        <h2 className="text-[18px] font-bold text-[#31332f]">
          AI Interview Coach
        </h2>

        <button onClick={onCloseAction}>
          <X size={22} />
        </button>
      </div>

      {/* Body */}
      <div className="flex h-[calc(100vh-64px)] flex-col justify-between px-6 py-8">
        {/* Timer */}
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-widest text-[#5e605b]">
            Session Active
          </p>

          <h1 className="mt-2 text-5xl font-bold text-[#31332f]">
            00:45
          </h1>
        </div>

        {/* Waveform */}
        <div className="flex flex-col items-center">
          <div className="mb-10 flex h-24 items-end gap-1">
            {[45, 80, 30, 90, 50, 70, 35, 85, 55, 40].map(
              (height, index) => (
                <div
                  key={index}
                  className="w-1 rounded-full bg-[#466743]"
                  style={{
                    height: `${height}px`,
                  }}
                />
              )
            )}
          </div>

          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-[#466743]/20" />

            <button className="relative flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-[#466743] to-[#3a5b38] text-[#eaffe3] shadow-[0_20px_60px_rgba(70,103,67,0.25)]">
              <Mic size={70} />
            </button>
          </div>

          <p className="mt-10 max-w-[300px] text-center text-[15px] italic text-[#5e605b]">
            "Tell me about a time you handled a difficult stakeholder."
          </p>
        </div>

        {/* Bottom */}
        <div>
          <div className="rounded-[2rem] bg-[#fde7d3] p-5">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70">
                <Brain
                  size={20}
                  className="text-[#635445]"
                />
              </div>

              <h3 className="font-semibold text-[#504234]">
                Mentor's Note
              </h3>
            </div>

            <p className="text-[14px] leading-6 text-[#635445]">
              Speak clearly and take your time.
              The AI is listening to provide
              the best feedback.
            </p>
          </div>

          <button
            onClick={onCloseAction}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-[#fd795a]/20 py-4 font-semibold text-[#a73b21]"
          >
            <StopCircle size={18} />
            End Session
          </button>
        </div>
      </div>
    </div>
  );
}