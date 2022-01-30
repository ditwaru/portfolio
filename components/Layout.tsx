import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({children}: {children: ReactNode}) {
    return (<><Navbar /><div className='flex min-h-screen flex-col items-center justify-center py-2'>{children}</div><Footer /></>)
}