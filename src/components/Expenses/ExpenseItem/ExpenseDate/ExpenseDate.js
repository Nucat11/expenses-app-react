import "./ExpenseDate.scss"
import "./Calendar"
import Calendar from "./Calendar"

export default function ExpenseDate({ expenseDate }) {
  const date = new Date(expenseDate)
  const month = date.toLocaleString("en-US", { month: "short" })
  const day = date.toLocaleString("en-US", { month: "2-digit" })
  const year = date.getFullYear()
  return (
    <div className='expense-date__container'>
      <Calendar />
      <div className="expense-date__upper-calendar text--calendar-month-year text-color--primary">
        <span>{month}</span>
        <span>{year}</span>
      </div>
      <span className="expense-date__day text--calendar-day text-color--primary">{day}</span>
    </div>
  )
}
