'use client'

import Breadcrumb from '@/components/Breadcrumb'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Modal from '@/components/Modal'
import Image from 'next/image'
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
      text: '80点',
    },
    {
      icon: '/assets/img/common/icon_price.svg',
      text: '¥20,000',
    },
    {
      icon: '/assets/img/common/icon_pin.svg',
      text: 'タンスの中',
    },
    {
      icon: '/assets/img/common/icon_watch.svg',
      text: '2021/09/01',
    },
    {
      icon: '/assets/img/common/icon_map.svg',
      text: '青山のオーラリー',
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
            url: '/detail',
          },
          {
            name: 'auraleeのカーディガン',
            url: '/detail/property',
          },
        ]}
      />
      <main className='w-defaultWidth m-auto mt-16'>
        <h1 className='flex justify-center w-fit mb-6 m-auto px-6 py-2 text-[1.2rem] text-white font-bold bg-black rounded-full'>
          所有しているモノ
        </h1>
        <div className='border-b border-line mb-8 pb-8'>
          <h2 className='mb-4 text-defaultTitle text-center'>auraleeのカーディガン</h2>
          <div className='grid grid-cols-2 gap-6'>
            <Image
              src='/assets/img/stuff/item.jpg'
              alt='auraleeのカーディガン'
              width={300}
              height={300}
              className='rounded-md'
            />
            <div className=''>
              <ul className=''>
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
                    <span className='text-[1.2rem]'>{item.text}</span>
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
        </div>
        <div className=''>
          <form action='' className=''>
            <div className=''>
              <ul className=''>
                <li className=''></li>
              </ul>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}
