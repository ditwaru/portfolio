import Link from 'next/link'
import ContentContainer from '../../components/ContentContainer'

export default function About() {
  return (
    <ContentContainer>
      <section className="w-3/4 max-w-4xl">
        <h1>Hello!</h1>
        <p>I'm a full stack web developer and JavaScript enthusiast.</p>
        <p>What would you like to know about me?</p>
        <div className="flex justify-between pt-5">
          <button className="cursor rounded-lg bg-gradient-to-r from-blue-500 to-cyan-700 px-2 py-1 transition-all duration-300 hover:scale-125">
            <Link href="/about/personal">Personal</Link>
          </button>
          <button className="cursor rounded-lg bg-gradient-to-r from-cyan-700 to-cyan-500 px-2 py-1 transition-all duration-300 hover:scale-125">
            <Link href="/about/professional">Professional</Link>
          </button>
        </div>
      </section>
    </ContentContainer>
  )
}
