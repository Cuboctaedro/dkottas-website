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
        <h1 className="px-3">
          <span className="font-titles font-bold font-serif text-2xl">Dimitris Kottas</span>
        </h1>
      )}
      {section !== 'home' && (
        <span className="px-3">
          <Link
            className="font-titles font-bold font-serif text-2xl hover:text-red-700 transition-colors"
            href="/"
          >
            Dimitris Kottas
          </Link>
        </span>
      )}
      <nav aria-label="Main Menu" className="px-3">
        <button
          className="h-6 block md:hidden relative z-20"
          aria-expanded={isOpen}
          aria-controls="main-menu"
          title="Menu Toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BurgerIcon />
          <span className="sr-only">Menu</span>
        </button>
        <ul
          className={`fixed z-10 md:static flex-col md:flex-row inset-0 bg-gray-100 md:bg-transparent pt-16 md:pt-0 font-serif text-center md:text-left ${
            isOpen === true ? 'flex' : 'hidden md:flex'
          }`}
          id="main-menu"
          role="menu"
        >
          <li className="md:pl-6 hover:bg-gray-200 md:hover:bg-transparent" role="menuitem">
            <Link
              className={`px-12 py-4 inline-block md:px-0 md:py-0 hover:text-red-700 transition-colors ${
                section === 'work' ? 'text-black' : 'text-gray-700'
              }`}
              href="/work"
              onClick={() => setIsOpen(false)}
            >
              work
            </Link>
          </li>
          <li className="md:pl-6 hover:bg-gray-200 md:hover:bg-transparent" role="menuitem">
            <Link
              className={`px-12 py-4 inline-block md:px-0 md:py-0 hover:text-red-700 transition-colors ${
                section === 'about' ? 'text-black' : 'text-gray-700'
              }`}
              href="/about"
              onClick={() => setIsOpen(false)}
            >
              about
            </Link>
          </li>
          <li className="md:pl-6 hover:bg-gray-200 md:hover:bg-transparent" role="menuitem">
            <Link
              className={`px-12 py-4 inline-block md:px-0 md:py-0 hover:text-red-700 transition-colors ${
                section === 'blog' ? 'text-black' : 'text-gray-700'
              }`}
              href="/blog"
              onClick={() => setIsOpen(false)}
            >
              blog
            </Link>
          </li>
          <li className="md:pl-6 hover:bg-gray-200 md:hover:bg-transparent" role="menuitem">
            <Link
              className={`px-12 py-4 inline-block md:px-0 md:py-0 hover:text-red-700 transition-colors ${
                section === 'contact' ? 'text-black' : 'text-gray-700'
              }`}
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
