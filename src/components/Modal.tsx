import React from 'react'

const Modal = (props: { onClose: () => void }) => {
  console.log(props)
  return (
    <div>
      Modal
      <button
        onClick={() => {
          props.onClose()
        }}
      >
        close
      </button>
    </div>
  )
}

export default Modal
