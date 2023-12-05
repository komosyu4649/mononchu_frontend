'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from '../Button'
import { urbanist } from '@/app/fonts'
import axios from 'axios'
import { Memo } from '@/type'

type Props = {
  type: 'property' | 'want'
  category: string
  item: string
  id?: string
  memoDetailData?: Memo | undefined
  crudMemoDelete?: string | string[] | undefined
}

const MemoForm = (props: Props) => {
  const { type, category, item, id, memoDetailData, crudMemoDelete } = props
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

  //   console.log('props', props)

  const [text, setText] = useState(memoDetailData?.memo || '')
  // fiveWParamには同じparamを入れない
  const [fiveWParam, setFiveWParam] = useState<string[]>(memoDetailData?.fiveW || [])
  const [image, setImage] = useState(memoDetailData?.image || '')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // console.log(text, fiveWParam, image)
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_NEST_API}/stuff/memo/${type}/create/${category}/${item}`,
      {
        memo: text,
        fiveW: fiveWParam,
        image: image,
      },
    )
    return res
  }

  return (
    <form action='' className='' onSubmit={onSubmit}>
      <div className='p-6 bg-gray border border-line rounded-xl'>
        <div className='grid grid-cols-[1fr_auto] justify-between items-center mb-4'>
          <ul className='flex flex-row gap-2'>
            {fiveW.map((item, index) => (
              <li key={item.param} className=''>
                <button
                  type='button'
                  className={`inline-block px-4 py-[.15rem] text-[1.2rem] border border-line rounded-full  ${
                    urbanist.className
                  }
                    ${
                      fiveWParam.includes(item.param)
                        ? 'bg-black text-white'
                        : 'bg-white text-black'
                    }
                  `}
                  onClick={
                    fiveWParam.includes(item.param)
                      ? () => setFiveWParam(fiveWParam.filter((param) => param !== item.param))
                      : () => setFiveWParam([...fiveWParam, item.param])
                  }
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
          <label htmlFor='dropzone-file' className='flex flex-col items-center justify-center'>
            <div className='h-fit p-3 bg-black rounded-full'>
              <Image
                src='/assets/img/common/icon_picture.svg'
                alt='画像'
                width={100}
                height={100}
                className='w-6 h-6'
              />
            </div>
            <input
              id='dropzone-file'
              type='file'
              className='hidden'
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
        </div>
        <textarea
          name=''
          id=''
          cols={10}
          rows={3}
          placeholder='なんで気に入っているのか教えてちょうだい'
          className='w-full mb-4 p-3 text-defaultText border border-line rounded-md'
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <Button type='submit'>{id ? '更新する' : '登録する'}</Button>
      </div>
    </form>
  )
}

export default MemoForm
