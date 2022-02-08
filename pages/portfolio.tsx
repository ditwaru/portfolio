import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'
import Head from 'next/head';
import ContentContainer from '../components/ContentContainer'

export default function Portfolio() {
  const { user, error, isLoading } = useUser();
  // TODO make a tooltip for showing architecture
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <ContentContainer>
        <div className="w-3/4 max-w-4xl my-20">
          {!user ? (
            <>
              <h1 className="text-2xl">Whoa there, pal.</h1>
              <p className='my-3'>
                If you want to check out my portfolio page, I can only assume that
                means you want to see some of my skills. Let&apos;s start by showing
                you some authentication!
              </p>
              <button className='rounded-lg bg-gray-200 text-lg font-semibold font-montserrat px-3 py-1 hover:bg-cyan-600 hover:text-white transition'><Link href='/api/auth/login'>Log in</Link></button>
            </>
          ) : (
            <>
              <h1 className="text-2xl">Nice to meet you {user.given_name}, you are logged in!</h1>
              <p className='mt-3'>Here are some of my works for you to check out!</p>
              <ul className='flex-col space-y-4 my-6'>
                <li>
                  <a href="https://elevationoutreach.org" target='_blank' rel='noreferrer' className='underline text-lg text-cyan-700'>
                    Elevation Outreach
                  </a> {/*TODO make this an image card link */}
                  <p>
                    Elevation Outreach is Elevation Church&apos;s outreach platform that I built,
                    where people can find out how Elevation Church is impacting the
                    community or donate to Elevation Church. This site features a
                    Next.js front-end and a Strapi back-end. It
                    utilized Docker for containerization, Tailwind css, GraphQL
                    for data fetching, and a neat section that fetches live
                    Instagram posts using an authentication token.
                  </p>
                </li>
                <li>
                  <a href="https://hopesthemission.com" target='_blank' rel='noreferrer' className='underline text-lg text-cyan-700'>
                    Hope&apos;s The mission
                  </a> {/*TODO make this an image card link */}
                  <p>
                    This site, very similar to the previous one, features Next.js
                    on the front-end, Strapi on the backend, but this time making use of Strapi&apos;s REST API endpoints instead of GraphQL. It also uses tailwind CSS, and mongoDB. Hope&apos;s the Mission is a site I built for my wife&apos;s ministry, so it is very near and dear to us. It primarily serves to help her spread the Gospel via blog posts, community events, encouragement, or resources in the community.
                  </p>
                </li>
                <li>
                  <a href="https://hopesthemission.com" target='_blank' rel='noreferrer' className='underline text-lg text-cyan-700'>
                    Space Launch Simulator
                  </a>
                  <p>
                    This site is in no way affiliated with NASA or SpaceX. It is just for educational purposes. It is a fun little project that allows the user to schedule trips to potentially habitable planets that NASA has discovered. It makes use of actual planetary findings from NASA&apos;s database, also uses SpaceX&apos;s API for missions, and neatly packages this information in Mongo DB. On the front-end we have React, and Express.js on the back end.  
                  </p>
                </li>
              </ul>
              <p className='mb-3'>Of course, this just scratches the surface of work I have accomplished over my career, but I decided to only include a couple web apps that I built from scratch instead of single pages or bug fixes. If you have any comments or questions, feel free to shoot me a message over at the <Link href='/contact'><a className='underline text-cyan-700'>contact</a></Link> page!</p>
              <button className='rounded-lg bg-gray-200 text-lg font-semibold font-montserrat px-3 py-1 hover:bg-cyan-600 hover:text-white transition'><Link href='/api/auth/logout'>Log out</Link></button>
            </>
          )}
        </div>
      </ContentContainer>
    </>
  )
}
