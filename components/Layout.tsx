import { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative bg-slate-100">
      <Navbar />
      <div className="flex min-h-screen justify-center">{children}</div>
      <Footer />
    </div>
  )
}
