'use client'

import React from 'react'
import Input from './Input'
import Button from './Button'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

type Props = {
  children: React.ReactNode
  param?: string
  containerStyle?: string
}

const Modal = (props: Props) => {
  const router = usePathname()
  const searchParams = useSearchParams()
  const { param, containerStyle } = props
  const params = new URLSearchParams(searchParams.toString())
  params.delete(param as string)

  const closeLink = {
    pathname: router,
    query: Object.fromEntries(params),
  }

  return (
    <div className='fixed top-0 left-0 flex justify-center items-center w-full h-full z-50'>
      <Link
        href={closeLink}
        className='fixed top-0 left-0 w-full h-full bg-black opacity-50'
        scroll={false}
      ></Link>
      <div className='relative w-defaultWidth'>
        <div
          className={
            containerStyle
              ? containerStyle
              : 'h-fit max-h-[90vh] p-8 bg-white rounded-xl overflow-y-scroll overflow-x-hidden'
          }
        >
          {props.children}
        </div>
        <Link
          href={closeLink}
          className='absolute -top-4 -right-4 w-fit p-4 rounded-full bg-black'
          scroll={false}
        >
          <Image
            src='/assets/img/common/icon_close.svg'
            alt='閉じる'
            width={22}
            height={22}
            className='w-5 h-5'
          />
        </Link>
      </div>
    </div>
  )
}

export default Modal
