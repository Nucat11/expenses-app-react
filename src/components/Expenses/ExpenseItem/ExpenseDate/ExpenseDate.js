import "./ExpenseDate.scss";

export default function ExpenseDate({expenseDate}) {
    const month = expenseDate.toLocaleString("en-US", { month: "long" });
    const day = expenseDate.toLocaleString("en-US", { month: "2-digit" });
    const year = expenseDate.getFullYear();
  return (
    <div className="expense-date__container">
      <span>{month}</span>
      <span>{year}</span>
      <span>{day}</span>
    </div>
  );
}
