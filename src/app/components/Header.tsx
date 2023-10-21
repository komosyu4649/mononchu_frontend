import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-center items-center border-b border-line'>
      <Link href="/" className='p-6'>
        <Image src="/assets/img/common/logo.svg" width={111} height={29} alt="mononchu" />
      </Link>
    </header>
  )
}

export default Header