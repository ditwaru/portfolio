import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import ContentContainer from '../../components/ContentContainer'

export default function Professional() {
  return (
    <div className="w-3/4 max-w-4xl py-20">
      <div className="flex justify-between pb-12">
        <Link href="/about">
          <a>
            <FontAwesomeIcon icon={faLongArrowAltLeft} /> About
          </a>
        </Link>
        <Link href="/about/personal">
          <a>
            Personal <FontAwesomeIcon icon={faLongArrowAltRight} />
          </a>
        </Link>
      </div>
      <ContentContainer>
        <section>
          <h1 className="mb-3 text-2xl font-semibold">Salutations!</h1>
          <p>
            As you have probably noticed, my name is Daniel Itwaru. I'm a full
            stack web developer that specializes in react and node.js. To prove
            that point, this website was built using Next.js, my all-time
            favorite react framework.
          </p>
          <p className="my-3">
            My career has taken me all over the place; from music, to math, to
            education, to tech, and landing in development. My professional
            experience started as a high school math teacher, where I learned a
            lot about critical thinking, classroom management, teamwork,
            collaboration, and well, teenagers. When I made the move into the
            world of technology I fell in love with development.
          </p>
          <h3 className="text-2xl font-semibold">My development backstory:</h3>
          <p>
            I started programming back in 2019. I learned a few different
            programming languages in my initial studies like HTML, CSS, JS, C,
            C#, Python, and even PHP, but ultimately JavaScript became my
            favorite. When I got hired by Velocitor Solutions with the title of
            Software Engineer, I grew a lot in my time there and learned a lot
            about agile workflow, debugging, REST APIs, Git, and I had a lot of
            opportunity to sharpen my HTML, CSS, and JS skills significantly. In
            2021 I started working for Elevation Church where my title is
            currently Backend Web Developer and my skills really took flight. At
            first I started out learning about wordpress and PHP, and other
            miscellaneous wordpress plugins, but as time progressed I learned a
            lot about some incredibly cutting edge technology like React and
            Next.js, Node.js, ES6 syntax, Typescript, Docker, MongoDB, Mongoose,
            GraphQL, Auth0, Strapi, Tailwind CSS, and many more.
          </p>
          <p className="mt-3">
            Check out my{' '}
            <Link href="/portfolio">
              <a className="text-cyan-600 underline">portfolio</a>
            </Link>{' '}
            if you'd like to see some of my work!
          </p>
        </section>
      </ContentContainer>
    </div>
  )
}
