import { LucideIcon, ChevronDown } from "lucide-react";

type SupportFAQItemProps = {
  title: string;
  icon: LucideIcon;
  description?: string;
  items?: string[];
  highlightQuestion?: string;
};

export default function SupportFAQItem({
  title,
  icon: Icon,
  description,
  items = [],
  highlightQuestion,
}: SupportFAQItemProps) {
  return (
    <details className="group overflow-hidden rounded-[2rem] border border-[#b2b2ad]/5 bg-[#f5f4ef] transition-all open:bg-white">
      <summary className="flex cursor-pointer list-none items-center justify-between p-5 sm:p-6">
        <div className="flex items-center gap-4">
          <Icon size={21} strokeWidth={1.8} className="text-[#466743]" />

          <h3 className="text-[17px] font-bold text-[#31332f]">
            {title}
          </h3>
        </div>

        <ChevronDown
          size={20}
          strokeWidth={1.8}
          className="text-[#5e605b] transition-transform group-open:rotate-180"
        />
      </summary>

      <div className="px-5 pb-6 pt-1 sm:px-6">
        {description && !highlightQuestion && (
          <p className="text-[14px] leading-7 text-[#5e605b]">
            {description}
          </p>
        )}

        {highlightQuestion && (
          <div className="rounded-[1.5rem] bg-[#efeee9] p-4">
            <p className="mb-2 text-[14px] font-semibold italic text-[#31332f]">
              “{highlightQuestion}”
            </p>

            <p className="text-[13px] leading-6 text-[#5e605b]">
              {description}
            </p>
          </div>
        )}

        {items.length > 0 && (
          <ul className="mt-4 space-y-3">
            {items.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[14px] leading-6 text-[#5e605b]"
              >
                <span className="mt-1 text-[#466743]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </details>
  );
}