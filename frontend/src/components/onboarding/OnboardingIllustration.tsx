import {
  Bot,
  CheckCircle,
  FileText,
  Lightbulb,
  Mic,
  Sparkles,
  Volume2,
} from "lucide-react";

type OnboardingIllustrationProps = {
  type: string;
};

export default function OnboardingIllustration({
  type,
}: OnboardingIllustrationProps) {
  if (type === "resume") {
    return (
      <div className="relative mx-auto flex aspect-square w-full max-w-[320px] items-center justify-center">
        <div className="absolute h-4/5 w-4/5 -rotate-6 rounded-[2rem] bg-[#e9e8e3] shadow-sm" />

        <div className="relative z-10 flex h-[90%] w-4/5 flex-col rounded-2xl border border-[#b2b2ad]/10 bg-white p-6 shadow-lg">
          <div className="mb-6 h-4 w-1/2 rounded-full bg-[#efeee9]" />

          <div className="space-y-3">
            <div className="h-2 w-full rounded-full bg-[#efeee9]" />
            <div className="h-2 w-full rounded-full bg-[#efeee9]" />
            <div className="h-2 w-3/4 rounded-full bg-[#efeee9]" />
          </div>

          <div className="mt-8 space-y-3">
            <div className="h-3 w-1/3 rounded-full bg-[#466743]/20" />
            <div className="h-2 w-full rounded-full bg-[#efeee9]" />
            <div className="h-2 w-full rounded-full bg-[#efeee9]" />
          </div>

          <div className="absolute inset-x-0 top-1/2 h-1 bg-gradient-to-r from-transparent via-[#466743] to-transparent opacity-60" />
          <div className="absolute inset-x-0 top-[48%] h-8 bg-gradient-to-b from-[#466743]/10 to-transparent" />
        </div>

        <div className="absolute -right-1 -top-2 z-20 flex items-center gap-2 rounded-2xl bg-[#fde7d3] px-4 py-3 text-[#635445] shadow-sm">
          <Sparkles size={18} strokeWidth={1.8} />
          <span className="text-[11px] font-bold tracking-wide">
            AI SCANNING
          </span>
        </div>
      </div>
    );
  }

  if (type === "coach") {
    return (
      <div className="relative mx-auto flex aspect-square w-full max-w-[320px] items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-[#c6edbf]/20 blur-3xl" />

        <div className="relative z-10 w-full rounded-[3rem] bg-white/80 p-8 shadow-[0_48px_48px_rgba(49,51,47,0.04)] backdrop-blur-sm">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#fde7d3] text-[#6c5c4d]">
            <Bot size={52} strokeWidth={1.8} />
          </div>

          <div className="absolute -right-3 -top-3 flex items-center gap-3 rounded-2xl border border-white/40 bg-[#fbf9f5]/80 p-4 shadow-sm backdrop-blur-xl">
            <Lightbulb size={18} className="text-[#466743]" />

            <div className="space-y-1">
              <div className="h-2 w-16 rounded-full bg-[#b2b2ad]/30" />
              <div className="h-2 w-10 rounded-full bg-[#b2b2ad]/20" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-start">
              <div className="rounded-full rounded-bl-sm bg-[#e9e8e3] px-4 py-2 text-[13px] font-medium text-[#5e605b]">
                How do I negotiate salary?
              </div>
            </div>

            <div className="flex justify-end">
              <div className="rounded-full rounded-br-sm bg-gradient-to-br from-[#466743] to-[#3a5b38] px-4 py-2 text-[13px] font-medium text-[#eaffe3] shadow-sm">
                I can help with that.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[320px] items-center justify-center">
      <div className="absolute right-4 top-0 h-48 w-48 rounded-full bg-[#c6edbf]/30 blur-3xl" />
      <div className="absolute bottom-8 left-0 h-32 w-32 rounded-full bg-[#fde7d3]/40 blur-2xl" />

      <div className="relative z-10 flex flex-col items-center rounded-[3rem] bg-white/70 p-8 shadow-[0_48px_48px_rgba(49,51,47,0.04)] backdrop-blur-sm">
        <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-[#466743]/10">
          <Mic size={58} className="text-[#466743]" strokeWidth={1.8} />
        </div>

        <div className="absolute -right-4 -top-4 flex items-center gap-2 rounded-full bg-[#e3e3dc] px-4 py-2 shadow-sm">
          <CheckCircle size={15} className="text-[#466743]" />
          <span className="text-[12px] font-semibold text-[#466743]">
            Tone: Confident
          </span>
        </div>

        <div className="absolute -left-6 bottom-12 flex items-center gap-2 rounded-full bg-[#fde7d3] px-4 py-2 shadow-sm">
          <Volume2 size={15} className="text-[#6c5c4d]" />
          <span className="text-[12px] font-semibold text-[#6c5c4d]">
            Real-time Analysis
          </span>
        </div>

        <div className="absolute -bottom-4 right-0 flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-[#fbf9f5] bg-[#d4e4f6] shadow-xl">
          <FileText size={38} className="text-[#516170]" strokeWidth={1.8} />
        </div>
      </div>
    </div>
  );
}