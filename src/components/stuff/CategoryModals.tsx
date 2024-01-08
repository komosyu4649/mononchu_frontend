'use client'

import React, { use, useMemo, useState } from 'react'
import Modal from '../Modal'
import Input from '../Input'
import Button from '../Button'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import EmojiSelectBox from '../EmojiSelectInput'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

type Props = {
  category: string
}

const CategoryModals = (props: Props) => {
  const { category } = props
  const router = useRouter()
  const searchParams = useSearchParams()
  const crud = searchParams.get('crud')

  const params = new URLSearchParams(searchParams.toString())
  params.delete('crud')

  const closeLink = {
    pathname: usePathname(),
    query: Object.fromEntries(params),
  }

  const existingInformation = async (category: string) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_NEST_API}/stuff/category/${category}`)
    return res
  }

  useMemo(() => {
    existingInformation(category).then((res) => {
      // console.log('1icon', res.data.icon)
      // console.log('existingInformation', res.data)
      setName(res.data.name)
      setLimit(res.data.propertyLimitedNumber)
      setIcon(res.data.icon)
    })
  }, [category])

  const { data: session } = useSession()
  const userId = session?.user.id

  const [name, setName] = useState('')
  const [limit, setLimit] = useState('')
  const [icon, setIcon] = useState('')
  // console.log('2icon', icon)

  const onSubmitEditHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    // console.log(11111, category)
    e.preventDefault()
    if (!userId) return
    // console.log('edit', name, icon, limit, session?.user.id)
    // console.log('3icon', icon)
    try {
      const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_NEST_API}/stuff/category/edit/${category}`,
        {
          name: name,
          icon: `${icon}`,
          propertyLimitedNumber: Number(limit),
          userId: userId,
        },
        // {
        //   headers: {
        //     authorization: `Bearer ${session?.backendTokens.accessToken}`,
        //     'Content-Type': 'application/json',
        //   },
        // },
      )
      return res
    } catch (error) {
      console.log('error', error)
    }
  }

  const onClickDeleteHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_NEST_API}/stuff/category/delete/${userId}/${category}`,
    )
    router.push('/stuff')
    return res
  }
  // console.log('name', name)
  return (
    <>
      {crud === 'edit' && (
        <Modal param='crud'>
          <form action='' className='' onSubmit={onSubmitEditHandler}>
            <div className='flex flex-col gap-8 mb-12'>
              <Input
                id='cat-name'
                label='カテゴリー名'
                placeholder='カテゴリー名を入力してください'
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              />
              <EmojiSelectBox
                id='cat-icon'
                label='カテゴリーアイコン'
                onEmojiSelect={(emoji) => setIcon(`&#x${emoji.unifiedWithoutSkinTone};`)}
                initEmoji={icon}
              />
              <Input
                id='cat-limit'
                label='アイテム上限数'
                placeholder='アイテム上限数を入力してください'
                value={limit}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLimit(e.target.value)}
              />
            </div>
            <Button
              type='submit'
              // href={closeLink}
            >
              変更
            </Button>
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

export default CategoryModals
