import PricingCard from "./PricingCard";

export default function PricingGrid() {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-1">
      <PricingCard
        title="Basic"
        description="Foundational career support"
        price="$0"
        period="/month"
        buttonText="Current Plan"
        features={[
          "3 AI Resume Reviews / month",
          "Standard Community Access",
          "Daily Career Motivation",
        ]}
      />

      <PricingCard
        featured
        title="Premium"
        description="Full access to your AI mentor"
        price="$19"
        period="/month"
        buttonText="Upgrade Now"
        helperText="Cancel anytime. No hidden fees."
        features={[
          "Unlimited AI Resume Analysis",
          "24/7 Priority Chat Coach",
          "Advanced Mock Interviews",
          "Exclusive Job Matches",
        ]}
      />
    </section>
  );
}