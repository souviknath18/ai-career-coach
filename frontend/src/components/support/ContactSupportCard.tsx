import { Mail, MessageCircle } from "lucide-react";

export default function ContactSupportCard() {
  return (
    <section className="mt-16 rounded-[2rem] border border-[#b2b2ad]/10 bg-[#e9e8e3] p-6 text-center shadow-[0_48px_48px_rgba(49,51,47,0.04)] sm:p-8">
      <h3 className="text-[24px] font-extrabold tracking-tight text-[#31332f]">
        Still need help?
      </h3>

      <p className="mx-auto mt-2 max-w-sm text-[14px] leading-7 text-[#5e605b]">
        Our human support team is available Monday through Friday to keep your
        career journey on track.
      </p>

      <div className="mt-7 flex flex-col gap-3">
        <button className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#466743] to-[#3a5b38] px-6 py-4 text-[14px] font-bold text-white shadow-lg shadow-[#466743]/10 transition-all active:scale-95">
          <MessageCircle size={18} strokeWidth={1.8} />
          Send us a message
        </button>

        <button className="flex w-full items-center justify-center gap-2 rounded-full border border-[#b2b2ad]/30 bg-white px-6 py-4 text-[14px] font-bold text-[#466743] transition-all hover:bg-[#f5f4ef] active:scale-95">
          <Mail size={18} strokeWidth={1.8} />
          Email Support
        </button>
      </div>
    </section>
  );
}