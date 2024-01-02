import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import CategoryCard from '@/components/stuff/CategoryCard'
import React from 'react'
import axios from 'axios'
import { StuffCategory } from '@/type'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

export default async function Stuff() {
  const userSession = await getServerSession(authOptions)
  console.log('userSession', userSession)
  const categories = await axios.get(`${process.env.NEST_API}/stuff/category`, {
    headers: {
      authorization: `Bearer ${userSession?.backendTokens.accessToken}`,
      'Content-Type': 'application/json',
    },
  })
  console.log('categories', categories.data)
  return (
    <>
      <Breadcrumb
        crumbs={[
          {
            name: 'マイページ',
            url: '/',
          },
          {
            name: 'モノ',
            url: '/stuff',
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
          モノ
        </h1>
        <div className=''>
          <ul
            className='
            grid grid-cols-2 gap-[.8rem] mb-8
            md:grid-cols-4
          '
          >
            {/* {categories.data.map((category: StuffCategory) => {
              return (
                <li className='' key={category.id}>
                  <CategoryCard category={category} />
                </li>
              )
            })} */}
          </ul>
          <Button href='/stuff/new'>カテゴリーを追加</Button>
        </div>
      </main>
    </>
  )
}
