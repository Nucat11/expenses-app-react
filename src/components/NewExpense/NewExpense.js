import "./NewExpense.scss"
import Input from "../Input/Input"
import { useRef, useState } from "react"
import AddIcon from "./+"
import Cancel from "./Cancel"
import { useInView } from "react-intersection-observer"
export default function NewExpense({ onSaveExpenseData }) {
  const [newExpense, setNewExpense] = useState({})
  const [isOpen, setIsOpen] = useState(false)
  const { ref, inView, entry } = useInView({})

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
    setIsOpen(false)
  }

  const clickHandler = () => {
    window.scrollTo(0,0)
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
            <button className='new-expense__button new-expense__button--circle'>
              <AddIcon />
            </button>
            <button
              type='button'
              onClick={() => {
                setIsOpen(false)
                setNewExpense({})
              }}
              className='new-expense__button new-expense__button--circle new-expense__button--cancel'>
              <Cancel />
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className='new-expense__button text--primary'>
          Add new expense <AddIcon />
        </button>
      )}
      {!inView && (
        <button
          onClick={clickHandler}
          className='new-expense__button new-expense__button--fixed text--primary'>
          <AddIcon />
        </button>
      )}
    </div>
  )
}
