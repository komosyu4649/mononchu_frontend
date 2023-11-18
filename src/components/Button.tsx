import Link from 'next/link'
import React from 'react'

type Props = {
  href?: string
  children: React.ReactNode
  onClick?: () => void
  className?: string
  color?: 'light' | 'lightRev' | 'dark' | 'darkRev' | 'danger' | 'dangerRev'
  width?: 'full' | 'fit'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
}

const Button = ({
  children,
  href,
  onClick,
  className,
  color = 'dark',
  width = 'full',
  type = 'button',
  disabled = false,
  loading = false,
  ...props
}: Props) => {
  const colorStyle = () => {
    switch (color) {
      case 'light':
        return 'text-dark bg-white border border-line'
      case 'lightRev':
        return 'text-dark bg-gray border border-line'
      case 'dark':
        return 'text-white bg-black'
      case 'darkRev':
        return 'text-black bg-white border border-black'
      case 'danger':
        return 'text-white bg-danger'
      case 'dangerRev':
        return 'text-danger border border-danger'
      default:
        return 'text-white bg-black'
    }
  }
  const commonStyle = `inline-flex justify-center items-center w-${width}  px-8 py-4 text-[1.4rem] font-bold rounded-md ${colorStyle()}`

  return href ? (
    <Link href={href} className={`${commonStyle} ${className}`} {...props}>
      {children}
    </Link>
  ) : (
    <button
      className={`${commonStyle} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
