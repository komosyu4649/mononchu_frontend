// 'use client'

import { urbanist } from '@/app/fonts'
import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Modal from '@/components/Modal'
import PropertyCard from '@/components/stuff/PropertyCard'
import WantCard from '@/components/stuff/WantCard'
import { StuffProperty, StuffWant } from '@/type'
import axios from 'axios'
import Link from 'next/link'
// import React, { useState } from 'react'

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
  // console.log(categoryData.data)
  // console.log(category)
  const properties = await axios.get(`${process.env.NEST_API}/stuff/property/${category}?limit=4`)
  const wants = await axios.get(`${process.env.NEST_API}/stuff/want/${category}?limit=4`)
  // console.log(wants.data)
  // console.log(properties.data)
  // 編集モーダル
  // const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  // const openEditModal = () => setIsEditModalOpen(true)
  // 削除モーダル
  // const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  // const openDeleteModal = () => setIsDeleteModalOpen(true)
  return (
    <>
      {/* {isEditModalOpen && (
        <Modal onClose={() => setIsEditModalOpen(false)}>
          <form action='' className=''>
            <div className='flex flex-col gap-8 mb-12'>
              <Input
                id='cat-name'
                label='カテゴリー名'
                placeholder='カテゴリー名を入力してください'
              />
              <Input
                id='cat-limit'
                label='アイテム上限数'
                placeholder='アイテム上限数を入力してください'
              />
            </div>
            <Button>追加</Button>
          </form>
        </Modal>
      )}
      {isDeleteModalOpen && (
        <Modal onClose={() => setIsDeleteModalOpen(false)}>
          <div className=''>
            <div className='flex flex-col gap-6'>
              <h2 className='text-[1.8rem] font-bold text-center'>完全に削除しますか？</h2>
              <p className='text-defaultText text-center'>
                「洋服」カテゴリーを完全に削除しますか？ <br />
                この操作は戻すことができません。
              </p>
            </div>
            <div className='flex flex-row gap-4 mt-8'>
              <Button color='dangerRev'>削除</Button>
              <Button color='light' onClick={() => setIsDeleteModalOpen(false)}>
                キャンセル
              </Button>
            </div>
          </div>
        </Modal>
      )} */}
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
          <div className='flex flex-col gap-4 items-end'>
            {/* <div className='flex flex-row items-center gap-2'>
              <Label>4</Label>
              <span className='text-[1rem] font-bold'>/</span>
              <Label>10</Label>
            </div> */}
            {/* <div className='flex flex-row gap-4'>
              <button className='inline text-[1.2rem] underline' onClick={openEditModal}>
                編集
              </button>
              <button className='inline text-[1.2rem] underline' onClick={openDeleteModal}>
                削除
              </button>
            </div> */}
          </div>
        </div>
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
