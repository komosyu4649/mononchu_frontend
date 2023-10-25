import React from 'react'

type Props = {
  id: string
  label: string
  placeholder: string
}

const Input = ({ id, label, placeholder }: Props) => {
  return (
    <label htmlFor={id} className='flex flex-col gap-3'>
      <span className='text-[1.4rem] font-bold'>{label}</span>
      <input
        id={id}
        type='text'
        placeholder={placeholder}
        className='p-4 text-[1.4rem] font-bold border border-line rounded-md placeholder:text-line'
      />
    </label>
  )
}

export default Input
