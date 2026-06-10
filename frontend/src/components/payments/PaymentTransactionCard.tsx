import { CalendarDays, CircleAlert, ReceiptText } from "lucide-react";

type PaymentTransactionCardProps = {
  amount: string;
  title: string;
  date: string;
  status: "Successful" | "Failed";
};

export default function PaymentTransactionCard({
  amount,
  title,
  date,
  status,
}: PaymentTransactionCardProps) {
  const isSuccess = status === "Successful";

  return (
    <div className="rounded-[2rem] bg-[#f5f4ef] p-6 transition-all hover:bg-[#e9e8e3]">
      <div className="mb-4 flex items-start justify-between">
        <div
          className={
            isSuccess
              ? "flex h-12 w-12 items-center justify-center rounded-full bg-[#c6edbf] text-[#395937]"
              : "flex h-12 w-12 items-center justify-center rounded-full bg-[#fd795a]/20 text-[#a73b21]"
          }
        >
          {isSuccess ? (
            <ReceiptText size={22} strokeWidth={1.8} />
          ) : (
            <CircleAlert size={22} strokeWidth={1.8} />
          )}
        </div>

        <span
          className={
            isSuccess
              ? "rounded-full bg-[#466743]/10 px-3 py-1 text-[12px] font-semibold text-[#466743]"
              : "rounded-full bg-[#a73b21]/10 px-3 py-1 text-[12px] font-semibold text-[#a73b21]"
          }
        >
          {status}
        </span>
      </div>

      <h3 className="mb-1 text-[21px] font-bold text-[#31332f]">
        {amount}
      </h3>

      <p className="mb-4 text-[14px] text-[#5e605b]">{title}</p>

      <div className="flex items-center gap-2 text-[12px] font-medium text-[#5e605b]">
        <CalendarDays size={15} strokeWidth={1.8} />
        {date}
      </div>
    </div>
  );
}