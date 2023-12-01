import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Label from '@/components/Label'
import CategoryAddForm from '@/components/stuff/CategoryAddForm'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'

type Props = {
  params: {
    category: string
  }
  searchParams: {}
}

export default async function StuffCategoryNew(props: Props) {
  const { params, searchParams } = props
  const { category } = params
  const categoryDetail = await axios.get(`${process.env.NEST_API}/stuff/category/${category}`)
  const { rank, name, icon, propertyRegistrationNumber, propertyLimitedNumber } =
    categoryDetail.data
  return (
    <>
      <Breadcrumb
        crumbs={[
          {
            name: 'マイページ',
            url: '/mypage',
          },
          {
            name: 'モノ',
            url: '/stuff',
          },
          {
            name: '洋服',
            url: '/stuff/detail',
          },
          {
            name: '所有しているモノ',
            url: '/stuff/detail/property',
          },
          {
            name: '新規追加',
            url: '/stuff/detail/property/new',
          },
        ]}
      />
      <main className='w-defaultWidth m-auto mt-16'>
        <div className='mb-10'>
          <div className='flex flex-row justify-center items-center gap-6 mb-4'>
            <span
              className='p-3 text-[2.4rem] leading-none border border-line rounded-full'
              dangerouslySetInnerHTML={{ __html: icon }}
            />
            <div className='flex flex-row items-center gap-2'>
              <Label size='md'>{propertyRegistrationNumber}</Label>
              <span className='text-[1rem] font-bold'>/</span>
              <Label size='md'>{propertyLimitedNumber}</Label>
            </div>
          </div>
          <h1 className='text-defaultTitle text-center'>所有している{name}の追加</h1>
        </div>
        <CategoryAddForm category={category} type='property' />
      </main>
    </>
  )
}
