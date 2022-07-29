import "./ExpenseItem.scss"
import ExpenseDate from "./ExpenseDate/ExpenseDate"
import { useState } from "react"
export default function ExpenseItem({
  expenseDate,
  expenseTitle,
  expenseAmount,
}) {
  const [title, setTitle] = useState(expenseTitle)
  const clickHandler = (e) => {
    e.preventDefault()
    setTitle("Updated")
  }
  return (
    <div className='expense-item'>
      <ExpenseDate expenseDate={expenseDate} />
      <span className='expense-item__title'>{title}</span>
      <span className='expense-item__price'>${expenseAmount}</span>
      <button onClick={clickHandler}>Change title</button>
    </div>
  )
}
