import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import ChartPie from '@/components/asset/ChartPie'
import { urbanist } from '../fonts'
import ChartContainer from '@/components/asset/ChartContainer'
import axios from 'axios'
import { AssetCategory } from '@/type'
import { useAssetChart } from '@/hooks/useAssetChart'

export default async function Asset() {
  const { data } = await useAssetChart({ type: 'all' })
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
        <h1 className='text-defaultTitle text-center mb-10'>資産の確認</h1>
        <p className='text-defaultText text-center'>
          今欲しいモノと所有しているものの総額。
          <br /> 好きなものにお金を使えているか確認しよう。
        </p>
        <div className='flex flex-row gap-4 mt-8 mb-10'>
          <Button href='/asset/property'>所有しているモノ</Button>
          <Button href='/asset/want' color='light'>
            欲しいモノ
          </Button>
        </div>
        <ChartContainer data={data} />
      </main>
    </>
  )
}
