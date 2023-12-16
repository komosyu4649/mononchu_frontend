'use client'

import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import { signIn } from 'next-auth/react'
import React from 'react'

export default function Signin() {
  return (
    <>
      <Breadcrumb
        crumbs={[
          {
            name: 'マイページ',
            url: '/',
          },
          {
            name: 'ログイン',
            url: '/signin',
          },
        ]}
      />
      <main
        className='
          w-defaultWidth m-auto mt-16
          md:w-mdWidth
        '
      >
        <h1
          className='
          text-defaultTitle text-center mb-10
          md:text-lgTitle
          '
        >
          ログイン
        </h1>
        <div className='p-8 border border-line rounded-lg'>
          <p className='text-defaultText'>
            mononchuは所有しているモノの洗練をお手伝いするサービスです。
            <br />
            アカウントを作成して所有しているモノと欲しいモノの管理をはじめよう！
          </p>
          <Button onClick={() => signIn()}>ログインする</Button>
          <p className='text-defaultText'>
            利用規約、プライバシーポリシーに同意したうえでログインしてください。
          </p>
        </div>
      </main>
    </>
  )
}
