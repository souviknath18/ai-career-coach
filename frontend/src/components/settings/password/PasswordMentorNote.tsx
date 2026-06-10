import { Lightbulb } from "lucide-react";

export default function PasswordMentorNote() {
  return (
    <section className="mt-12 flex gap-5 rounded-[2rem] rounded-br-lg bg-[#fde7d3] p-6 sm:p-8">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#6c5c4d] shadow-sm">
        <Lightbulb size={22} strokeWidth={1.8} />
      </div>

      <div>
        <h4 className="mb-2 text-[18px] font-bold text-[#635445]">
          Mentor&apos;s Note
        </h4>

        <p className="text-[14px] italic leading-7 text-[#635445]/80">
          “In your career, integrity starts with how you protect your own
          digital space. A strong, unique password is a commitment to the
          security of your professional journey and the data that fuels your
          growth.”
        </p>
      </div>
    </section>
  );
}