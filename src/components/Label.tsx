import { urbanist } from '@/app/fonts'
import React from 'react'

type Props = {
    children: React.ReactNode
    color?: string
    }

const Label = (
    {
        children,
        color = 'bg-gray text-black',
    } : Props
) => {
  return (
    <span className={`px-4 py-1 ${color} text-[1rem] font-bold rounded-full ${urbanist.className}`}>
        {children}
    </span>
  )
}

export default Label