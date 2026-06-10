import { CheckCircle2, Lightbulb, TriangleAlert } from "lucide-react";
import AnalysisInsightCard from "./AnalysisInsightCard";

export default function AnalysisBentoGrid() {
  return (
    <section className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-1">
      <AnalysisInsightCard
        title="Strengths"
        icon={CheckCircle2}
        variant="success"
        items={[
          "Strong technical skill section highlighting modern tech stacks.",
          "Clear career progression with increasing responsibilities.",
          "Professional formatting that is highly ATS-readable.",
        ]}
      />

      <AnalysisInsightCard
        title="Critical Gaps"
        icon={TriangleAlert}
        variant="error"
        items={[
          "Missing quantifiable achievements such as percentages or business impact.",
          "Lack of modern keywords related to cloud orchestration.",
          "Summary section feels slightly generic and long.",
        ]}
      />

      <div className="md:col-span-2 xl:col-span-1">
        <AnalysisInsightCard
          title="Strategic Suggestions"
          icon={Lightbulb}
          variant="warning"
          items={[
            'Use more action verbs like "Spearheaded" or "Architected".',
            "Add a portfolio link or GitHub profile in the header.",
            "Consider a 2-column layout for the skills section to save space.",
            "Focus more on the last 5 years of experience.",
          ]}
        />
      </div>
    </section>
  );
}