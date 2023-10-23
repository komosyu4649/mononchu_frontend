import { urbanist } from '@/app/fonts'
import Breadcrumb from '@/components/Breadcrumb'
import Label from '@/components/Label'
import Link from 'next/link'
import React from 'react'

export default function StuffDetail() {
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
                {
                    name: '洋服',
                    url: '/detail',
                },
            ]}
        />
        <main className="w-defaultWidth m-auto mt-16">
            <div className="grid grid-cols-[1fr_auto] items-end pb-10 border-b border-line">
                <div className="flex flex-col gap-4">
                    <span className={`w-fit px-4 py-2 text-[1.4rem] font-bold bg-gray rounded-sm ${urbanist.className}`}>
                        No.1
                    </span>
                    <h1 className='text-[2.4rem] font-bold'>
                        洋服
                    </h1>
                </div>
                <div className="flex flex-col gap-4">
                    <div className='flex flex-row items-center gap-2'>
                        <Label>4</Label>
                        <span className='text-[1rem] font-bold'>
                            /
                        </span>
                        <Label>10</Label>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Link href="" 
                              className='inline text-[1.2rem] underline'>
                            編集
                        </Link>
                        <Link href=""
                              className='inline text-[1.2rem] underline'>
                            削除
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    </>

  )
}
