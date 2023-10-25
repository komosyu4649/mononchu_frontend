'use client'

import { urbanist } from '@/app/fonts'
import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import Label from '@/components/Label'
import Modal from '@/components/Modal'
import PropertyCard from '@/components/stuff/PropertyCard'
import WantCard from '@/components/stuff/WantCard'
import Link from 'next/link'
import React, { useState } from 'react'

export default function StuffDetail() {
  // 編集モーダル
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const openEditModal = () => setIsEditModalOpen(true)
  return (
    <>
      {isEditModalOpen && <Modal onClose={() => setIsEditModalOpen(false)} />}
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
        <div className='grid grid-cols-[1fr_auto] items-end pb-10 border-b border-line'>
          <div className='flex flex-col gap-4'>
            <span
              className={`w-fit px-4 py-2 text-[1.2rem] font-bold bg-gray rounded-sm ${urbanist.className}`}
            >
              No.1
            </span>
            <h1 className='text-[2.4rem] font-bold'>洋服</h1>
          </div>
          <div className='flex flex-col gap-4 items-end'>
            <div className='flex flex-row items-center gap-2'>
              <Label>4</Label>
              <span className='text-[1rem] font-bold'>/</span>
              <Label>10</Label>
            </div>
            <div className='flex flex-row gap-4'>
              <button className='inline text-[1.2rem] underline' onClick={openEditModal}>
                編集
              </button>
              <button className='inline text-[1.2rem] underline'>削除</button>
            </div>
          </div>
        </div>
        <div className='mt-10'>
          <h2 className='inline-block mb-6 px-6 py-2 text-[1.2rem] text-white font-bold bg-black rounded-full'>
            所有しているモノ
          </h2>
          <ul className='grid grid-cols-2 gap-[.8rem] mb-6'>
            <li className=''>
              <PropertyCard />
            </li>
            <li className=''>
              <PropertyCard />
            </li>
            <li className=''>
              <PropertyCard />
            </li>
            <li className=''>
              <PropertyCard />
            </li>
          </ul>
          <Button>アイテムを追加</Button>
        </div>
        <div className='mt-10'>
          <h2 className='inline-block mb-6 px-6 py-2 text-[1.2rem] font-bold border border-line rounded-full'>
            欲しいモノ
          </h2>
          <ul className='grid grid-cols-2 gap-x-[.8rem] gap-y-6 mb-6'>
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
          <Button color='light'>アイテムを追加</Button>
        </div>
      </main>
    </>
  )
}
