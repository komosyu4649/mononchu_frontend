import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WantCard = () => {
  return (
    <Link href="" className='flex flex-col gap-2'>
        <div className="relative rounded-md overflow-hidden">
            <Image src="/assets/img/stuff/item.jpg" 
               alt="所有物" 
               width={175} 
               height={175} 
               className='w-full h-full aspect-square object-cover'
               />
        </div>
        <span className='bottom-6 px-4 text-[1.4rem] font-bold'>auraleeのカーディガン</span>
    </Link>
  )
}

export default WantCard