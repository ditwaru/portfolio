import Link from 'next/link'
import { useState } from 'react'


export default function Navbar() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    
    return (<nav className={`bg-blue-700 text-white flex flex-col md:flex-row ${!hamburgerOpen && 'items-center justify-between'} py-4 px-5 font-bold text-xl fixed top-0 w-screen transition-all duration-300 h-16 ${hamburgerOpen && 'h-40'}`}>
        <div className='flex justify-between w-full h-full'>
            <button onClick={() => {setHamburgerOpen(!hamburgerOpen)}}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <Link href='/'>Daniel Itwaru</Link>
        </div>
        <ol className={`pt-2 ${!hamburgerOpen && 'hidden pt-0'}`}>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/portfolio'>Portfolio</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
        </ol>
    </nav>)
}