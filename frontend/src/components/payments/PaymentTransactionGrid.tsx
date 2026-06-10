import PaymentTransactionCard from "./PaymentTransactionCard";

const transactions = [
  {
    amount: "$29.99",
    title: "Monthly Subscription",
    date: "Oct 15, 2025",
    status: "Successful" as const,
  },
  {
    amount: "$29.99",
    title: "Monthly Subscription",
    date: "Sep 15, 2025",
    status: "Failed" as const,
  },
  {
    amount: "$29.99",
    title: "Monthly Subscription",
    date: "Aug 15, 2025",
    status: "Successful" as const,
  },
  {
    amount: "$149.99",
    title: "Annual Strategy Pass",
    date: "Jul 10, 2025",
    status: "Successful" as const,
  },
];

export default function PaymentTransactionGrid() {
  return (
    <section className="mb-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-1">
      {transactions.map((transaction) => (
        <PaymentTransactionCard
          key={`${transaction.title}-${transaction.date}`}
          {...transaction}
        />
      ))}
    </section>
  );
}