import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'
import Head from 'next/head'
import ContentContainer from '../components/ContentContainer'
import { GetStaticProps } from 'next'

export default function Portfolio() {
  const { user, error, isLoading } = useUser()
  // TODO make a tooltip for showing architecture
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <ContentContainer>
        <div className="my-20 w-3/4 max-w-4xl">
          {!user ? (
            <>
              <h1 className="text-2xl">Whoa there, pal.</h1>
              <p className="my-3">
                If you want to check out my portfolio page, I can only assume
                that means you want to see some of my skills. Let&apos;s start
                by showing you some authentication!
              </p>
              <button className="rounded-lg bg-gray-200 px-3 py-1 font-montserrat text-lg font-semibold transition hover:bg-cyan-600 hover:text-white">
                <Link href="/api/auth/login">Log in</Link>
              </button>
            </>
          ) : (
            <>
              <h1 className="text-2xl">
                Nice to meet you {user.given_name}, you are logged in!
              </h1>
              <p className="mt-3">
                Here are some of my works for you to check out!
              </p>
              <ul className="my-6 flex-col space-y-4">
                <li>
                  <a
                    href="https://hopesthemission.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg text-cyan-700 underline"
                  >
                    Hope&apos;s The mission
                  </a>{' '}
                  {/*TODO make this an image card link */}
                  <p>
                    Hope&apos;s the Mission is a site I built for my wife&apos;s
                    ministry, so it is very near and dear to us. It primarily
                    serves to help spread the Gospel via blog posts, community
                    events, encouragement, or resources in the community.
                  </p>
                </li>
                <li>
                  <a
                    href="https://elevationoutreach.org"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg text-cyan-700 underline"
                  >
                    Elevation Outreach
                  </a>{' '}
                  {/*TODO make this an image card link */}
                  <p>
                    Elevation Outreach is Elevation Church&apos;s outreach
                    platform that I built, where people can find out how
                    Elevation Church is impacting the community or donate to
                    Elevation Church.
                  </p>
                </li>
                <li>
                  <a
                    href="https://nasa-react.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg text-cyan-700 underline"
                  >
                    Space Launch Simulator
                  </a>
                  <p>
                    This site is in no way affiliated with NASA or SpaceX. It is
                    just for educational purposes. It is a fun little project
                    that allows the user to schedule trips to potentially
                    habitable planets that NASA has discovered. It makes use of
                    actual planetary findings from NASA&apos;s database, also
                    uses SpaceX&apos;s API for missions, and neatly packages
                    this information in Mongo DB. On the front-end we have
                    React, and Express.js on the back end.
                  </p>
                </li>
              </ul>
              <p className="mb-3">
                Of course, this just scratches the surface of work I have
                accomplished over my career, but I decided to only include a
                couple web apps that I built from scratch instead of single
                pages or bug fixes. If you have any comments or questions, feel
                free to shoot me a message over at the{' '}
                <Link href="/contact">
                  <a className="text-cyan-700 underline">contact</a>
                </Link>{' '}
                page!
              </p>
              <button className="rounded-lg bg-gray-200 px-3 py-1 font-montserrat text-lg font-semibold transition hover:bg-cyan-600 hover:text-white">
                <Link href="/api/auth/logout">Log out</Link>
              </button>
            </>
          )}
        </div>
      </ContentContainer>
    </>
  )
}
