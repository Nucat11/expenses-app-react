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
      behavior: 'smooth'
    });
    setIsOpen(true)
  }

  return (
    <div className='new-expense container' ref={ref}>
      {isOpen ? (
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
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className='button new-expense__button text--primary'>
          Add new expense <AddIcon />
        </button>
      )}
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
