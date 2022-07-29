import "./NewExpense.scss"
import Input from "../Input/Input"
import { useState } from "react"
export default function NewExpense() {
  const [newExpense, setNewExpense] = useState({})
  const onChange = (e) => {
    setNewExpense({
      ...newExpense,
      [e.target.id]: e.target.value
    })
    console.log(newExpense)
  }
  return (
    <div>
      <form>
        <Input label='Title' type='text' onChange={onChange}/>
        <Input label='Amount' type='number' min='0.01' step='0.01' onChange={onChange}/>
        <Input label='Date' type='date' min='2022-01-01' max='2023-01-01' onChange={onChange}/>
        <button>Add Expense</button>
      </form>
    </div>
  )
}
