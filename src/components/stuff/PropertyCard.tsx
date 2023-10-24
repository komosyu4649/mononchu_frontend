import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PropertyCard = () => {
  return (
    <Link href="">
        <div className="relative before:content-[''] before:absolute before:w-full before:h-full before:inset-0 before:z-[2] before:bg-gradient-to-t from-[#423D35] from-0% to-[#423D35/[ 0% ]] to-60%">
        <Image src="/assets/img/stuff/item.jpg" 
               alt="所有物" 
               width={175} 
               height={205} 
               className='w-full h-full'
               />
        </div>
        <span>auraleeのカーディガン</span>
    </Link>
  )
}

export default PropertyCard