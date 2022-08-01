import "./Expenses.scss"
import ExpenseItem from "../Expenses/ExpenseItem/ExpenseItem"
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter"
import ExpenseChart from "./ExpenseChart/ExpenseChart"
import { useContext, useState } from "react"
import ExpenseContext from "../../context/expenseContext"

export default function Expenses() {
  const [chosenYear, setChosenYear] = useState("")
  const ctx = useContext(ExpenseContext)


  const changeYearFilter = (selectedYear) => {
    setChosenYear(selectedYear)
  }

  const filteredArr = ctx.expenses.filter((e) => {
    const date = new Date(e.date)
    const year = date.getFullYear()
    if (chosenYear) {
      return year.toString() === chosenYear
    } else {
      return true
    }
  })

  const expensesYears = ctx.expenses.map((e) => {
    const date = new Date(e.date)
    return date.getFullYear()
  })

  const uniqueYears = [...new Set(expensesYears)].sort()


  return (
    <div className='container expenses'>
      <ExpenseFilter
        onDataChange={changeYearFilter}
        expensesYears={uniqueYears}
      />
      <ExpenseChart filteredArr={filteredArr} />
      {filteredArr.length !== 0 ? (
        filteredArr.map(({ date, title, amount, id }) => (
          <ExpenseItem
            expenseDate={date}
            expenseTitle={title}
            expenseAmount={amount}
            key={id}
            expenseId={id}
          />
        ))
      ) : (
        <p className='text-primary text-color--secondary'>
          Nothing found! Add new expense to see it here.
        </p>
      )}
    </div>
  )
}
