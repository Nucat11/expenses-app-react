import "./Expenses.scss"
import ExpenseItem from "../Expenses/ExpenseItem/ExpenseItem"
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter"
import { useState } from "react"
import ExpenseChart from "./ExpenseChart/ExpenseChart"

export default function Expenses({ expenses, onRemove }) {
  const [chosenYear, setChosenYear] = useState("")

  const changeYearFilter = (selectedYear) => {
    setChosenYear(selectedYear)
  }

  const filteredArr = expenses.filter((e) => {
    const date = new Date(e.date)
    const year = date.getFullYear()
    if (chosenYear) {
      return year.toString() === chosenYear
    } else {
      return true
    }
  })
  const expensesYears = expenses.map((e) => {
    const date = new Date(e.date)
    return date.getFullYear()
  })
  const uniqueYears = [...new Set(expensesYears)].sort()

  const removeExpenseHandler = (id) => {
    onRemove(id)
  }
  

  return (
    <div className='container expenses'>
      <ExpenseFilter
        onDataChange={changeYearFilter}
        currentYear={chosenYear}
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
            removeExpense={removeExpenseHandler}
          />
        ))
      ) : (
        <p className="text-primary text-color--secondary">Nothing found! Add new expense to see it here.</p>
      )}
    </div>
  )
}
