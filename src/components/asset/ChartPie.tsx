import React from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Chart,
  ChartData,
  ChartOptions,
} from 'chart.js'
import { Pie } from 'react-chartjs-2'

type Props = {
  data: ChartData<'pie', number[], unknown>
  options?: ChartOptions<'pie'>
}

const ChartPie = ({ data, options }: Props) => {
  return <Pie data={data} options={options} />
}
export default ChartPie
