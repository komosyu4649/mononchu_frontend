import { urbanist } from '@/app/fonts'
import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import Checkbox from '@/components/Checkbox'
import Input from '@/components/Input'
import Modal from '@/components/Modal'
import ItemInformation from '@/components/stuff/ItemInformation'
import ItemModals from '@/components/stuff/ItemModals'
import MemoContainer from '@/components/stuff/MemoContainer'
import MemoModals from '@/components/stuff/MemoModals'
import { Memo, StuffCategory, StuffWant } from '@/type'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {
  params: {
    category: string
    item: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function StuffDetailWant(props: Props) {
  const { params, searchParams } = props
  const { category, item } = params
  const categoryDetail = await axios.get(`${process.env.NEST_API}/stuff/category/${category}`)

  const categoryDetailData: StuffCategory = categoryDetail.data
  const itemDetail = await axios.get(`${process.env.NEST_API}/stuff/want/${category}/${item}`)
  const itemDetailData: StuffWant = itemDetail.data

  const crudMemoEdit = searchParams['crud-memo-edit']
  const crudMemoDelete = searchParams['crud-memo-delete']

  let memoDetailData: Memo | undefined
  if (crudMemoEdit) {
    // console.log(`${process.env.NEST_API}/stuff/memo/want/${category}/${item}/${crudMemoEdit}`)
    const memoDetail = await axios.get(
      `${process.env.NEST_API}/stuff/memo/want/${category}/${item}/${crudMemoEdit}`,
    )
    memoDetailData = memoDetail.data
  } else {
    memoDetailData = undefined
  }

  // console.log('memoDetailData', memoDetailData)
  // console.log('crudMemoDelete', crudMemoDelete)

  const itemInfoList = [
    {
      icon: '/assets/img/common/icon_note.svg',
      text: `${itemDetailData.score}点`,
    },
    {
      icon: '/assets/img/common/icon_price.svg',
      text: `${itemDetailData.price.toLocaleString()}円`,
    },
    {
      icon: '/assets/img/common/icon_brand.svg',
      text: itemDetailData.brand,
    },
    {
      icon: '/assets/img/common/icon_url.svg',
      text: '購入リンク',
      href: itemDetailData.url,
    },
  ]

  // itemDetailData.priceを10,20,30年間全世界株の平均6%で運用してみた結果...
  const calc = (price: number, year: number) => {
    return Math.round(price * 1.06 ** year)
  }
  const assetCalculation10 = calc(itemDetailData.price, 10)
  const assetCalculation20 = calc(itemDetailData.price, 20)
  const assetCalculation30 = calc(itemDetailData.price, 30)
  const assetCalculationList = [
    {
      year: '10年後',
      amount: `${assetCalculation10.toLocaleString()}円`,
    },
    {
      year: '20年後',
      amount: `${assetCalculation20.toLocaleString()}円`,
    },
    {
      year: '30年後',
      amount: `${assetCalculation30.toLocaleString()}円`,
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
      <ItemModals type='want' itemDetailData={itemDetailData} category={category} />
      <MemoModals
        type='want'
        category={category}
        item={item}
        memoDetailData={memoDetailData}
        crudMemoDelete={crudMemoDelete}
      />
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
            name: '欲しい洋服',
            url: '/stuff/detail/want',
          },
          {
            name: 'comoloのジーパン',
            url: '/stuff/detail/want/detail',
          },
        ]}
      />
      <main className='w-defaultWidth m-auto mt-16'>
        <h1 className='flex justify-center w-fit mb-6 m-auto px-6 py-2 text-[1.2rem]  font-bold border border-line rounded-full'>
          欲しいモノ
        </h1>
        <div className='border-b border-line mb-8 pb-8'>
          <ItemInformation
            type='want'
            itemDetailData={itemDetailData}
            itemInfoList={itemInfoList}
          />
          <Button href='?crud=move' className='mt-4' scroll={false}>
            購入済みにする
          </Button>
          <div className='grid grid-cols-[auto_1fr] items-center mt-8 px-8 py-6 gap-8 border border-line rounded-md'>
            <span className='text-[1.2rem] font-bold'>購入条件</span>
            <div className='pl-8 border-l border-line'>
              <ul className='flex flex-col gap-3'>
                {itemDetailData.conditions.asset && (
                  <li className='list-disc'>
                    {/* <Checkbox
                    id='conditions-asset'
                     text={`資産額${itemDetailData.conditions.asset}いったら`}
                   /> */}
                    <p className='text-[1.2rem]'>資産額{itemDetailData.conditions.asset}いったら</p>
                  </li>
                )}
                {itemDetailData.conditions.period && (
                  <li className='list-disc'>
                    {/* <Checkbox
                     id='conditions-period'
                     text={`${itemDetailData.conditions.period}まで欲しかったら`}
                   /> */}
                    <p className='text-[1.2rem]'>
                      {itemDetailData.conditions.period}まで欲しかったら
                    </p>
                  </li>
                )}
                {itemDetailData.conditions.property && (
                  <li className='list-disc'>
                    {/* <Checkbox
                      id='conditions-property'
                      text={`${categoryDetailData.name}が${itemDetailData.conditions.property}点以下だったら`}
                    /> */}
                    <p className='text-[1.2rem]'>
                      {categoryDetailData.name}が{itemDetailData.conditions.property}点以下だったら
                    </p>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className='mt-6 px-8 py-6 gap-8 border border-line rounded-md'>
            <p className='text-[1.2rem] font-bold '>
              {itemDetailData.price.toLocaleString()}円を全世界株の平均6%で運用してみると...
            </p>
            <div className='flex flex-row gap-2 mt-3'>
              {assetCalculationList.map((item, index) => (
                <span
                  key={item.year}
                  className='pr-4 text-[1.2rem] text-center border-r border-line last:p-0 last:border-none'
                >
                  {item.year} : {item.amount}
                </span>
              ))}
            </div>
          </div>
        </div>
        <MemoContainer type='want' category={category} item={item} />
      </main>
    </>
  )
}
