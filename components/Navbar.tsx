import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  return (
    <nav
      className={`flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500 text-white md:flex-row ${
        !hamburgerOpen && 'items-center justify-between'
      } fixed top-0 h-16 w-screen py-4 px-5 text-xl font-bold transition-all duration-300 ${
        hamburgerOpen && 'h-40'
      }`}
    >
      <div className="flex h-full w-full items-center justify-between">
        <button
          onClick={() => {
            setHamburgerOpen(!hamburgerOpen)
          }}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <Link href="/">Daniel Itwaru</Link>
      </div>
      <ul
        className={`transition-all duration-300 ${
          !hamburgerOpen && 'hidden pt-0 opacity-0'
        } pt-2`}
      >
        <li
          className="text-white"
          onClick={() => {
            setHamburgerOpen(false)
          }}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className="text-white"
          onClick={() => {
            setHamburgerOpen(false)
          }}
        >
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li
          className="text-white"
          onClick={() => {
            setHamburgerOpen(false)
          }}
        >
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
