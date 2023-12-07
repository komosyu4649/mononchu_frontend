'use client'

import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import EmojiSelectBox from '@/components/EmojiSelectInput'
import Input from '@/components/Input'
import axios from 'axios'
import React, { useState } from 'react'

export default function StuffNew() {
  const [name, setName] = useState('')
  const [limit, setLimit] = useState('')
  const [icon, setIcon] = useState('')
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await axios.post(`${process.env.NEXT_PUBLIC_NEST_API}/stuff/category/create`, {
      name: name,
      icon: `&#x${icon};`,
      propertyLimitedNumber: limit,
    })
    return res
  }
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
        <form action='' className='' onSubmit={onSubmitHandler}>
          <div className='flex flex-col gap-8 mb-10 p-8 border border-line rounded-xl'>
            <Input
              id='cat-name'
              label='カテゴリー名'
              placeholder='カテゴリー名を入力してください'
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
            <EmojiSelectBox
              id='cat-icon'
              label='カテゴリーアイコン'
              onEmojiSelect={(emoji) => setIcon(emoji.unifiedWithoutSkinTone)}
            />
            <Input
              id='cat-limit'
              label='アイテム上限数'
              placeholder='アイテム上限数を入力してください'
              value={limit}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLimit(e.target.value)}
            />
          </div>
          <Button type='submit'>追加</Button>
        </form>
      </main>
    </>
  )
}
