import "./ExpenseItem.scss";

export default function ExpenseItem({
  expenseDate,
  expenseTitle,
  expenseAmount,
}) {
  const month = expenseDate.toLocaleString("en-US", { month: "long" });
  const day = expenseDate.toLocaleString("en-US", { month: "2-digit" });
  const year = expenseDate.getFullYear();

  return (
    <div className="expense-item">
      <div className="expense-item__date-container">
        <span>{month}</span>
        <span>{year}</span>
        <span>{day}</span>
      </div>
      <span className="expense-item__title">{expenseTitle}</span>
      <span className="expense-item__price">${expenseAmount}</span>
    </div>
  );
}
