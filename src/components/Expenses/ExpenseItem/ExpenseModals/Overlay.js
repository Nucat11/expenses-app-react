import "./Modals.scss"

export default function RemoveModalOverlay({isOpenModal, closeOverlay}) {
    return (
      isOpenModal.open && (
        <div
          className='modal__overlay'
          onClick={closeOverlay}></div>
      )
    )
  }