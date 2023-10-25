import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Menu = () => {
    const menu = [
        {
            name: 'モノ',
            url: '/stuff',
            logo: '/assets/img/common/logo_stuff.svg'
        },
        {
            name: "資産",
            url: "/asset",
            logo: '/assets/img/common/logo_asset.svg'
        }
    ]

    return (
        <nav className='fixed bottom-0 left-0 w-full bg-white z-50'>
            <ul className='grid grid-cols-[1fr_1fr] gap-[1px]'>
                {menu.map((item, index) =>             
                (<li key={item.name}>
                    <Link href={item.url} className='flex flex-row justify-center items-center gap-3 px-2 py-6 bg-black text-white'>
                        <Image src={item.logo} alt={`${item.name}のアイコン`} width={22} height={22} />
                        <span className='text-[1.5rem]'>
                            {item.name}
                        </span>
                    </Link>
                </li>))
                }
            </ul>
        </nav>
    )
}

export default Menu