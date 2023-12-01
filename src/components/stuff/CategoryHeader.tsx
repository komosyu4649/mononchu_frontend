import { urbanist } from '@/app/fonts'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import CategoryHeaderLink from './CategoryHeaderLink'
import Modal from '../Modal'
import Button from '../Button'
import Input from '../Input'
import CategoryModals from './CategoryModals'

type Props = {
  type: 'child' | 'parent'
  category: string
}

const CategoryHeader = async ({ type, category }: Props) => {
  const categoryData = await axios.get(`${process.env.NEST_API}/stuff/category/${category}`)
  return (
    <>
      <CategoryModals category={category} />
      <div className='grid grid-cols-[1fr_auto] items-end gap-12 pb-10 border-b border-line'>
        <div className='flex flex-col gap-6'>
          <span
            className={`w-fit px-4 py-2 text-[1.2rem] font-bold bg-gray rounded-sm ${urbanist.className}`}
          >
            No.{categoryData.data.rank}
          </span>
          <h1 className='flex flex-row gap-4 items-center'>
            <span
              className='text-[3em] leading-none'
              dangerouslySetInnerHTML={{ __html: categoryData.data.icon }}
            />
            <span className='text-[2rem] font-bold'>{categoryData.data.name}</span>
          </h1>
        </div>
        <CategoryHeaderLink type={type} />
      </div>
    </>
  )
}

export default CategoryHeader
