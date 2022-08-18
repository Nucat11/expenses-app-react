import "./ExpenseItem.scss"
import ExpenseDate from "./ExpenseDate/ExpenseDate"
import { useState, useContext } from "react"
import RemoveModal from "./ExpenseModals/RemoveModal"
import { createPortal } from "react-dom"
import Overlay from "./ExpenseModals/Overlay"
import EditModal from "./ExpenseModals/EditModal"
import ExpenseContext from "../../../context/expenseContext"
import Delete from "./Delete"
import Edit from "./Edit"

export default function ExpenseItem({
  expenseDate,
  expenseTitle,
  expenseAmount,
  expenseId,
}) {
  const [isOpenModal, setIsOpenModal] = useState({ open: false, type: "" })
  const ctx = useContext(ExpenseContext)

  const confirmHandler = () => {
    ctx.setExpenses(ctx.expenses.filter((e) => e.id !== expenseId))
    setIsOpenModal({ open: false, type: "" })
  }

  const closeModalHandler = () => {
    setIsOpenModal({ open: false, type: "" })
  }

  const editHandler = (edited) => {
    const editedArr = ctx.expenses.map((e) => {
      if (e.id === expenseId) {
        return { ...e, ...edited }
      }
      return e
    })

    ctx.setExpenses(editedArr)
  }
  return (
    <div className='expense-item container'>
      <ExpenseDate expenseDate={expenseDate} />
      <div className='expense-item__price-title'>
        <span className='expense-item__title text--title text-color--secondary'>
          {expenseTitle}
        </span>
        <span className='expense-item__price text--title text-color--secondary'>
          ${expenseAmount}
        </span>
      </div>
      <div className='expense-item__buttons'>
        <button
          onClick={() => setIsOpenModal({ open: true, type: "remove" })}
          className='expense-item__action-button text-color--secondary'>
          <Delete />
        </button>
        <button
          onClick={() => setIsOpenModal({ open: true, type: "edit" })}
          className='expense-item__action-button text-color--secondary'>
          <Edit />
        </button>
      </div>
      {createPortal(
        <RemoveModal
          isOpenModal={isOpenModal}
          closeModal={closeModalHandler}
          confirmRemove={confirmHandler}
        />,
        document.getElementById("modal-root")
      )}
      {createPortal(
        <EditModal
          isOpenModal={isOpenModal}
          closeModal={closeModalHandler}
          onEdit={editHandler}
        />,
        document.getElementById("modal-root")
      )}
      {createPortal(
        <Overlay isOpenModal={isOpenModal} closeOverlay={closeModalHandler} />,
        document.getElementById("overlay-root")
      )}
    </div>
  )
}
