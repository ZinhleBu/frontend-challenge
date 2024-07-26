'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
export default function NavLink({
  href,
  exact = false,
  className,
  children,
  onClick,
  ...props
}: {
  href: string
  exact?: boolean
  className?: string
  children: React.ReactNode
  onClick?: () => void
}) {
  const pathname = usePathname()
  const isActive = exact ? pathname === href : pathname.startsWith(href)
  const newClassName = isActive ? `${className} active` : className

  return (
    <Link href={href} className={newClassName} onClick={onClick} {...props}>
      {children}
    </Link>
  )
}