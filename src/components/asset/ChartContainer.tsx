'use client'

import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart, ChartData } from 'chart.js'
import ChartPie from './ChartPie'
import { urbanist } from '@/app/fonts'

ChartJS.register(ArcElement, Tooltip, Legend)

type Props = {
  data: ChartData<'pie'>
}

const ChartContainer = (props: Props) => {
  const { data } = props
  return (
    <div className='flex flex-col items-center gap-6 p-8 border border-line rounded-xl'>
      <h2 className={`inline-block w-fit px-6 py-2 text-[1.2rem] font-bold bg-gray rounded-full`}>
        総額 : {''}
        {data.datasets[0].data
          .reduce((accumulator: any, currentValue: any) => accumulator + currentValue)
          .toLocaleString()}
        円
      </h2>
      <ChartPie data={data} options={{ responsive: true, maintainAspectRatio: true }} />
    </div>
  )
}

export default ChartContainer
