import { StuffProperty, StuffWant } from '@/type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  type: 'property' | 'want'
  itemDetailData: StuffProperty | StuffWant
  itemInfoList: {
    icon: string
    text: string
  }[]
}

const ItemInformation = (props: Props) => {
  const { type, itemDetailData, itemInfoList } = props
  return (
    <>
      {/* <h2 className='mb-8 text-defaultTitle text-center'>{itemDetailData.name}</h2> */}
      <div className='grid grid-cols-2 gap-6'>
        <Image
          src='/assets/img/stuff/item.jpg'
          // src={propertyDetailData.thumbnail}
          alt={itemDetailData.name}
          width={300}
          height={300}
          className='w-full rounded-md'
        />
        <div className=''>
          <ul className=''>
            {itemInfoList.map((item, index) => (
              <li
                key={item.text}
                className='grid grid-cols-[auto_1fr] items-center gap-4 px-2 py-4 border-b border-line'
              >
                <Image src={item.icon} alt={item.text} width={300} height={300} className='w-6' />
                <span className='text-[1.2rem]'>{item.text}</span>
              </li>
            ))}
          </ul>
          <div className='flex flex-row justify-end gap-4 mt-6'>
            <Link href='?crud=edit' className='inline text-[1.2rem] underline' scroll={false}>
              編集
            </Link>
            <Link href='?crud=delete' className='inline text-[1.2rem] underline' scroll={false}>
              削除
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemInformation
