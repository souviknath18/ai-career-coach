import { Lightbulb } from "lucide-react";

export default function EditProfileMentorNote() {
  return (
    <div className="mt-16 flex gap-5 rounded-[2rem] bg-[#fde7d3] p-6 sm:p-8">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#6c5c4d] shadow-sm">
        <Lightbulb size={22} strokeWidth={1.8} />
      </div>

      <div>
        <h3 className="mb-1 text-[18px] font-bold text-[#635445]">
          Mentor&apos;s Note
        </h3>

        <p className="text-[14px] leading-7 text-[#635445]/80">
          Updating your profile helps Sage &amp; Solace tailor coaching advice,
          resume feedback, job matches, and interview preparation to your
          current career goals.
        </p>
      </div>
    </div>
  );
}