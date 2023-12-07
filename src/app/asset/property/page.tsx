import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import React from 'react'
import ChartContainer from '@/components/asset/ChartContainer'
import { useAssetChart } from '@/hooks/useAssetChart'

export default async function AssetProperty() {
  // assetChartから値を受け取る
  const { data } = await useAssetChart({ type: 'property' })
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
            name: '所有しているモノ',
            url: '/asset/property',
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
          <Button href='/asset' color='lightRev'>
            すべてのモノ
          </Button>
          <Button href='/asset/want' color='light'>
            欲しいモノ
          </Button>
        </div>
        <ChartContainer data={data} />
      </main>
    </>
  )
}
