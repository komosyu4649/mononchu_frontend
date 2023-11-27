import React from 'react'

type Props = {
  id: string
  label: string
  placeholder: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeSwitch = (size: 'sm' | 'md' | 'lg') => {
  switch (size) {
    case 'sm':
      return 'text-[1.2rem]'
    case 'md':
      return 'text-[1.4rem]'
    case 'lg':
      return 'text-[1.6rem]'
  }
}

const gapSwitch = (size: 'sm' | 'md' | 'lg') => {
  switch (size) {
    case 'sm':
      return 'gap-2'
    case 'md':
      return 'gap-3'
    case 'lg':
      return 'gap-4'
  }
}

const Input = ({ id, label, placeholder, size = 'md' }: Props) => {
  return (
    <label htmlFor={id} className={`flex flex-col ${gapSwitch(size)}`}>
      <span className={`${sizeSwitch(size)} font-bold`}>{label}</span>
      <input
        id={id}
        type='text'
        placeholder={placeholder}
        className={`p-4 ${sizeSwitch(
          size,
        )} font-bold border border-line rounded-md placeholder:text-line`}
      />
    </label>
  )
}

export default Input
