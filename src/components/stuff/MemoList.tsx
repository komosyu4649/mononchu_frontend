import { urbanist } from '@/app/fonts'
import { Memo } from '@/type'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'

type Props = {
  type: 'property' | 'want'
  category: string
  item: string
}

const MemoList = async (props: Props) => {
  const { type, category, item } = props
  const memos = await axios.get(
    `${process.env.NEXT_PUBLIC_NEST_API}/stuff/memo/${type}/${category}/${item}`,
  )
  const memosData = memos.data

  return (
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
                <Link
                  href={`/stuff/${category}/${type}/${item}?crud-memo-edit=${memo.id}`}
                  className='inline text-[1.2rem] underline'
                  scroll={false}
                >
                  編集
                </Link>
                <Link
                  href={`/stuff/${category}/${type}/${item}?crud-memo-delete=${memo.id}`}
                  className='inline text-[1.2rem] underline'
                  scroll={false}
                >
                  削除
                </Link>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default MemoList
