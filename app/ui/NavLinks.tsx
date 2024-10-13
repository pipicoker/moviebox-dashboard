"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    {name: 'Overview', href: '/'},
    {name: 'Movies', href: '/movies'},
    {name: 'Upload', href: ''},
    {name: 'Reporting', href: ''},
    {name: 'Users', href: ''},
]
const NavLinks = () => {
  const pathname = usePathname()
  return (
    <div className='space-x-4 '>
        {links.map((link, index) => (
            <Link 
            key={index}
            href={link.href}
            className={`link ${pathname === link.href ? 'text-white' : 'text-[#6A6A6A]'}`}
            >{link.name}
            </Link>
        ))}
    </div>
  )
}

export default NavLinks