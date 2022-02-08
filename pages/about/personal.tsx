import Image from 'next/image'
import Link from 'next/link'
import ContentContainer from '../../components/ContentContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { dadJokes, randomNumberGenerator } from '../../utils/dadJokes'
import Head from 'next/head'

export default function Personal() {
  const [joke, setJoke] = useState(dadJokes[randomNumberGenerator()])

  return (
    <div className="w-3/4 max-w-4xl my-20">
      <Head>
        <title>About me - personal</title>
      </Head>
      <div className="flex justify-between">
        <Link href="/about">
          <a>
            <FontAwesomeIcon icon={faLongArrowAltLeft} /> About
          </a>
        </Link>
        <Link href="/about/professional">
          <a>
            Professional <FontAwesomeIcon icon={faLongArrowAltRight} />
          </a>
        </Link>
      </div>
      <ContentContainer>
        <main>
          <div className='flex justify-center relative my-5'>
            <Image src='/personal.webp' height={1760/3} width={990/3} alt='baby and me' className='rounded-xl' />        
          </div>
          <p>*record scratch*</p>
          <p>Yep, that&apos;s me. You&apos;re probably wondering how I got here. </p>
          <p className='my-5'>. . .</p>
          <p>
            Just kidding. Thanks for stopping by! If you&apos;re here, then it
            probably means you want to know some fun facts about me, or what
            makes me tick. Either way you&apos;re in the right place. In March of
            2020 I made the best decision of my life by marrying the most
            beautiful woman on the planet, and taking on two wonderful step
            kids. Everything I do is for them.
          </p>
          <p className="my-3">
            What are you supposed to say when someone says to talk about
            yourself? I want to be honest, but modest, confident, but
            personable, and friendly, but professional. I&apos;m a husband, a father,
            a Christian, a musician, a nerd, a gamer, a teacher, a student...
            but mostly a nerd. Seriously, just click this{' '}
            <button
              className="rounded-xl bg-gray-300 px-2 py-1 font-montserrat font-semibold text-sm"
              onClick={() => {
                setJoke(dadJokes[randomNumberGenerator()])
                alert(joke)
              }}
            >
              button
            </button>
          </p>
          <p>
            Heh, heh, heh... Back to me. I was born and raised in NY, between
            NYC and Suffolk County in Long Island. I initially went to college
            for music performance, where I graduated with a Bachelor&apos;s in Music
            on viola. I used my degree in lots of areas like teaching,
            performing, just having fun, all great things except actually
            getting a career. Whoops. So I went back to college to start a
            career in something I figured I was good at - teaching. I got my
            Master&apos;s in Special Education, where I taught Algebra and Geometry
            to high school students for two years in Brooklyn.
          </p>
          <p className="my-3">
            I moved to Charlotte, NC so I could actively be involved with
            Elevation Church. Shortly after moving to Charlotte I decided to
            pursue technology as a career path. Teaching is a noble profession,
            but I knew I wanted to change gears in order to pursue a reliable,
            in-demand, and lucrative career that would sustain a family. I am so
            blessed that it actually all came true, just like a dream.
          </p>
          <p>
            Enough about history, so what about <em>me</em>? I suppose hobbies
            and pet peeves are how we get to know people so I&apos;ll share some of
            those. Video games are my go to for sure. As of right now, Super
            Smash Bros is my top pick, but overall I just like playing games
            that I can be competitive at. I love to longboard with my wife, play
            music, and recently I&apos;ve started to pick up cooking as a hobby (I&apos;m
            sure the wifey loves that one the most).
          </p>
          <p className="my-3">
            What are my pet peeves? I would say my number one is a flakey
            attitude. If you and I commit to a plan, let&apos;s see it through til
            the end! I&apos;m not a fan of dishonesty, and I don&apos;t like when people
            take advantage of my kindness. Ha! You thought I was going to talk
            about road rage or how much I hate bad drivers didn&apos;t you? Driving
            around in NYC has desensitized me to bad driving, so I&apos;m pretty calm
            on the road. Sorry to disappoint... but not really though.
          </p>
        </main>
      </ContentContainer>
    </div>
  )
}
