import { urbanist } from '@/app/fonts'
import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import Checkbox from '@/components/Checkbox'
import Input from '@/components/Input'
import Modal from '@/components/Modal'
import ItemInformation from '@/components/stuff/ItemInformation'
import ItemModals from '@/components/stuff/ItemModals'
import MemoContainer from '@/components/stuff/MemoContainer'
import { StuffCategory, StuffWant } from '@/type'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {
  params: {
    category: string
    item: string
  }
  searchParams: {}
}

export default async function StuffDetailWant(props: Props) {
  const { params } = props
  const { category, item } = params
  const categoryDetail = await axios.get(`${process.env.NEST_API}/stuff/category/${category}`)
  // console.log(categoryDetail.data)
  const categoryDetailData: StuffCategory = categoryDetail.data
  const itemDetail = await axios.get(`${process.env.NEST_API}/stuff/want/${category}/${item}`)
  const itemDetailData: StuffWant = itemDetail.data
  // console.log(itemDetailData)
  // // 編集モーダル
  // const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  // const openEditModal = () => setIsEditModalOpen(true)
  // // 削除モーダル
  // const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  // const openDeleteModal = () => setIsDeleteModalOpen(true)
  // // 所有しているモノへの更新モーダル
  // const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  // const openUpdateModal = () => setIsUpdateModalOpen(true)

  const itemInfoList = [
    {
      icon: '/assets/img/common/icon_note.svg',
      text: `${itemDetailData.score}点`,
    },
    {
      icon: '/assets/img/common/icon_price.svg',
      text: `${itemDetailData.price.toLocaleString()}円`,
    },
    {
      icon: '/assets/img/common/icon_brand.svg',
      text: itemDetailData.brand,
    },
    {
      icon: '/assets/img/common/icon_url.svg',
      text: '購入リンク',
      href: itemDetailData.url,
    },
  ]

  // itemDetailData.priceを10,20,30年間全世界株の平均6%で運用してみた結果...
  const calc = (price: number, year: number) => {
    return Math.round(price * 1.06 ** year)
  }
  const assetCalculation10 = calc(itemDetailData.price, 10)
  const assetCalculation20 = calc(itemDetailData.price, 20)
  const assetCalculation30 = calc(itemDetailData.price, 30)
  const assetCalculationList = [
    {
      year: '10年後',
      amount: `${assetCalculation10.toLocaleString()}円`,
    },
    {
      year: '20年後',
      amount: `${assetCalculation20.toLocaleString()}円`,
    },
    {
      year: '30年後',
      amount: `${assetCalculation30.toLocaleString()}円`,
    },
  ]

  const fiveW = [
    {
      param: 'why',
      text: 'why',
    },
    {
      param: 'who',
      text: 'who',
    },
    {
      param: 'when',
      text: 'when',
    },
    {
      param: 'where',
      text: 'where',
    },
    {
      param: 'what',
      text: 'what',
    },
  ]

  return (
    <>
      {/* {isEditModalOpen && (
        <Modal onClose={() => setIsEditModalOpen(false)}>
          <form action='' className=''>
            <div className='flex flex-col gap-8 mb-12'>
              <Input id='item-name' label='アイテム名' placeholder='アイテム名を入力してください' />
              <label htmlFor='item-thumbnail' className='flex flex-col gap-3'>
                <span className='text-[1.4rem] font-bold'>サムネイル</span>
                <div className='flex flex-row gap-4 items-center'>
                  <div className='h-fit p-3 bg-black rounded-full'>
                    <Image
                      src='/assets/img/common/icon_picture.svg'
                      alt='画像'
                      width={100}
                      height={100}
                      className='w-6 h-6'
                    />
                  </div>
                  <span className='text-defaultText'>画像をアップロード</span>
                  <input id='item-thumbnail' type='file' className='hidden' />
                </div>
              </label>
              <Input id='item-score' label='スコア' placeholder='80' />
              <Input id='item-price' label='価格' placeholder='12,000' />

              <Input
                id='item-brand'
                label='ブランド'
                placeholder='アイテムのブランドを入力してください'
              />
              <Input id='item-url' label='URL' placeholder='アイテムのURLを入力してください' />
              <div className=''>
                <span className='text-[1.4rem] font-bold'>購入条件</span>
                <div className='flex flex-col gap-4 mt-4 p-6 border border-line bg-gray rounded-md'>
                  <Input
                    id='item-conditions-asset'
                    label='資産額(いくらになったら？)'
                    placeholder='目標資産額を入力してください'
                    size='sm'
                  />
                  <Input
                    id='item-conditions-period'
                    label='期間(いつ？)'
                    placeholder='目標購入時期を入力してください'
                    size='sm'
                  />
                  <Input
                    id='item-conditions-number'
                    label='所有アイテム数(いくつになったら？)'
                    placeholder='目標所有アイテム数を入力してください'
                    size='sm'
                  />
                </div>
              </div>
            </div>
            <Button>変更</Button>
          </form>
        </Modal>
      )} */}
      {/* {isDeleteModalOpen && (
        <Modal onClose={() => setIsDeleteModalOpen(false)}>
          <div className=''>
            <div className='flex flex-col gap-6'>
              <h2 className='text-[1.8rem] font-bold text-center'>完全に削除しますか？</h2>
              <p className='text-defaultText text-center'>
                「comoliのジーパン」を完全に削除しますか？ <br />
                この操作は戻すことができません。
              </p>
            </div>
            <div className='flex flex-row gap-4 mt-8'>
              <Button color='dangerRev'>削除</Button>
              <Button color='light' onClick={() => setIsDeleteModalOpen(false)}>
                キャンセル
              </Button>
            </div>
          </div>
        </Modal>
      )} */}
      {/* {isUpdateModalOpen && (
        <Modal onClose={() => setIsUpdateModalOpen(false)}>
          <div className=''>
            <div className='flex flex-col gap-8 mb-10'>
              <Input id='item-name' label='アイテム名' placeholder='アイテム名を入力してください' />
              <label htmlFor='item-thumbnail' className='flex flex-col gap-3'>
                <span className='text-[1.4rem] font-bold'>サムネイル</span>
                <div className='flex flex-row gap-4 items-center'>
                  <div className='h-fit p-3 bg-black rounded-full'>
                    <Image
                      src='/assets/img/common/icon_picture.svg'
                      alt='画像'
                      width={100}
                      height={100}
                      className='w-6 h-6'
                    />
                  </div>
                  <span className='text-defaultText'>画像をアップロード</span>
                  <input id='item-thumbnail' type='file' className='hidden' />
                </div>
              </label>
              <Input id='item-score' label='スコア' placeholder='80' />
              <Input id='item-price' label='価格' placeholder='12,000' />
              <Input id='item-address' label='住所' placeholder='衣装ケース' />
              <Input id='item-date' label='購入日' placeholder='2019/10/10' />
              <Input id='item-place' label='購入場所' placeholder='青山のオーラリー' />
            </div>
            <Button>所有に移動</Button>
          </div>
        </Modal>
      )} */}
      <ItemModals type='want' itemDetailData={itemDetailData} />
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
            url: '/stuff/detail',
          },
          {
            name: '欲しい洋服',
            url: '/stuff/detail/want',
          },
          {
            name: 'comoloのジーパン',
            url: '/stuff/detail/want/detail',
          },
        ]}
      />
      <main className='w-defaultWidth m-auto mt-16'>
        <h1 className='flex justify-center w-fit mb-6 m-auto px-6 py-2 text-[1.2rem]  font-bold border border-line rounded-full'>
          欲しいモノ
        </h1>
        <div className='border-b border-line mb-8 pb-8'>
          <ItemInformation
            type='want'
            itemDetailData={itemDetailData}
            itemInfoList={itemInfoList}
          />
          <Button href='?crud=move' className='mt-4'>
            購入済みにする
          </Button>
          <div className='grid grid-cols-[auto_1fr] items-center mt-8 px-8 py-6 gap-8 border border-line rounded-md'>
            <span className='text-[1.2rem] font-bold'>購入条件</span>
            <div className='flex flex-col gap-3 pl-8 border-l border-line'>
              <Checkbox
                id='conditions-asset'
                text={`資産額${itemDetailData.conditions.asset}いったら`}
              />
              <Checkbox
                id='conditions-period'
                text={`${itemDetailData.conditions.period}まで欲しかったら`}
              />
              <Checkbox
                id='conditions-property'
                text={`${categoryDetailData.name}が${itemDetailData.conditions.property}点以下だったら`}
              />
            </div>
          </div>
          <div className='mt-6 px-8 py-6 gap-8 border border-line rounded-md'>
            <p className='text-[1.2rem] font-bold '>
              {itemDetailData.price.toLocaleString()}円を全世界株の平均6%で運用してみると...
            </p>
            <div className='flex flex-row gap-2 mt-3'>
              {assetCalculationList.map((item, index) => (
                <span
                  key={item.year}
                  className='pr-4 text-[1.2rem] text-center border-r border-line last:p-0 last:border-none'
                >
                  {item.year} : {item.amount}
                </span>
              ))}
            </div>
          </div>
        </div>
        <MemoContainer type='want' category={category} item={item} />
      </main>
    </>
  )
}
