import { ReactNode } from "react";

type MobileScreenProps = {
  children: ReactNode;
};

export default function MobileScreen({ children }: MobileScreenProps) {
  return (
    <main className="fixed inset-0 flex justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-emerald-50 to-sky-100">
      <div className="pointer-events-none fixed left-10 top-10 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="pointer-events-none fixed bottom-10 right-10 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />

      <section className="relative h-screen w-full overflow-hidden bg-[#fbf9f5] shadow-[0_25px_80px_rgba(0,0,0,0.16)] sm:max-w-[520px] md:max-w-full xl:max-w-[430px]">
        {children}
      </section>
    </main>
  );
}