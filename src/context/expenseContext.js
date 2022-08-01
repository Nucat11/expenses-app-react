import { createContext, useState } from "react";

const ExpenseContext = createContext([])

export const ExpenseContextProvider = ({children}) => {
     const [expenses, setExpenses] = useState([])
    return (
        <ExpenseContext.Provider
        value={{expenses: expenses, setExpenses: setExpenses}}>
            {children}
        </ExpenseContext.Provider>
    )
}

export default ExpenseContext;