'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const SigninButton = () => {
  const { data: session } = useSession()
  // console.log('session', { session })
  if (session && session.user)
    return (
      <div className='flex gap-4 ml-auto'>
        <p className='text-sky-600'>{session.user.name}</p>
        <Link href='/api/auth/signout' className='flex gap-4 ml-auto text-red-600'>
          ログアウト
        </Link>
      </div>
    )
  return (
    <div className='flex gap-4 ml-auto items-center'>
      <Link href='/api/auth/signin' className='flex gap-4 ml-auto text-green-600'>
        ログイン
      </Link>
      <Link href='/signup' className='flex gap-4 ml-auto bg-green-600 text-green-200 p-2 rounded'>
        新規会員登録
      </Link>
    </div>
  )
}

export default SigninButton
