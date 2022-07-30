import "./Expenses.scss"
import ExpenseItem from "../Expenses/ExpenseItem/ExpenseItem"
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter"
import { useState } from "react"

export default function Expenses({ expenses }) {
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

  return (
    <div>
      <ExpenseFilter onDataChange={changeYearFilter} currentYear={chosenYear} />
      {filteredArr.length !== 0 ? (
        filteredArr.map(({ date, title, amount, id }) => (
          <ExpenseItem
            expenseDate={date}
            expenseTitle={title}
            expenseAmount={amount}
            key={id}
          />
        ))
      ) : (
        <p>Nothing found!</p>
      )}
    </div>
  )
}
