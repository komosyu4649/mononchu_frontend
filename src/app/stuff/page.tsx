import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import CategoryCard from '@/components/stuff/CategoryCard'
import React from 'react'

export default function Stuff() {
  return (
    <>
        <Breadcrumb
            crumbs={[
                {
                    name: 'マイページ',
                    url: '/mypage',
                },
                {
                    name: 'モノ',
                    url: '/stuff',
                },
            ]}
        />
        <main className='w-defaultWidth m-auto mt-16'>
            <h1 className='text-defaultTitle text-center mb-10'>
                モノ
            </h1>
            <div className="">
                <ul className="grid grid-cols-2 gap-[.8rem] mb-8">
                    <li className="">
                        <CategoryCard />
                    </li>
                </ul>
                <Button>
                    カテゴリーを追加
                </Button>
            </div>
        </main>
    </>

  )
}
