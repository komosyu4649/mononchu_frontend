import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import ChartPie from '@/components/asset/ChartPie'
import { urbanist } from '@/app/fonts'
import axios from 'axios'
import { AssetCategory } from '@/type'
import ChartContainer from '@/components/asset/ChartContainer'
import { useAssetChart } from '@/hooks/useAssetChart'

ChartJS.register(ArcElement, Tooltip, Legend)

export default async function AssetWant() {
  const { data } = await useAssetChart({ type: 'want' })
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
      <main
        className='
        w-defaultWidth m-auto mt-16
        md:w-mdWidth md:grid md:grid-cols-2 md:gap-12
      '
      >
        <div className='md:py-8'>
          <h1
            className='
          text-defaultTitle text-center mb-10
          md:text-lgTitle
        '
          >
            欲しいモノ
          </h1>
          <p className='text-defaultText text-center'>
            今欲しいモノの総額。
            <br /> 好きなものにお金を使おうとしているか確認しよう。
          </p>
          <div className='flex flex-row gap-4 mt-8 mb-10'>
            <Button href='/asset' color='lightRev'>
              すべてのモノ
            </Button>
            <Button href='/asset/property' color='dark'>
              所有しているモノ
            </Button>
          </div>
        </div>
        <ChartContainer data={data} />
      </main>
    </>
  )
}
