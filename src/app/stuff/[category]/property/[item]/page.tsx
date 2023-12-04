import { urbanist } from '@/app/fonts'
import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Modal from '@/components/Modal'
import ItemInformation from '@/components/stuff/ItemInformation'
import ItemModals from '@/components/stuff/ItemModals'
import MemoContainer from '@/components/stuff/MemoContainer'
import MemoModals from '@/components/stuff/MemoModals'
import { Memo, StuffProperty } from '@/type'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  params: {
    category: string
    item: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function StuffDetailProperty(props: Props) {
  const { params, searchParams } = props
  const { category, item } = params
  const itemDetail = await axios.get(`${process.env.NEST_API}/stuff/property/${category}/${item}`)
  // console.log(propertyDetail.data)
  const itemDetailData: StuffProperty = itemDetail.data
  const memos = await axios.get(`${process.env.NEST_API}/stuff/memo/property/${category}/${item}`)
  const memosData = memos.data
  // console.log(memos.data)
  // console.log('searchParams', searchParams)
  const crudMemoEdit = searchParams['crud-memo-edit']
  const crudMemoDelete = searchParams['crud-memo-delete']
  const memoDetail = await axios.get(
    `${process.env.NEST_API}/stuff/memo/property/${category}/${item}/${crudMemoEdit}`,
  )
  console.log(memoDetail.data)
  // console.log('crudMemoEdit', crudMemoEdit)
  // console.log('crudMemoDelete', crudMemoDelete)

  const itemInfoList = [
    {
      icon: '/assets/img/common/icon_note.svg',
      text: `${itemDetailData.score}点`,
    },
    {
      icon: '/assets/img/common/icon_price.svg',
      text: `${itemDetailData.price}円`,
    },
    {
      icon: '/assets/img/common/icon_pin.svg',
      text: itemDetailData.address,
    },
    {
      icon: '/assets/img/common/icon_watch.svg',
      text: itemDetailData.purchaseDate,
    },
    {
      icon: '/assets/img/common/icon_map.svg',
      text: itemDetailData.purchasePlace,
    },
  ]

  const fiveW = [
    {
      param: 'why',
      text: 'why',
    },
    {
      param: 'who',
      text: 'who',
    },
    {
      param: 'when',
      text: 'when',
    },
    {
      param: 'where',
      text: 'where',
    },
    {
      param: 'what',
      text: 'what',
    },
  ]
  return (
    <>
      <ItemModals type='property' itemDetailData={itemDetailData} category={category} />
      <MemoModals type='property' category={category} item={item} />
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
            name: '所有している洋服',
            url: '/stuff/detail/property',
          },
          {
            name: 'auraleeのカーディガン',
            url: '/stuff/detail/property/detail',
          },
        ]}
      />
      <main className='w-defaultWidth m-auto mt-16'>
        <h1
          className={`flex justify-center w-fit mb-4 m-auto px-6 py-2 text-[1.2rem] text-white bg-black font-bold  rounded-full`}
        >
          所有しているモノ
        </h1>
        <div className='border-b border-line mb-8 pb-8'>
          <ItemInformation
            type='property'
            itemDetailData={itemDetailData}
            itemInfoList={itemInfoList}
          />
        </div>
        <MemoContainer type='property' category={category} item={item} />
      </main>
    </>
  )
}
