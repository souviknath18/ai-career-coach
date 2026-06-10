import {
  CircleUserRound,
  FileText,
  Brain,
  Settings2,
} from "lucide-react";
import SupportFAQItem from "./SupportFAQItem";

export default function SupportFAQList() {
  return (
    <section className="space-y-4">
      <SupportFAQItem
        title="Account & Subscription"
        icon={CircleUserRound}
        items={[
          "You can update your billing cycle anytime through Profile settings.",
          "All subscriptions include a 7-day trial of advanced AI mentorship features.",
          "Cancellations take effect at the end of your current billing period.",
        ]}
      />

      <SupportFAQItem
        title="Resume Analysis"
        icon={FileText}
        description="Our AI evaluates your resume against industry-specific keywords and layout standards."
        items={[
          "Supported formats: PDF, DOCX, and Text files.",
          "Analysis usually takes around 15-30 seconds.",
        ]}
      />

      <SupportFAQItem
        title="Career Coaching"
        icon={Brain}
        description="We use your onboarding profile and interaction history to curate a personalized career roadmap."
        highlightQuestion="How does the AI mentor learn about my goals?"
      />

      <SupportFAQItem
        title="Technical Support"
        icon={Settings2}
        description="If you are experiencing sync issues between devices, make sure you are on the latest app version and have a stable internet connection."
      />
    </section>
  );
}