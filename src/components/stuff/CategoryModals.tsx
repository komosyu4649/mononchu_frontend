'use client'

import React from 'react'
import Modal from '../Modal'
import Input from '../Input'
import Button from '../Button'
import { usePathname, useSearchParams } from 'next/navigation'

const CategoryModals = () => {
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
      {crud === 'delete' && (
        <Modal param='crud'>
          <div className=''>
            <div className='flex flex-col gap-6'>
              <h2 className='text-[1.8rem] font-bold text-center'>完全に削除しますか？</h2>
              <p className='text-defaultText text-center'>
                「洋服」カテゴリーを完全に削除しますか？ <br />
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

export default CategoryModals
