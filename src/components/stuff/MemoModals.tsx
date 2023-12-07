'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import Modal from '../Modal'
import MemoForm from './MemoForm'
import { Memo } from '@/type'
import Button from '../Button'
import axios from 'axios'

type Props = {
  type: 'property' | 'want'
  category: string
  item: string
  memoDetailData: Memo | undefined
  crudMemoDelete: string | string[] | undefined
}

const MemoModals = (props: Props) => {
  const { type, category, item, memoDetailData, crudMemoDelete } = props

  const router = usePathname()
  const searchParams = useSearchParams()

  const params = new URLSearchParams(searchParams.toString())

  const editParam = params.get('crud-memo-edit')
  const deleteParam = params.get('crud-memo-delete')

  params.delete('crud-memo-delete')

  const closeLink = {
    pathname: router,
    query: Object.fromEntries(params),
  }

  const onClickDeleteHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_NEST_API}/stuff/memo/${type}/delete/${category}/${item}/${deleteParam}`,
    )
    return res
  }

  return (
    <>
      {editParam && (
        <Modal param='crud-memo-edit' containerStyle='p-0'>
          <MemoForm
            type={type}
            category={category}
            item={item}
            id={editParam}
            memoDetailData={memoDetailData}
          />
        </Modal>
      )}
      {deleteParam && (
        <Modal param='crud-memo-delete'>
          <div className=''>
            <div className='flex flex-col gap-6'>
              <h2 className='text-[1.8rem] font-bold text-center'>完全に削除しますか？</h2>
              <p className='text-defaultText text-center'>
                このメモを完全に削除しますか？ <br />
                この操作は戻すことができません。
              </p>
            </div>
            <div className='flex flex-row gap-4 mt-8'>
              <Button color='dangerRev' onClick={onClickDeleteHandler}>
                削除
              </Button>
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

export default MemoModals
