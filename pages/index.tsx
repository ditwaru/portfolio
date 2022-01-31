import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [typing, setTyping] = useState(true)
  return (
    <div className="flex w-screen items-center justify-center ">
      <Head>
        <title>Daniel Itwaru</title>
      </Head>
      <section className="relative z-20 text-center text-white">
        <div className="inline-block">
          <h1
            className="animate-type overflow-hidden whitespace-nowrap border-r font-montserrat text-4xl font-bold sm:text-5xl"
            onAnimationEnd={() => {
              setTyping(false)
            }}
          >
            Daniel Itwaru
          </h1>
        </div>
        <p
          className={`mt-3 transition-all duration-1000 ${
            typing && 'opacity-0'
          } px-6 transition-all ${!typing && 'opacity-100'}`}
        >
          Full stack web developer and JavaScript enthusiast.
        </p>
      </section>
      <div className="absolute h-screen w-full">
        <Image
          alt="laptop background image"
          layout="fill"
          objectFit="cover"
          src="/laptop-background.webp"
        />
      </div>
    </div>
  )
}
