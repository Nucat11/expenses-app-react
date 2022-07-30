import "./styles/global.scss"
import Expenses from "./components/Expenses/Expenses"
import { v4 as uuidv4 } from "uuid"
import NewExpense from "./components/NewExpense/NewExpense"
import { useState } from "react"

function App() {
  const [expenses, setExpenses] = useState([])

  const saveExpenseData = (enteredExpenseData) => {
    setExpenses((prev) => ([
      {
        ...enteredExpenseData,
        id: uuidv4(),
      },
      ...prev,
    ]))
    console.log(enteredExpenseData)
  }
  return (
    <>
      <NewExpense onSaveExpenseData={saveExpenseData} />
      <Expenses expenses={expenses} />
    </>
  )
}

export default App
