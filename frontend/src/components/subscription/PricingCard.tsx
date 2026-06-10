import { CheckCircle2, BadgeCheck } from "lucide-react";

type PricingCardProps = {
  title: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  helperText?: string;
  featured?: boolean;
};

export default function PricingCard({
  title,
  description,
  price,
  period,
  features,
  buttonText,
  helperText,
  featured = false,
}: PricingCardProps) {
  return (
    <div
      className={
        featured
          ? "relative flex h-full flex-col rounded-[2rem] border-2 border-[#466743]/10 bg-white p-6 shadow-[0_4px_48px_rgba(49,51,47,0.06)] sm:p-8"
          : "flex h-full flex-col rounded-[2rem] bg-[#f5f4ef] p-6 sm:p-8"
      }
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#fde7d3] px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-[#635445]">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              className={
                featured
                  ? "mb-1 text-[24px] font-bold text-[#31332f]"
                  : "mb-1 text-[21px] font-bold text-[#31332f]"
              }
            >
              {title}
            </h3>

            <p className="mb-6 text-[14px] text-[#5e605b]">
              {description}
            </p>
          </div>

          {featured && (
            <BadgeCheck
              size={31}
              strokeWidth={1.8}
              className="text-[#466743]"
            />
          )}
        </div>

        <div className="flex items-baseline gap-1">
          <span
            className={
              featured
                ? "text-[42px] font-extrabold leading-none text-[#31332f]"
                : "text-[34px] font-extrabold leading-none text-[#31332f]"
            }
          >
            {price}
          </span>

          <span className="text-[14px] text-[#5e605b]">{period}</span>
        </div>
      </div>

      <div className="mb-10 flex-grow space-y-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <CheckCircle2
              size={featured ? 20 : 18}
              strokeWidth={1.8}
              className={featured ? "text-[#466743]" : "text-[#7a7b76]"}
            />

            <span
              className={
                featured
                  ? "text-[14px] font-semibold leading-6 text-[#31332f]"
                  : "text-[14px] leading-6 text-[#5e605b]"
              }
            >
              {feature}
            </span>
          </div>
        ))}
      </div>

      <button
        className={
          featured
            ? "w-full rounded-full bg-gradient-to-br from-[#466743] to-[#3a5b38] py-4 text-[15px] font-bold text-[#eaffe3] shadow-lg shadow-[#466743]/20 transition-all active:scale-95"
            : "w-full rounded-full border border-[#b2b2ad]/20 py-4 text-[15px] font-semibold text-[#466743] transition-all hover:bg-[#e3e3dc] active:scale-95"
        }
      >
        {buttonText}
      </button>

      {helperText && (
        <p className="mt-4 text-center text-[11px] text-[#5e605b]">
          {helperText}
        </p>
      )}
    </div>
  );
}