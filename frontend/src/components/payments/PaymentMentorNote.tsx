import { Quote } from "lucide-react";

export default function PaymentMentorNote() {
  return (
    <section className="mx-auto max-w-2xl">
      <div className="relative overflow-hidden rounded-t-[3rem] rounded-b-lg bg-[#fde7d3] p-6 sm:p-8">
        <Quote
          className="absolute right-4 top-4 h-24 w-24 text-[#635445]/10"
          strokeWidth={1.2}
        />

        <div className="relative z-10">
          <div className="mb-4 flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
              alt="Mentor"
              className="h-10 w-10 rounded-full border-2 border-white object-cover"
            />

            <div>
              <h4 className="text-[14px] font-bold text-[#635445]">
                Mentor&apos;s Note
              </h4>

              <p className="text-[12px] text-[#6d5e4f]">
                Account Transparency
              </p>
            </div>
          </div>

          <p className="text-[14px] italic leading-7 text-[#635445]">
            “Investing in your career journey is one of the most powerful steps
            you can take. We value your trust and keep your billing transparent,
            secure, and easy to understand.”
          </p>
        </div>
      </div>
    </section>
  );
}