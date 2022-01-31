import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex justify-center items-center w-screen '>
      <Head>
        <title>Daniel Itwaru&apos;s website</title>
      </Head>
      <section className='text-white relative z-20 text-center'>
        <h1 className='font-montserrat font-bold text-4xl sm:text-5xl'>Daniel Itwaru</h1>
        <p className='mt-3 px-6'>Full stack web developer and JavaScript enthusiast.</p>
      </section>
      <div className='h-screen w-full absolute'>
          <Image alt='laptop background image' layout='fill' objectFit='cover' src='/laptop-background.webp' />
      </div>
    </div>)
}