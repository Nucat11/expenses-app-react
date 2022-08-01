import Input from "../../../Input/Input"
import { useState } from "react"

export default function EditModal({
  closeModal,
  onEdit,
  isOpenModal,
}) {
  const [editedExpense, setEditedExpense] = useState({})

  const changeHandler = (e) => {
    setEditedExpense({
      ...editedExpense,
      [e.target.id]: e.target.value,
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    onEdit(editedExpense)
    setEditedExpense({})
    closeModal()
  }

  return (
    isOpenModal.open &&
    isOpenModal.type === "edit" && (
      <form onSubmit={submitHandler} className='modal'>
        <Input
          label='Title'
          type='text'
          onChange={changeHandler}
          value={editedExpense.title}
        />
        <Input
          label='Amount'
          type='number'
          min='0.01'
          step='0.01'
          onChange={changeHandler}
          value={editedExpense.amount}
        />
        <Input
          label='Date'
          type='date'
          min='2022-01-01'
          max='2023-01-01'
          onChange={changeHandler}
          value={editedExpense.date}
        />
        <div className='modal__buttons'>
          <button
            className='button text--primary text-color--primary'>
            Edit
          </button>
          <button
            className='button button--red text--primary text-color--primary'
            onClick={closeModal}>
            Cancel
          </button>
        </div>
      </form>
    )
  )
}
