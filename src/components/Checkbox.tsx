import React from 'react'

type Props = {
  id: string
  text: string
  onChange?: () => void
}

const Checkbox = ({ id, text, onChange }: Props) => {
  return (
    <label htmlFor={id} className='grid grid-cols-[auto_1fr] items-center gap-2'>
      <input type='checkbox' name='' id={id} onChange={onChange} className='w-6 h-6' />
      <span className='text-[1.2rem]'>{text}</span>
    </label>
  )
}

export default Checkbox
