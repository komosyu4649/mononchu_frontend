// 'use client'

import { urbanist } from '@/app/fonts'
import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Modal from '@/components/Modal'
import CategoryHeader from '@/components/stuff/CategoryHeader'
import PropertyCard from '@/components/stuff/PropertyCard'
import WantCard from '@/components/stuff/WantCard'
import { StuffProperty, StuffWant } from '@/type'
import axios from 'axios'
import Link from 'next/link'

type Props = {
  params: {
    category: string
  }
  searchParams: {}
}

export default async function StuffDetail(props: Props) {
  const { params, searchParams } = props
  const { category } = params
  const categoryData = await axios.get(`${process.env.NEST_API}/stuff/category/${category}`)

  const properties = await axios.get(`${process.env.NEST_API}/stuff/property/${category}?limit=4`)
  const wants = await axios.get(`${process.env.NEST_API}/stuff/want/${category}?limit=4`)

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
            url: '/detail',
          },
        ]}
      />
      <main className='w-defaultWidth m-auto mt-16'>
        <CategoryHeader type='parent' category={category} />
        <div className='mt-10'>
          <div className='flex flex-row justify-between items-center mb-6'>
            <h2 className='inline-block px-6 py-2 text-[1.2rem] text-white font-bold bg-black rounded-full'>
              所有しているモノ
            </h2>
            <div className='flex flex-row items-center gap-2'>
              <Label size='md'>{categoryData.data.propertyRegistrationNumber}</Label>
              <span className='text-[1.2rem] font-bold'>/</span>
              <Label size='md'>{categoryData.data.propertyLimitedNumber}</Label>
            </div>
          </div>
          <ul className='grid grid-cols-2 gap-[.8rem] mb-6'>
            {properties.data.map((property: StuffProperty) => (
              <li key={property.id} className=''>
                <PropertyCard
                  href={`/stuff/${category}/property/${property.id}`}
                  property={property}
                />
              </li>
            ))}
          </ul>
          <Button href={`/stuff/${category}/property`}>所有しているモノ一覧</Button>
        </div>
        <div className='mt-10'>
          <div className='flex flex-row justify-between items-center mb-6'>
            <h2 className='inline-block px-6 py-2 text-[1.2rem] font-bold border border-line rounded-full'>
              欲しいモノ
            </h2>
            <div className='flex flex-row items-center gap-2'>
              <Label size='md'>{categoryData.data.wantRegistrationNumber}</Label>
              <span className={`text-[1.2rem] font-bold ${urbanist.className}`}>=</span>
              <span className={`text-[1.2rem] font-bold ${urbanist.className}`}>
                ¥{categoryData.data.wantTotalAmount}
              </span>
            </div>
          </div>
          <ul className='grid grid-cols-2 gap-x-[.8rem] gap-y-6 mb-6'>
            {wants.data.map((want: StuffWant) => (
              <li key={want.id} className=''>
                <WantCard href={`/stuff/${category}/want/${want.id}`} want={want} />
              </li>
            ))}
          </ul>
          <Button color='light' href={`/stuff/${category}/want`}>
            欲しいモノ一覧
          </Button>
        </div>
      </main>
    </>
  )
}
