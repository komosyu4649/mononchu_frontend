'use client'

import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import ChartPie from '@/components/asset/ChartPie'
import { urbanist } from '@/app/fonts'

ChartJS.register(ArcElement, Tooltip, Legend)

const page = () => {
  const data = {
    labels: ['洋服', 'キャップ', 'スニーカー', '美容', '書籍', 'デバイス'],
    datasets: [
      {
        label: '総額',
        data: [68000, 19000, 30000, 5200, 2200, 3000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  return (
    <>
      <Breadcrumb
        crumbs={[
          {
            name: 'マイページ',
            url: '/mypage',
          },
          {
            name: '資産',
            url: '/asset',
          },
          {
            name: '欲しいモノ',
            url: '/asset/want',
          },
        ]}
      />
      <main className='w-defaultWidth m-auto mt-16'>
        <h1 className='text-defaultTitle text-center mb-10'>所有しているモノ</h1>
        <p className='text-defaultText text-center'>
          今所有しているモノの総額。
          <br /> 好きなものにお金を使えているか確認しよう。
        </p>
        <div className='flex flex-row gap-4 mt-8 mb-10'>
          <Button href='/asset' color='darkRev'>
            すべてのモノ
          </Button>
          <Button href='/asset/want' color='light'>
            欲しいモノ
          </Button>
        </div>
        <div className='flex flex-col items-center gap-6 p-8 border border-line rounded-xl'>
          <h2
            className={`inline-block w-fit px-6 py-2 text-[1.2rem] font-bold bg-gray rounded-full ${urbanist.className}`}
          >
            Total : {''}¥
            {data.datasets[0].data
              .reduce((accumulator, currentValue) => accumulator + currentValue)
              .toLocaleString()}
          </h2>
          <ChartPie data={data} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>
      </main>
    </>
  )
}

export default page
