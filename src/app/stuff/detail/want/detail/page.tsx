'use client'

import { urbanist } from '@/app/fonts'
import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import Checkbox from '@/components/Checkbox'
import Input from '@/components/Input'
import Modal from '@/components/Modal'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function StuffDetailProperty() {
  // 編集モーダル
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const openEditModal = () => setIsEditModalOpen(true)
  // 削除モーダル
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const openDeleteModal = () => setIsDeleteModalOpen(true)
  const stuffInfoList = [
    {
      icon: '/assets/img/common/icon_note.svg',
      text: '72点',
    },
    {
      icon: '/assets/img/common/icon_price.svg',
      text: '¥42,000',
    },
    {
      icon: '/assets/img/common/icon_brand.svg',
      text: 'comoli',
    },
    {
      icon: '/assets/img/common/icon_url.svg',
      text: '購入リンク',
      href: 'https://www.comoli.jp/shop/g/gCML-21-01-001/',
    },
  ]
  const assetCalculationList = [
    {
      year: '10年後',
      amount: '¥12,000',
    },
    {
      year: '20年後',
      amount: '¥22,000',
    },
    {
      year: '30年後',
      amount: '¥42,000',
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
      {isEditModalOpen && (
        <Modal onClose={() => setIsEditModalOpen(false)}>
          <form action='' className='p-8 bg-white rounded-xl'>
            <div className='flex flex-col gap-8 mb-12'>
              <Input
                id='cat-name'
                label='カテゴリー名'
                placeholder='カテゴリー名を入力してください'
              />
              <Input
                id='cat-limit'
                label='アイテム上限数'
                placeholder='アイテム上限数を入力してください'
              />
            </div>
            <Button>追加</Button>
          </form>
        </Modal>
      )}
      {isDeleteModalOpen && (
        <Modal onClose={() => setIsDeleteModalOpen(false)}>
          <div className='p-8 bg-white rounded-xl'>
            <div className='flex flex-col gap-6'>
              <h2 className='text-[1.8rem] font-bold text-center'>完全に削除しますか？</h2>
              <p className='text-defaultText text-center'>
                「洋服」カテゴリーを完全に削除しますか？ <br />
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
      )}
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
          <h2 className='mb-4 text-defaultTitle text-center'>comoliのジーパン</h2>
          <div className='grid grid-cols-2 gap-6 mb-6'>
            <Image
              src='/assets/img/stuff/item.jpg'
              alt='auraleeのカーディガン'
              width={300}
              height={300}
              className='rounded-md'
            />
            <div className=''>
              <ul className='mb-4'>
                {stuffInfoList.map((item, index) => (
                  <li
                    key={item.text}
                    className='grid grid-cols-[auto_1fr] items-center gap-4 px-2 py-4 border-b border-line'
                  >
                    <Image
                      src={item.icon}
                      alt={item.text}
                      width={300}
                      height={300}
                      className='w-6'
                    />
                    {item.href ? (
                      <a
                        href={item.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-[1.2rem] underline'
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className='text-[1.2rem]'>{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>
              <div className='flex flex-row justify-end gap-4 mt-6'>
                <button className='inline text-[1.2rem] underline' onClick={openEditModal}>
                  編集
                </button>
                <button className='inline text-[1.2rem] underline' onClick={openDeleteModal}>
                  削除
                </button>
              </div>
            </div>
          </div>
          <Button>購入済みにする</Button>
          <div className='grid grid-cols-[auto_1fr] items-center mt-8 px-8 py-6 gap-8 border border-line rounded-md'>
            <span className='text-[1.2rem] font-bold'>購入条件</span>
            <div className='flex flex-col gap-3 pl-8 border-l border-line'>
              <Checkbox id='conditions-1' text='資産額1,000万円いったら' onChange={() => {}} />
              <Checkbox id='conditions-2' text='2024年2月まで欲しかったら' onChange={() => {}} />
              <Checkbox id='conditions-3' text='洋服が10点以下だったら' onChange={() => {}} />
            </div>
          </div>
          <div className='mt-6 px-8 py-6 gap-8 border border-line rounded-md'>
            <p className='text-[1.2rem] font-bold '>
              42,000円を全世界株の平均5%で運用してみると...
            </p>
            <div className='grid grid-cols-3 mt-3'>
              {assetCalculationList.map((item, index) => (
                <span key={item.year} className='text-[1.2rem]'>
                  {item.year} : {item.amount}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className=''>
          <form action='' className=''>
            <div className='p-6 bg-gray border border-line rounded-xl'>
              <div className='grid grid-cols-[1fr_auto] justify-between items-center mb-4'>
                <ul className='flex flex-row gap-2'>
                  {fiveW.map((item, index) => (
                    <li key={item.param} className=''>
                      <Link
                        href={{
                          pathname: '/stuff/detail/property/detail',
                          query: { five: item.param },
                        }}
                        className={`inline-block px-4 py-[.15rem] text-[1.2rem] border border-line rounded-full bg-white ${urbanist.className}`}
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
                <label
                  htmlFor='dropzone-file'
                  className='flex flex-col items-center justify-center'
                >
                  <div className='h-fit p-3 bg-black rounded-full'>
                    <Image
                      src='/assets/img/common/icon_picture.svg'
                      alt='画像'
                      width={100}
                      height={100}
                      className='w-6 h-6'
                    />
                  </div>
                  <input id='dropzone-file' type='file' className='hidden' />
                </label>
              </div>
              <textarea
                name=''
                id=''
                cols={10}
                rows={3}
                placeholder='なんで気に入っているのか教えてちょうだい'
                className='w-full mb-4 p-3 text-defaultText border border-line rounded-md'
              ></textarea>
              <Button>投稿する</Button>
            </div>
          </form>
          <ul className='mt-6'>
            <li className=''>
              <div className='p-6 border border-line rounded-xl'>
                <div className='grid grid-cols-[1fr_auto] justify-between items-center mb-4'>
                  <ul className='flex flex-row gap-2'>
                    {fiveW.map((item, index) => (
                      <li key={item.param} className=''>
                        <span
                          className={`inline-block px-4 py-[.15rem] text-[1.2rem] border border-line rounded-full bg-white ${urbanist.className}`}
                        >
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <time className={`text-[1.2rem] ${urbanist.className}`}>2021/09/01</time>
                </div>
                <p className='text-defaultText'>
                  尊敬する天才デザイナーのオーラリーおじさんがつくってるからね。
                </p>
                <div className='flex flex-row gap-4 justify-end'>
                  <button className='inline text-[1.2rem] underline'>編集</button>
                  <button className='inline text-[1.2rem] underline'>削除</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}
