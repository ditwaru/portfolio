import Link from 'next/link'
import ContentContainer from '../../components/ContentContainer'

export default function About() {
  return (
    <ContentContainer>
      <section className="w-3/4 max-w-4xl">
        <h1 className='text-2xl font-bold font-montserrat'>Daniel Itwaru</h1>
        <p className='mb-3'>Full stack web developer and JavaScript enthusiast.</p>
        <p>What would you like to know about me?</p>
        <div className="flex justify-between pt-5">
          <button className="cursor rounded-xl bg-gradient-to-r from-blue-500 to-cyan-700 px-3 py-2 transition-all duration-300 hover:scale-125 text-white text-sm font-bold font-montserrat">
            <Link href="/about/professional">Professional</Link>
          </button>
          <button className="cursor rounded-xl bg-gradient-to-r from-cyan-700 to-cyan-500 px-3 py-2 transition-all duration-300 hover:scale-125 text-white text-sm font-bold font-montserrat">
            <Link href="/about/personal">Personal</Link>
          </button>
        </div>
      </section>
    </ContentContainer>
  )
}
