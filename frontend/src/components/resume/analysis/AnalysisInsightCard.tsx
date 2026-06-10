import { LucideIcon } from "lucide-react";

type AnalysisInsightCardProps = {
  title: string;
  icon: LucideIcon;
  items: string[];
  variant: "success" | "error" | "warning";
};

const styles = {
  success: {
    card: "bg-white",
    iconWrap: "bg-[#c6edbf]/30",
    icon: "text-[#466743]",
    dot: "bg-[#466743]",
    title: "text-[#31332f]",
    text: "text-[#5e605b]",
  },
  error: {
    card: "bg-white",
    iconWrap: "bg-[#fd795a]/10",
    icon: "text-[#a73b21]",
    dot: "bg-[#a73b21]",
    title: "text-[#31332f]",
    text: "text-[#5e605b]",
  },
  warning: {
    card: "bg-[#fde7d3]",
    iconWrap: "bg-white",
    icon: "text-[#6c5c4d]",
    dot: "bg-[#6c5c4d]",
    title: "text-[#635445]",
    text: "text-[#635445]",
  },
};

export default function AnalysisInsightCard({
  title,
  icon: Icon,
  items,
  variant,
}: AnalysisInsightCardProps) {
  const style = styles[variant];

  return (
    <div
      className={`rounded-[2rem] p-5 shadow-[0_4px_24px_rgba(49,51,47,0.02)] ${style.card}`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ${style.iconWrap}`}
        >
          <Icon className={style.icon} size={21} strokeWidth={1.8} />
        </div>

        <h3 className={`text-[18px] font-bold ${style.title}`}>{title}</h3>
      </div>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span
              className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${style.dot}`}
            />

            <span className={`text-[14px] font-medium leading-6 ${style.text}`}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}