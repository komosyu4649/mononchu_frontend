import { urbanist } from '@/app/fonts'
import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import Label from '@/components/Label'
import CategoryHeader from '@/components/stuff/CategoryHeader'
import WantCard from '@/components/stuff/WantCard'
import { StuffWant } from '@/type'
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
  const { params, searchParams } = props
  const { category } = params
  const wants = await axios.get(`${process.env.NEST_API}/stuff/want/${category}`)

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
            name: '欲しいモノ',
            url: '/property',
          },
        ]}
      />
      <main className='w-defaultWidth m-auto mt-16'>
        <CategoryHeader type='want' category={category} />
        <div className='mt-10'>
          <div className='flex flex-row justify-between items-center mb-6'>
            <h2 className='inline-block px-6 py-2 text-[1.2rem] font-bold border border-line rounded-full'>
              欲しいモノ
            </h2>
            <div className='flex flex-row items-center gap-2'>
              <Label size='md'>14</Label>
              <span className={`text-[1.2rem] font-bold ${urbanist.className}`}>=</span>
              <span className={`text-[1.2rem] font-bold ${urbanist.className}`}>¥121,000</span>
            </div>
          </div>
          <ul className='grid grid-cols-2 gap-[.8rem] mb-6'>
            {wants.data.map((want: StuffWant) => (
              <li className='' key={want.id}>
                <WantCard href={`/stuff/${category}/want/${want.id}`} want={want} />
              </li>
            ))}
            {/* <li className=''>
              <WantCard />
            </li>
            <li className=''>
              <WantCard />
            </li>
            <li className=''>
              <WantCard />
            </li>
            <li className=''>
              <WantCard />
            </li> */}
          </ul>
          <Button href='' color='light'>
            アイテムを追加
          </Button>
        </div>
      </main>
    </>
  )
}
