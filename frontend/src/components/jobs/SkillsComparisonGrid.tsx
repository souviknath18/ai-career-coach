import { CheckCircle2, CircleAlert } from "lucide-react";

const matchingSkills = [
  "Strategic Project Management",
  "Python & Django Framework",
  "Cross-functional Leadership",
  "Agile Methodologies",
];

const growthAreas = [
  "Kubernetes Orchestration",
  "AWS Security Specialist Cert",
  "Advanced Data Visualization",
];

export default function SkillsComparisonGrid() {
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-1">
      <div className="rounded-[2rem] bg-[#c6edbf]/30 p-6">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c6edbf] text-[#466743]">
            <CheckCircle2 size={21} strokeWidth={1.8} />
          </div>

          <h3 className="text-[18px] font-bold text-[#395937]">
            Matching Skills
          </h3>
        </div>

        <ul className="space-y-3">
          {matchingSkills.map((skill) => (
            <li
              key={skill}
              className="flex items-center gap-3 text-[14px] font-medium leading-6 text-[#395937]"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#466743]" />
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-[2rem] bg-[#fde7d3]/40 p-6">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fde7d3] text-[#6c5c4d]">
            <CircleAlert size={21} strokeWidth={1.8} />
          </div>

          <h3 className="text-[18px] font-bold text-[#635445]">
            Growth Areas
          </h3>
        </div>

        <ul className="space-y-3">
          {growthAreas.map((skill) => (
            <li
              key={skill}
              className="flex items-center gap-3 text-[14px] font-medium leading-6 text-[#635445]/80"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#6c5c4d]" />
              {skill}
            </li>
          ))}
        </ul>

        <button className="mt-5 text-[12px] font-bold text-[#6c5c4d] underline decoration-[#6c5c4d]/30 underline-offset-4 transition-all hover:decoration-[#6c5c4d]">
          Generate learning path for these gaps
        </button>
      </div>
    </section>
  );
}