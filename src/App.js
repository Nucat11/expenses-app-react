import "./styles/global.scss"
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"

function App() {
  return (
    <div className="main">
      <div className='main-wrapper'>
        <NewExpense />
        <Expenses />
      </div>
    </div>
  )
}

export default App
