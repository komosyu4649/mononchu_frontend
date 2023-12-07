import { urbanist } from '@/app/fonts'
import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import Label from '@/components/Label'
import CategoryHeader from '@/components/stuff/CategoryHeader'
import PropertyCard from '@/components/stuff/PropertyCard'
import { StuffProperty } from '@/type'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'

type Props = {
  params: {
    category: string
  }
  searchParams: {}
}

export default async function StuffDetailProperty(props: Props) {
  const { params } = props
  const { category } = params
  const properties = await axios.get(`${process.env.NEST_API}/stuff/property/${category}`)
  const categoryDetail = await axios.get(`${process.env.NEST_API}/stuff/category/${category}`)
  const categoryDetailData = categoryDetail.data

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
            name: categoryDetailData.name,
            url: `/stuff/${category}`,
          },
          {
            name: '所有しているモノ',
            url: `/stuff/${category}/property`,
          },
        ]}
      />
      <main className='w-defaultWidth m-auto mt-16'>
        <CategoryHeader type='child' category={category} />
        <div className='mt-10'>
          <div className='flex flex-row justify-between items-center mb-6'>
            <h2 className='inline-block px-6 py-2 text-[1.2rem] text-white font-bold bg-black rounded-full'>
              所有しているモノ
            </h2>
            <div className='flex flex-row items-center gap-2'>
              <Label size='md'>{categoryDetail.data.propertyRegistrationNumber}</Label>
              <span className='text-[1.2rem] font-bold'>/</span>
              <Label size='md'>{categoryDetail.data.propertyLimitedNumber}</Label>
            </div>
          </div>
          <ul className='grid grid-cols-2 gap-[.8rem] mb-6'>
            {properties.data.map((property: StuffProperty) => (
              <li className='' key={property.id}>
                <PropertyCard
                  href={`/stuff/${category}/property/${property.id}`}
                  property={property}
                />
              </li>
            ))}
          </ul>
          <div className='flex flex-col gap-4'>
            <Button href={`/stuff/${category}/property/new`}>アイテムを追加</Button>
            <Button href={`/stuff/${category}`} color='lightRev'>
              一覧に戻る
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}
