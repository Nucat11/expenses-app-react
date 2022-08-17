import "./NewExpense.scss"
import Input from "../Input/Input"
import { useContext, useState } from "react"
import ExpenseContext from "../../context/expenseContext"
import AddIcon from "./+"
import Cancel from "./Cancel"
import { useInView } from "react-intersection-observer"
import { v4 as uuidv4 } from "uuid"
import { CSSTransition } from "react-transition-group"

export default function NewExpense() {
  const [newExpense, setNewExpense] = useState({})
  const [isOpen, setIsOpen] = useState(false)
  const [showButton, setShowButton] = useState(true)

  const { ref, inView } = useInView({})
  const ctx = useContext(ExpenseContext)

  const changeHandler = (e) => {
    setNewExpense({
      ...newExpense,
      [e.target.id]: e.target.value,
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    ctx.setExpenses((prev) => [
      {
        ...newExpense,
        id: uuidv4(),
      },
      ...prev,
    ])
    setNewExpense({})
    setIsOpen(false)
  }

  const clickHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
    setShowButton(false)
  }

  return (
    <div className='new-expense container' ref={ref}>
      <CSSTransition
        classNames='new-expense-container'
        in={isOpen}
        mountOnEnter
        unmountOnExit
        timeout={300}
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}>
        <form onSubmit={submitHandler} className='new-expense__form'>
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
          <div className='new-expense__buttons-container'>
            <button className='button new-expense__button new-expense__button--circle'>
              <AddIcon />
            </button>
            <button
              type='button'
              onClick={() => {
                setIsOpen(false)
                setNewExpense({})
              }}
              className='button new-expense__button new-expense__button--circle button--red'>
              <Cancel />
            </button>
          </div>
        </form>
      </CSSTransition>
      <CSSTransition
        in={showButton}
        unmountOnExit
        mountOnEnter
        timeout={300}
        classNames='new-expense-container'
        onEnter={() => setIsOpen(false)}
        onExited={() => setIsOpen(true)}>
        <button
          onClick={() => setShowButton(false)}
          className='button new-expense__button text--primary'>
          Add new expense <AddIcon />
        </button>
      </CSSTransition>
      <CSSTransition
        in={!inView}
        timeout={300}
        classNames='new-expense__animation'
        mountOnEnter
        unmountOnExit>
        <button
          onClick={clickHandler}
          className={`button new-expense__button new-expense__button--fixed text--primary`}>
          <AddIcon />
        </button>
      </CSSTransition>
    </div>
  )
}
