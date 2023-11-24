'use client'

import Link from 'next/link'
import React, { useState } from 'react'

type Props = {
  type: 'child' | 'parent'
}

const CategoryHeaderLink = (props: Props) => {
  const { type } = props
  return (
    <div>
      {type === 'parent' ? (
        <div className='flex flex-row gap-4'>
          <Link href='?crud=edit' className='inline text-[1.2rem] underline'>
            編集
          </Link>
          <Link href='?crud=delete' className='inline text-[1.2rem] underline'>
            削除
          </Link>
        </div>
      ) : (
        <div className='flex flex-col gap-4 items-end'>
          <Link href='/stuff/detail' className='inline text-[1.2rem] underline'>
            戻る
          </Link>
        </div>
      )}
    </div>
  )
}

export default CategoryHeaderLink
