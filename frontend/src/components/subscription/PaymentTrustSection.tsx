import { CreditCard, Landmark, ShieldCheck, WalletCards } from "lucide-react";

const items = [
  { label: "VISA", icon: CreditCard },
  { label: "MASTERCARD", icon: WalletCards },
  { label: "PAY", icon: Landmark },
  { label: "STRIPE", icon: ShieldCheck },
];

export default function PaymentTrustSection() {
  return (
    <section className="mt-16 text-center">
      <p className="mb-7 text-[14px] font-medium text-[#5e605b]">
        Secure Payment Guaranteed
      </p>

      <div className="flex flex-wrap items-center justify-center gap-6 opacity-60">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.label} className="flex items-center gap-2">
              <Icon size={22} strokeWidth={1.8} />

              <span className="text-[12px] font-bold tracking-tight text-[#31332f]">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}