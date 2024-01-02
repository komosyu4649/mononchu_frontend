'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import Link from 'next/link'
import React from 'react'

type FormInputs = {
  name: string
  email: string
  password: string
}

export default function Signup() {
  const register = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_NEST_API}/auth/register`, {
      method: 'POST',
      body: JSON.stringify({
        name: data.current.name,
        email: data.current.email,
        password: data.current.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!res.ok) {
      alert('登録に失敗しました')
      return
      //   const json = await res.json()
      //   console.log('json', json)
    }
    const response = await res.json()
    alert('登録に成功しました')
    // console.log('response', { response })
  }

  const data = React.useRef<FormInputs>({
    name: '',
    email: '',
    password: '',
  })

  return (
    <div className='m-2 border rounded overflow-hidden shadow'>
      <div className='p-2 bg-gradient-to-b from-white to-slate-200 text-slate-600'>Sign up</div>
      <div className='p-2 flex flex-col gap-6'>
        <Input
          id='name'
          label="What's your name?"
          placeholder='Name'
          onChange={(e) => (data.current.name = e.target.value)}
        />
        <Input
          id='email'
          label="What's your email?"
          placeholder='Email'
          onChange={(e) => (data.current.email = e.target.value)}
        />
        <Input
          id='password'
          label="What's your password?"
          placeholder='Password'
          onChange={(e) => (data.current.password = e.target.value)}
        />
        <div className='flex justify-center items-center gap-2'>
          <Button onClick={register}>Submit</Button>
          <Link className='' href={'/'}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  )
}
