import { StuffWant } from '@/type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  href: string
  want: StuffWant
}

const WantCard = (props: Props) => {
  const { href, want } = props
  return (
    <Link href={href} className='flex flex-col gap-2'>
      <div className='relative rounded-md overflow-hidden'>
        <Image
          src='/assets/img/stuff/item.jpg'
          // src={want.thumbnail}
          alt={want.name}
          width={175}
          height={175}
          className='w-full h-full aspect-square object-cover'
        />
      </div>
      <span className='bottom-6 px-4 text-[1.4rem] font-bold'>{want.name}</span>
    </Link>
  )
}

export default WantCard
