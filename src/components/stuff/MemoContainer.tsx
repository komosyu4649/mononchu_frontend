import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from '../Button'
import axios from 'axios'
import { Memo } from '@/type'
import { urbanist } from '@/app/fonts'
import MemoList from './MemoList'
import MemoForm from './MemoForm'

type Props = {
  type: 'property' | 'want'
  category: string
  item: string
}

const MemoContainer = (props: Props) => {
  const { type, category, item } = props
  return (
    <div className=''>
      <MemoForm type={type} category={category} item={item} />
      <MemoList type={type} category={category} item={item} />
    </div>
  )
}

export default MemoContainer
