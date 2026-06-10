import { ReactNode } from "react";

type SettingsSectionProps = {
  title: string;
  children: ReactNode;
};

export default function SettingsSection({
  title,
  children,
}: SettingsSectionProps) {
  return (
    <section>
      <h3 className="mb-4 ml-2 text-[12px] font-bold uppercase tracking-[0.15em] text-[#5e605b]">
        {title}
      </h3>

      <div className="overflow-hidden rounded-[2rem] bg-[#f5f4ef]">
        {children}
      </div>
    </section>
  );
}