import "./Expenses.scss";
import ExpenseItem from "../Expenses/ExpenseItem/ExpenseItem";


export default function Expenses({ expenses }) {
  return (
    <div>
      {expenses.map(({ date, title, price, id }) => (
        <ExpenseItem
          expenseDate={date}
          expenseTitle={title}
          expenseAmount={price}
          key={id}
        />
      ))}
    </div>
  );
}
