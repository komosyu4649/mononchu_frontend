import Link from 'next/link'
import React from 'react'

type Props = {
    name: string,
    url: string
}

const Breadcrumb = (
    crumbs: Props[]
) => {
  return (
    <nav>
        <ol>
            {crumbs.map((crumb, index) => (
            <li key={crumb.name}>
                <Link href="">

                </Link>
            </li>

            ))}
        </ol>
    </nav>
  )
}

export default Breadcrumb