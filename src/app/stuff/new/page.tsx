import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import Input from '@/components/Input'
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
            name: '新規カテゴリー追加',
            url: '/stuff/new',
          },
        ]}
      />
      <main className='w-defaultWidth m-auto mt-16'>
        <h1 className='text-defaultTitle text-center mb-10'>新規カテゴリー追加</h1>
        <form action='' className='p-8 border border-line rounded-xl'>
          <div className='flex flex-col gap-8 mb-12'>
            <Input
              id='cat-name'
              label='カテゴリー名'
              placeholder='カテゴリー名を入力してください'
            />
            <label htmlFor='' className='flex flex-col gap-3'>
              <span className='text-[1.4rem] font-bold'>カテゴリーアイコン</span>
              <button className='inline-block w-fit p-8 text-[3.6rem] leading-none bg-gray rounded-md'>
                &#128513;
              </button>
            </label>
            <Input
              id='cat-limit'
              label='アイテム上限数'
              placeholder='アイテム上限数を入力してください'
            />
          </div>
          <Button>追加</Button>
        </form>
      </main>
    </>
  )
}
