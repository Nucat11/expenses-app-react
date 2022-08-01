import "./ExpenseItem.scss"
import ExpenseDate from "./ExpenseDate/ExpenseDate"

export default function ExpenseItem({
  expenseDate,
  expenseTitle,
  expenseAmount,
  removeExpense,
  expenseId,
}) {
  const clickHandler = () => {
    removeExpense(expenseId)
  }

  return (
    <div className='expense-item container'>
      <div className='expense-item__date-title'>
        <ExpenseDate expenseDate={expenseDate} />
        <span className='expense-item__title text--title text-color--secondary'>
          {expenseTitle}
        </span>
      </div>
      <span className='expense-item__price text--title text-color--secondary'>
        ${expenseAmount}
      </span>
      <div>
        <button onClick={clickHandler} className='text-color--secondary'>
          Remove
        </button>
        <button>Edit</button>
      </div>
    </div>
  )
}
