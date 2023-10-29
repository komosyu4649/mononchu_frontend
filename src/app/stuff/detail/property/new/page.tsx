import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Image from 'next/image'
import React from 'react'

export default function page() {
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
            name: '所有しているモノ',
            url: '/stuff/detail/property',
          },
          {
            name: '新規追加',
            url: '/stuff/detail/property/new',
          },
        ]}
      />
      <main className='w-defaultWidth m-auto mt-16'>
        <div className='mb-10'>
          <div className='flex flex-row justify-center items-center gap-6 mb-4'>
            <span className='p-3 text-[2rem] leading-none border border-line rounded-full'>
              &#128084;
            </span>
            <div className='flex flex-row items-center gap-2'>
              <Label size='md'>4</Label>
              <span className='text-[1rem] font-bold'>/</span>
              <Label size='md'>10</Label>
            </div>
          </div>
          <h1 className='text-defaultTitle text-center'>所有している洋服の追加</h1>
        </div>
        <form action='' className=''>
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
            <Input id='item-address' label='住所' placeholder='衣装ケース' />
            <Input id='item-date' label='購入日' placeholder='2019/10/10' />
            <Input id='item-place' label='購入場所' placeholder='青山のオーラリー' />
          </div>
          <Button>追加する</Button>
        </form>
      </main>
    </>
  )
}
