import { urbanist } from '@/app/fonts'
import React from 'react'

type Props = {
  children: React.ReactNode
  color?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeSwitch = (size: 'sm' | 'md' | 'lg') => {
  switch (size) {
    case 'sm':
      return 'px-2 py-[.1rem] text-[1rem]'
    case 'md':
      return 'px-4 py-[.15rem] text-[1.2rem]'
    case 'lg':
      return 'px-6 py-[.2rem] text-[1.4rem]'
  }
}

const Label = ({ children, color = 'bg-gray text-black', size = 'sm' }: Props) => {
  return (
    <span
      className={`px-4 py-[.15rem] ${color} ${sizeSwitch(size)} font-bold rounded-full ${
        urbanist.className
      }`}
    >
      {children}
    </span>
  )
}

export default Label
