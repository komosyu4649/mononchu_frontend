import { urbanist } from '@/app/fonts'
import Link from 'next/link'
import React from 'react'
import Label from '../Label'

const CategoryCard = () => {
  return (
    <Link
      href='/stuff/detail'
      className='flex flex-col items-center gap-4 p-4 border border-line rounded-lg overflow-hidden'
    >
      <span
        className={`w-fit px-4 py-2 text-[1rem] font-bold bg-gray rounded-sm ${urbanist.className}`}
      >
        No.1
      </span>
      <div className='flex flex-col items-center gap-2'>
        <span className='text-[6rem] leading-none'>&#128084;</span>
        <span className='text-[1.6rem] font-bold'>洋服</span>
      </div>
      <div className='flex flex-col gap-4 w-full p-4 border border-line rounded-md'>
        <dl className='flex flex-row items-center gap-4 pb-4 border-b border-line'>
          <dt className='text-[1rem] font-bold'>所有物</dt>
          <dd className='flex flex-row items-center gap-2'>
            <Label>4</Label>
            <span className='text-[1rem] font-bold'>/</span>
            <Label>10</Label>
          </dd>
        </dl>
        <dl className='flex flex-row items-center gap-4'>
          <dt className='text-[1rem] font-bold'>欲しい</dt>
          <dd className='flex flex-row items-center gap-2'>
            <Label>14</Label>
            <span className={`text-[1rem] font-bold ${urbanist.className}`}>=</span>
            <span className={`text-[1rem] font-bold ${urbanist.className}`}>¥121,000</span>
          </dd>
        </dl>
      </div>
    </Link>
  )
}

export default CategoryCard
