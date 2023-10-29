'use client'

import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const page = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
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
        ]}
      />
      <main className='w-defaultWidth m-auto mt-16'>
        <h1 className='text-defaultTitle text-center mb-10'>資産</h1>
        <p className='text-defaultText text-center'>
          今欲しいモノと所有しているものの総額。
          <br /> 好きなものにお金を使えているか確認しよう。
        </p>
        <div className='flex flex-row gap-4 mt-8'>
          <Button href='/asset/property'>所有しているモノ</Button>
          <Button href='/asset/want' color='light'>
            欲しいモノ
          </Button>
        </div>
        <Pie data={data} options={{ responsive: true, maintainAspectRatio: true }} />
      </main>
    </>
  )
}

export default page
