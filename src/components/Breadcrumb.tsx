'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  name: string
  url: string
}[] & {
  params?: {
    category: string
  }
}

const Breadcrumb = ({ crumbs }: { crumbs: Props }) => {
  const router = usePathname()
  return (
    <nav className='px-[1.6rem] bg-gray border-b border-line'>
      <ol className='flex flex-row flex-nowrap gap-3 items-center overflow-x-scroll'>
        {crumbs.map((crumb, index) => (
          <li key={crumb.name} className='flex flex-row items-center gap-3 whitespace-nowrap'>
            {/* currentのページにいる場合にはspanタグ */}
            {crumb.url === router ? (
              <span className='text-[1.2rem]'>{crumb.name}</span>
            ) : (
              <Link href={crumb.url} className='py-2'>
                <span className='text-[1.2rem]'>{crumb.name}</span>
              </Link>
            )}
            {/* <Link href={crumb.url} className='py-2'>
              <span className='text-[1.2rem]'>{crumb.name}</span>
            </Link> */}
            <span className='text-[1.2rem]'>{index !== crumbs.length - 1 && '>'}</span>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb
