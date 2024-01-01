import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SigninButton from './SigninButton'

const Header = () => {
  return (
    <header className='flex justify-center items-center border-b border-line'>
      <Link href='/' className='p-8'>
        <Image src='/assets/img/common/logo_mononchu.svg' width={111} height={29} alt='mononchu' />
      </Link>
      <SigninButton />
    </header>
  )
}

export default Header
