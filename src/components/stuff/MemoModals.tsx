'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import Modal from '../Modal'
import MemoForm from './MemoForm'

type Props = {
  type: 'property' | 'want'
  category: string
  item: string
  // searchParams: { [key: string]: string | string[] | undefined }
}

const MemoModals = (props: Props) => {
  const { type, category, item } = props
  console.log(type, category, item)
  const router = useRouter()
  const searchParams = useSearchParams()
  // const crud = searchParams.get('crud')

  const params = new URLSearchParams(searchParams.toString())
  // console.log('params', params)
  const editParam = params.get('crud-memo-edit')
  const deleteParam = params.get('crud-memo-delete')
  // console.log('editParam', editParam)
  // console.log('deleteParam', deleteParam)
  // params.delete('crud')

  const closeLink = {
    pathname: router,
    query: Object.fromEntries(params),
  }

  return (
    <>
      {editParam && (
        <Modal param='crud-memo-edit' containerStyle='p-0'>
          <MemoForm type={type} category={category} item={item} id={editParam} />
        </Modal>
      )}
      {deleteParam && (
        <Modal param='crud-memo-delete' containerStyle='p-0'>
          <MemoForm type={type} category={category} item={item} id={deleteParam} />
        </Modal>
      )}
    </>
  )
}

export default MemoModals
