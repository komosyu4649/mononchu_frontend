'use client'

import React, { useState } from 'react'
import Input from '../Input'
import Image from 'next/image'
import Button from '../Button'
import axios from 'axios'

type Props = {
  category: string
  type: 'property' | 'want'
}

const CategoryAddForm = (props: Props) => {
  const { category, type } = props
  const [name, setName] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [score, setScore] = useState('')
  const [price, setPrice] = useState('')
  const [address, setAddress] = useState('')
  const [purchaseDate, setPurchaseDate] = useState('')
  const [purchasePlace, setPurchasePlace] = useState('')
  console.log(name, thumbnail, score, price, address, purchaseDate, purchasePlace)
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(process.env.NEST_API)
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_NEST_API}/stuff/${type}/create/${category}`,
      {
        name,
        thumbnail,
        score,
        price,
        address,
        purchaseDate,
        purchasePlace,
      },
    )
    console.log('res', res)
    return res
  }

  return (
    <form action='' className='' onSubmit={onSubmitHandler}>
      <div className='flex flex-col gap-8 mb-10 p-8 border border-line rounded-xl'>
        <Input
          id='item-name'
          label='アイテム名'
          placeholder='アイテム名を入力してください'
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
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
            <input
              id='item-thumbnail'
              type='file'
              className='hidden'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setThumbnail(e.target.value)}
            />
          </div>
        </label>
        <Input
          id='item-score'
          label='スコア'
          placeholder='80'
          value={score}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setScore(e.target.value)}
        />
        <Input
          id='item-price'
          label='価格'
          placeholder='12,000'
          value={price}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)}
        />
        <Input
          id='item-address'
          label='住所'
          placeholder='衣装ケース'
          value={address}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
        />
        <Input
          id='item-date'
          label='購入日'
          placeholder='2019/10/10'
          value={purchaseDate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPurchaseDate(e.target.value)}
        />
        <Input
          id='item-place'
          label='購入場所'
          placeholder='青山のオーラリー'
          value={purchasePlace}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPurchasePlace(e.target.value)}
        />
      </div>
      <Button type='submit'>追加する</Button>
    </form>
  )
}

export default CategoryAddForm
