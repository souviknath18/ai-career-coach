import { Brain, Quote } from "lucide-react";

export default function SubscriptionTestimonial() {
  return (
    <section className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-1">
      <div className="rounded-[2rem] bg-[#fde7d3]/35 p-6 md:col-span-2 sm:p-8 xl:col-span-1">
        <Quote className="mb-4 text-[#6c5c4d]" size={28} strokeWidth={1.8} />

        <p className="mb-6 text-[18px] italic leading-8 text-[#635445]">
          “The Premium mock interviews felt incredibly real. I landed my dream
          role at a top tech firm within three weeks of upgrading.”
        </p>

        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop"
            alt="Sarah Chen"
            className="h-12 w-12 rounded-full object-cover"
          />

          <div>
            <p className="text-[14px] font-bold text-[#31332f]">
              Sarah Chen
            </p>

            <p className="text-[12px] text-[#5e605b]">
              Senior Product Designer
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center rounded-[2rem] bg-[#efeee9] p-8 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#466743]/10 text-[#466743]">
          <Brain size={31} strokeWidth={1.8} />
        </div>

        <h4 className="mb-2 text-[18px] font-bold text-[#31332f]">
          98% Success Rate
        </h4>

        <p className="text-[14px] leading-6 text-[#5e605b]">
          Users report higher confidence in interviews after 5 sessions.
        </p>
      </div>
    </section>
  );
}