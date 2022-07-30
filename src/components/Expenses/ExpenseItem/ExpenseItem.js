import "./ExpenseItem.scss"
import ExpenseDate from "./ExpenseDate/ExpenseDate"

export default function ExpenseItem({
  expenseDate,
  expenseTitle,
  expenseAmount,
}) {
  return (
    <div className='expense-item'>
      <ExpenseDate expenseDate={expenseDate} />
      <span className='expense-item__title'>{expenseTitle}</span>
      <span className='expense-item__price'>${expenseAmount}</span>
    </div>
  )
}
