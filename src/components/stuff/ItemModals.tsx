'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'
import Modal from '../Modal'
import Input from '../Input'
import Image from 'next/image'
import Button from '../Button'

const ItemModals = () => {
  const router = usePathname()
  const searchParams = useSearchParams()
  const crud = searchParams.get('crud')

  const params = new URLSearchParams(searchParams.toString())
  params.delete('crud')

  const closeLink = {
    pathname: router,
    query: Object.fromEntries(params),
  }
  return (
    <>
      {crud === 'edit' && (
        <Modal param='crud'>
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
              <Input id='item-address' label='住所' placeholder='衣装ケース' />
              <Input id='item-date' label='購入日' placeholder='2019/10/10' />
              <Input id='item-place' label='購入場所' placeholder='青山のオーラリー' />
            </div>
            <Button>変更</Button>
          </form>
        </Modal>
      )}
      {crud === 'delete' && (
        <Modal param='crud'>
          <div className=''>
            <div className='flex flex-col gap-6'>
              <h2 className='text-[1.8rem] font-bold text-center'>完全に削除しますか？</h2>
              <p className='text-defaultText text-center'>
                「auraleeのカーディガン」を完全に削除しますか？ <br />
                この操作は戻すことができません。
              </p>
            </div>
            <div className='flex flex-row gap-4 mt-8'>
              <Button color='dangerRev'>削除</Button>
              <Button color='light' href={closeLink}>
                キャンセル
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

export default ItemModals
