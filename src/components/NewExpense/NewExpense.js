import "./NewExpense.scss"
import Input from "../Input/Input"
import { useState } from "react"
export default function NewExpense({ onSaveExpenseData }) {
  const [newExpense, setNewExpense] = useState({})
  const changeHandler = (e) => {
    setNewExpense({
      ...newExpense,
      [e.target.id]: e.target.value,
    })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    onSaveExpenseData(newExpense)
    setNewExpense({})
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <Input
          label='Title'
          type='text'
          onChange={changeHandler}
          value={newExpense.title}
        />
        <Input
          label='Amount'
          type='number'
          min='0.01'
          step='0.01'
          onChange={changeHandler}
          value={newExpense.amount}
        />
        <Input
          label='Date'
          type='date'
          min='2022-01-01'
          max='2023-01-01'
          onChange={changeHandler}
          value={newExpense.date}
        />
        <button>Add Expense</button>
      </form>
    </div>
  )
}
