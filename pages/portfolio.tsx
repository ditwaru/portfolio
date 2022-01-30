import ContentContainer from '../components/ContentContainer'
import { useState } from 'react'

export default function Portfolio() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <ContentContainer>
      <div className="w-3/4 max-w-4xl">
        {!loggedIn ? (
          <>
            <h1 className="text-2xl">Whoa there, pal.</h1>
            <p>
              If you want to check out my portfolio page, I can only assume that
              means you want to see some of my skills. Let's start by showing
              you some authentication!
            </p>
            <div className="mt-3 flex justify-between">
              <button>Log in</button>
              <button>Log out</button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-2xl">Congrats {'user'}, you are logged in!</h1>
            <p>Here are some of my works for you to check out!</p>
            <ul>
              <li>
                <a href="https://elevationoutreach.org">
                  https://elevationoutreach.org
                </a>
                <p>
                  Elevation Outreach is Elevation Church's outreach platform,
                  where people can out how Elevation Church is impacting the
                  community or donate to Elevation Church. This site features a
                  Next.js front-end and a Strapi back-end/headleess cms. It
                  utilized Docker for containerization, Tailwind css, GraphQL
                  for data fetching, and a neat section that fetches live
                  Instagram posts using an authentication token.
                </p>
              </li>
              <li>
                <a href="https://hopesthemission.com">
                  https://hopesthemission.com
                </a>
                <p>
                  This site, very similar to the previous one, features Next.js
                  and{' '}
                </p>
              </li>
            </ul>
          </>
        )}
      </div>
    </ContentContainer>
  )
}
