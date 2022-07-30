import "./ExpenseDate.scss";

export default function ExpenseDate({expenseDate}) {
    const date = new Date(expenseDate)
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.toLocaleString("en-US", { month: "2-digit" });
    const year = date.getFullYear();
  return (
    <div className="expense-date__container">
      <span>{month}</span>
      <span>{year}</span>
      <span>{day}</span>
    </div>
  );
}
