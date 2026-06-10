type OnboardingDotsProps = {
  total: number;
  activeStep: number;
};

export default function OnboardingDots({
  total,
  activeStep,
}: OnboardingDotsProps) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={
            activeStep === index
              ? "h-1.5 w-7 rounded-full bg-[#466743] transition-all"
              : "h-1.5 w-1.5 rounded-full bg-[#b2b2ad] transition-all"
          }
        />
      ))}
    </div>
  );
}