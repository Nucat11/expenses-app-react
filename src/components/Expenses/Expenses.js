import "./Expenses.scss";
import ExpenseItem from "../Expenses/ExpenseItem/ExpenseItem";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import { useState } from "react";


export default function Expenses({ expenses }) {
  const [chosenYear, setChosenYear] = useState('2020')
  const changeYearFilter = (chosenYear) => {
    setChosenYear(chosenYear)
  }

  return (
    <div>
      <ExpenseFilter onDataChange={changeYearFilter} currentYear={chosenYear}/>
      {expenses.map(({ date, title, amount, id }) => (
        <ExpenseItem
          expenseDate={date}
          expenseTitle={title}
          expenseAmount={amount}
          key={id}
        />
      ))}
    </div>
  );
}
