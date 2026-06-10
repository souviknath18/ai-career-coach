import { MessageCircleQuestion } from "lucide-react";

export default function InterviewQuestionCard() {
  return (
    <section className="rounded-[2rem] border-l-4 border-[#466743] bg-[#c6edbf]/30 p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#466743] text-[#eaffe3]">
          <MessageCircleQuestion size={23} strokeWidth={1.8} />
        </div>

        <div>
          <span className="mb-1 block text-[14px] font-semibold text-[#466743]">
            Interview Question
          </span>

          <h2 className="text-[20px] font-bold leading-7 text-[#31332f]">
            How do you handle conflict in a professional setting?
          </h2>
        </div>
      </div>
    </section>
  );
}