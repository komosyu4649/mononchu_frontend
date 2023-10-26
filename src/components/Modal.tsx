import React from 'react'
import Input from './Input'
import Button from './Button'
import Image from 'next/image'

type Props = {
  children: React.ReactNode
  onClose: () => void
}

const Modal = (props: Props) => {
  console.log(props)
  return (
    <div className='fixed top-0 left-0 flex justify-center items-center w-full h-full z-50'>
      <button
        onClick={() => {
          props.onClose()
        }}
        className='fixed top-0 left-0 w-full h-full bg-black opacity-50'
      ></button>
      <div className='relative w-defaultWidth h-fit'>
        {props.children}
        <button
          className='absolute -top-4 -right-4 w-fit p-4 rounded-full bg-black border border-line'
          onClick={() => {
            props.onClose()
          }}
        >
          <Image
            src='/assets/img/common/logo_close.svg'
            alt='閉じる'
            width={22}
            height={22}
            className='w-5 h-5'
          />
        </button>
      </div>
    </div>
  )
}

export default Modal
