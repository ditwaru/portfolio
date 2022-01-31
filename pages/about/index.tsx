import Head from 'next/head'
import Link from 'next/link'
import ContentContainer from '../../components/ContentContainer'

export default function About() {
  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <ContentContainer>
          <div className="flex justify-between space-x-5">
            <button className="cursor rounded-xl bg-gradient-to-r from-blue-500 to-cyan-700 px-3 py-2 transition-all duration-300 hover:scale-125 text-white text-sm font-bold font-montserrat">
              <Link href="/about/professional">Professional</Link>
            </button>
            <button className="cursor rounded-xl bg-gradient-to-r from-cyan-700 to-cyan-500 px-3 py-2 transition-all duration-300 hover:scale-125 text-white text-sm font-bold font-montserrat">
              <Link href="/about/personal">Personal</Link>
            </button>
          </div>
      </ContentContainer>
    </>
  )
}
