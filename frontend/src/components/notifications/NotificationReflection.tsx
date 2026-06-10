export default function NotificationReflection() {
  return (
    <section className="mt-10">
      <div className="rounded-t-[3rem] rounded-b-lg bg-[#e9e8e3] p-6 shadow-sm">
        <label className="mb-4 block text-[18px] font-bold text-[#31332f]">
          Daily Reflection
        </label>

        <textarea
          placeholder="What did you learn from today's updates?"
          className="mobile-scrollbar min-h-[120px] w-full resize-none rounded-[2rem] border-none bg-white p-4 text-[14px] italic leading-7 text-[#5e605b] outline-none placeholder:text-[#b2b2ad] focus:ring-2 focus:ring-[#466743]/20"
        />
      </div>
    </section>
  );
}