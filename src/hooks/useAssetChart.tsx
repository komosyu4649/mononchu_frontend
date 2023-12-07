import { AssetCategory } from '@/type'
import axios from 'axios'
import React from 'react'

type Props = {
  type: 'all' | 'want' | 'property'
}

export const useAssetChart = async (props: Props) => {
  const { type } = props
  // assetのchartを作る
  const asset = await axios.get(`${process.env.NEST_API}/asset/${type}`)
  const assetData: AssetCategory[] = asset.data
  // priceの大きい順に並び替え
  assetData.sort((a, b) => {
    if (a.price < b.price) {
      return 1
    } else {
      return -1
    }
  })
  // indexを使って赤青黄緑などある程度綺麗な色をバラけて作る
  const backgroundColor = assetData.map((data, index) => {
    const r = ((index + 1) * 50) % 256
    const g = ((index + 1) * 200) % 256
    const b = ((index + 1) * 100) % 256
    const a = 0.2
    return `rgba(${r}, ${g}, ${b}, ${a})`
  })
  const borderColor = assetData.map((data, index) => {
    const r = ((index + 1) * 50) % 256
    const g = ((index + 1) * 200) % 256
    const b = ((index + 1) * 100) % 256
    const a = 0.5
    return `rgba(${r}, ${g}, ${b}, ${a})`
  })
  const data = {
    labels: assetData.map((data) => data.name),
    datasets: [
      {
        label: '総額',
        data: assetData.map((data) => data.price),
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  }
  return {
    data,
  }
}
