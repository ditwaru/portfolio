import Link from 'next/link'

export default function Navbar() {
    return (<nav className='bg-blue-700 text-white flex justify-between items-center px-16 font-bold text-3xl py-5 fixed top-0 w-screen'>
        <Link href='/'>Daniel Itwaru</Link>
        <ol className='flex space-x-10'>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/portfolio'>Portfolio</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
        </ol>
    </nav>)
}