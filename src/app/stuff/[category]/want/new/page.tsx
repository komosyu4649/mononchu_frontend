import { urbanist } from '@/app/fonts'
import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Label from '@/components/Label'
import CategoryAddForm from '@/components/stuff/CategoryAddForm'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'

type Props = {
  params: {
    category: string
  }
  searchParams: {}
}

export default async function StuffWantNew(props: Props) {
  const { params } = props
  const { category } = params
  const categoryDetail = await axios.get(`${process.env.NEST_API}/stuff/category/${category}`)
  const { rank, name, icon, wantRegistrationNumber, wantTotalAmount } = categoryDetail.data
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
            url: '/stuff/detail/want',
          },
          {
            name: '新規追加',
            url: '/stuff/detail/want/new',
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
              <Label size='md'>{wantRegistrationNumber}</Label>
              <span className={`text-[1.2rem] font-bold ${urbanist.className}`}>=</span>
              <span className={`text-[1.2rem] font-bold ${urbanist.className}`}>
                ¥{wantTotalAmount}
              </span>
            </div>
          </div>
          <h1
            className='
            text-defaultTitle text-center
            md:text-lgTitle
            '
          >
            欲しい{name}の追加
          </h1>
        </div>
        <CategoryAddForm category={category} type='want' />
        {/* <form action='' className=''>
          <div className='flex flex-col gap-8 mb-10 p-8 border border-line rounded-xl'>
            <Input id='item-name' label='アイテム名' placeholder='アイテム名を入力してください' />
            <label htmlFor='item-thumbnail' className='flex flex-col gap-3'>
              <span className='text-[1.4rem] font-bold'>サムネイル</span>
              <div className='flex flex-row gap-4 items-center'>
                <div className='h-fit p-3 bg-black rounded-full'>
                  <Image
                    src='/assets/img/common/icon_picture.svg'
                    alt='画像'
                    width={100}
                    height={100}
                    className='w-6 h-6'
                  />
                </div>
                <span className='text-defaultText'>画像をアップロード</span>
                <input id='item-thumbnail' type='file' className='hidden' />
              </div>
            </label>
            <Input id='item-score' label='スコア' placeholder='80' />
            <Input id='item-price' label='価格' placeholder='12,000' />
            <Input id='item-brand' label='ブランド名' placeholder='ブランド名を入力してください' />
            <Input id='item-url' label='URL' placeholder='URLを入力してください' />
            <div className=''>
              <span className='text-[1.4rem] font-bold'>購入条件</span>
              <div className='flex flex-col gap-4 mt-4 p-6 border border-line bg-gray rounded-md'>
                <Input
                  id='item-conditions-asset'
                  label='資産額(いくらになったら？)'
                  placeholder='目標資産額を入力してください'
                  size='sm'
                />
                <Input
                  id='item-conditions-period'
                  label='期間(いつ？)'
                  placeholder='目標購入時期を入力してください'
                  size='sm'
                />
                <Input
                  id='item-conditions-number'
                  label='所有アイテム数(いくつになったら？)'
                  placeholder='目標所有アイテム数を入力してください'
                  size='sm'
                />
              </div>
            </div>
          </div>
          <Button>追加する</Button>
        </form> */}
      </main>
    </>
  )
}
