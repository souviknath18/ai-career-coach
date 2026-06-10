import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  FileText,
  Video,
} from "lucide-react";

const features = [
  {
    title: "Resume Analyzer",
    description: "Get instant AI feedback on your resume keywords and formatting.",
    icon: FileText,
    href: "/resume-analysis",
    bg: "bg-[#c6edbf]/30",
    iconColor: "text-[#3a5b38]",
    textColor: "text-[#395937]",
  },
  {
    title: "Job Match",
    description: "Discover roles tailored to your unique skill set and career goals.",
    icon: BriefcaseBusiness,
    href: "/job-matching",
    bg: "bg-[#fde7d3]/45",
    iconColor: "text-[#6c5c4d]",
    textColor: "text-[#635445]",
  },
  {
    title: "AI Chat Coach",
    description: "24/7 career advice, salary negotiation tips, and networking help.",
    icon: Bot,
    href: "/ai-chat",
    bg: "bg-[#d4e4f6]/45",
    iconColor: "text-[#516170]",
    textColor: "text-[#445362]",
  },
  {
    title: "Mock Interview",
    description: "Practice your pitch with real-time feedback on tone and confidence.",
    icon: Video,
    href: "/mock-interview",
    bg: "bg-[#fd795a]/15",
    iconColor: "text-[#a73b21]",
    textColor: "text-[#6e1400]",
  },
];

export default function DashboardFeatureGrid() {
  return (
    <section className="grid grid-cols-1 gap-4">
      {features.map((feature) => {
        const Icon = feature.icon;

        return (
          <Link
            key={feature.title}
            href={feature.href}
            className={`group relative flex min-h-[180px] flex-col justify-between overflow-hidden rounded-[1.75rem] p-5 transition-all active:scale-[0.98] ${feature.bg}`}
          >
            <div className="relative z-10">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/80 shadow-[0_20px_30px_rgba(49,51,47,0.04)]">
                <Icon
                  className={feature.iconColor}
                  size={21}
                  strokeWidth={1.8}
                />
              </div>

              <h4
                className={`text-[20px] font-bold leading-7 ${feature.textColor}`}
              >
                {feature.title}
              </h4>

              <p
                className={`mt-2 max-w-[220px] text-[14px] leading-6 ${feature.textColor}/80`}
              >
                {feature.description}
              </p>
            </div>

            <div className="relative z-10 flex justify-end">
              <ArrowRight
                className={`transition-transform duration-300 group-hover:translate-x-1 ${feature.iconColor}`}
                size={20}
                strokeWidth={2}
              />
            </div>

            <Icon
              className="absolute -bottom-6 -right-6 h-24 w-24 opacity-[0.08]"
              strokeWidth={1.2}
            />
          </Link>
        );
      })}
    </section>
  );
}