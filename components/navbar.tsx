'use client'

import { BurgerIcon } from '@/icons/burger-icon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export const Navbar = () => {
  const pathname = usePathname()

  const section = pathname.split('/').length > 1 ? pathname.split('/')[1] : 'home'

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      {section === 'home' && (
        <h1 className="gutter">
          <span className="font-titles font-bold text-2xl">Dimitris Kottas</span>
        </h1>
      )}
      {section !== 'home' && (
        <span className="gutter">
          <Link className="font-titles font-bold text-2xl" href="/">
            Dimitris Kottas
          </Link>
        </span>
      )}
      <nav aria-label="Main Menu" className="gutter relative">
        <button
          className="h-6 block md:hidden"
          aria-expanded={isOpen}
          aria-controls="main-menu"
          title="Menu Toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BurgerIcon />
          <span className="visually-hidden">Menu</span>
        </button>
        <ul
          className={`absolute md:static md:flex right-0 bg-gray-100 md:bg-transparent shadow-2xl md:shadow-none md:flex-row mt-3 md:mt-0 mr-4 md:mr-0 lowercase text-center md:text-left ${
            isOpen === true ? 'flex' : 'hidden'
          }`}
          id="main-menu"
          role="menu"
        >
          <li className="md:pl-6 hover:bg-gray-200 md:hover:bg-transparent" role="menuitem">
            <Link
              className={`px-12 py-4 inline-block md:px-0 md:py-0 ${
                section === 'work' ? 'text-black' : ''
              }`}
              href="/work"
            >
              work
            </Link>
          </li>
          <li className="md:pl-6 hover:bg-gray-200 md:hover:bg-transparent" role="menuitem">
            <Link
              className={`px-12 py-4 inline-block md:px-0 md:py-0 ${
                section === 'about' ? 'text-black' : ''
              }`}
              href="/about"
            >
              about
            </Link>
          </li>
          <li className="md:pl-6 hover:bg-gray-200 md:hover:bg-transparent" role="menuitem">
            <Link
              className={`px-12 py-4 inline-block md:px-0 md:py-0 ${
                section === 'blog' ? 'text-black' : ''
              }`}
              href="/blog"
            >
              blog
            </Link>
          </li>
          <li className="md:pl-6 hover:bg-gray-200 md:hover:bg-transparent" role="menuitem">
            <Link
              className={`px-12 py-4 inline-block md:px-0 md:py-0 ${
                section === 'contact' ? 'text-black' : ''
              }`}
              href="/contact"
            >
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
