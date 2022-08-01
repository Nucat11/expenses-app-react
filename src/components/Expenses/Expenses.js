import "./Expenses.scss"
import ExpenseItem from "../Expenses/ExpenseItem/ExpenseItem"
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter"
import { useState } from "react"
import ExpenseChart from "./ExpenseChart/ExpenseChart"
import { createPortal } from "react-dom"

export default function Expenses({ expenses, onRemove }) {
  const [chosenYear, setChosenYear] = useState("")
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [currentId, setCurrentId] = useState("")

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
    setIsOpenModal(true)
    setCurrentId(id)
  }

  const confirmRemoveHandler = () => {
    onRemove(currentId)
    setIsOpenModal(false)
  }

  const RemoveModal = () => {
    return (
      isOpenModal && (
        <div className='remove-modal'>
          <p className='text--primary text-color--secondary'>
            Are you sure you want to delete this expense?
          </p>
          <div className="remove-modal__buttons">
            <button
              onClick={confirmRemoveHandler}
              className='button text--primary text-color--primay'>
              Remove
            </button>
            <button
              className='button button--red text--primary text-color--primary'
              onClick={() => setIsOpenModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      )
    )
  }

  const RemoveModalOverlay = () => {
    return (
      isOpenModal && (
        <div
          className='modal-overlay'
          onClick={() => setIsOpenModal(false)}></div>
      )
    )
  }

  return (
    <div className='container expenses'>
      <ExpenseFilter
        onDataChange={changeYearFilter}
        currentYear={chosenYear}
        expensesYears={uniqueYears}
      />
      <ExpenseChart filteredArr={filteredArr} />
      {createPortal(<RemoveModal />, document.getElementById("modal-root"))}
      {createPortal(
        <RemoveModalOverlay />,
        document.getElementById("overlay-root")
      )}
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
        <p className='text-primary text-color--secondary'>
          Nothing found! Add new expense to see it here.
        </p>
      )}
    </div>
  )
}
