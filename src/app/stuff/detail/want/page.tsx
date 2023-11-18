import { urbanist } from '@/app/fonts'
import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import Label from '@/components/Label'
import WantCard from '@/components/stuff/WantCard'
import Link from 'next/link'
import React from 'react'

export default function StuffDetailProperty() {
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
        <div className='grid grid-cols-[1fr_auto] items-end gap-12 pb-10 border-b border-line'>
          <div className='flex flex-col gap-6'>
            <span
              className={`w-fit px-4 py-2 text-[1.2rem] font-bold bg-gray rounded-sm ${urbanist.className}`}
            >
              No.1
            </span>
            <h1 className='flex flex-row gap-4 items-center'>
              <span className='text-[3em] leading-none'>&#128084;</span>
              <span className='text-[2rem] font-bold'>洋服</span>
            </h1>
          </div>
          <div className='flex flex-col gap-4 items-end'>
            <Link href='/stuff/detail' className='inline text-[1.2rem] underline'>
              戻る
            </Link>
          </div>
        </div>
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
            <li className=''>
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
            </li>
          </ul>
          <Button href='' color='light'>
            アイテムを追加
          </Button>
        </div>
      </main>
    </>
  )
}
