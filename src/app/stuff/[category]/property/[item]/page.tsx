import { urbanist } from '@/app/fonts'
import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Modal from '@/components/Modal'
import ItemInformation from '@/components/stuff/ItemInformation'
import ItemModals from '@/components/stuff/ItemModals'
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
  searchParams: {}
}

export default async function StuffDetailProperty(props: Props) {
  const { params } = props
  const { category, item } = params
  const itemDetail = await axios.get(`${process.env.NEST_API}/stuff/property/${category}/${item}`)
  // console.log(propertyDetail.data)
  const itemDetailData: StuffProperty = itemDetail.data
  const memos = await axios.get(`${process.env.NEST_API}/stuff/memo/property/${category}/${item}`)
  const memosData = memos.data
  // console.log(memos.data)
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
      <ItemModals type='property' itemDetailData={itemDetailData} />
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
        {/* <ItemInformation
          type='property'
          itemDetailData={itemDetailData}
          itemInfoList={itemInfoList}
        /> */}
        <div className=''>
          <form action='' className=''>
            <div className='p-6 bg-gray border border-line rounded-xl'>
              <div className='grid grid-cols-[1fr_auto] justify-between items-center mb-4'>
                <ul className='flex flex-row gap-2'>
                  {fiveW.map((item, index) => (
                    <li key={item.param} className=''>
                      <Link
                        href={{
                          pathname: '/stuff/detail/property/detail',
                          query: { five: item.param },
                        }}
                        className={`inline-block px-4 py-[.15rem] text-[1.2rem] border border-line rounded-full bg-white ${urbanist.className}`}
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
                <label
                  htmlFor='dropzone-file'
                  className='flex flex-col items-center justify-center'
                >
                  <div className='h-fit p-3 bg-black rounded-full'>
                    <Image
                      src='/assets/img/common/icon_picture.svg'
                      alt='画像'
                      width={100}
                      height={100}
                      className='w-6 h-6'
                    />
                  </div>
                  <input id='dropzone-file' type='file' className='hidden' />
                </label>
              </div>
              <textarea
                name=''
                id=''
                cols={10}
                rows={3}
                placeholder='なんで気に入っているのか教えてちょうだい'
                className='w-full mb-4 p-3 text-defaultText border border-line rounded-md'
              ></textarea>
              <Button>投稿する</Button>
            </div>
          </form>
          <ul className='flex flex-col gap-3 mt-6'>
            {memosData.map((memo: Memo, index: number) => {
              return (
                <li key={memo.id} className=''>
                  <div className='p-6 border border-line rounded-xl'>
                    <div className='grid grid-cols-[1fr_auto] justify-between items-center mb-4'>
                      <ul className='flex flex-row gap-2'>
                        {memo.fiveW.map((item, index) => (
                          <li key={item} className=''>
                            <span
                              className={`inline-block px-4 py-[.15rem] text-[1.2rem] border border-line rounded-full bg-white ${urbanist.className}`}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <time className={`text-[1.2rem] ${urbanist.className}`}>2021/09/01</time>
                    </div>
                    <p className='text-defaultText'>{memo.memo}</p>
                    <div className='flex flex-row gap-4 justify-end'>
                      <button className='inline text-[1.2rem] underline'>編集</button>
                      <button className='inline text-[1.2rem] underline'>削除</button>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </main>
    </>
  )
}
