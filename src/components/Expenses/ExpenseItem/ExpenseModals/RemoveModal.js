import "./Modals.scss"

export default function RemoveModal({
  isOpenModal,
  closeModal,
  confirmRemove,
}) {
  return (
    isOpenModal.open &&
    isOpenModal.type === "remove" && (
      <div className='modal'>
        <p className='text--primary text-color--secondary'>
          Are you sure you want to delete this expense?
        </p>
        <div className='modal__buttons'>
          <button
            onClick={confirmRemove}
            className='button text--primary text-color--primary'>
            Remove
          </button>
          <button
            className='button button--red text--primary text-color--primary'
            onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    )
  )
}
