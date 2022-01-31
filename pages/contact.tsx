import { useState } from 'react'
import { useForm } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import ContentContainer from '../components/ContentContainer'
import Head from 'next/head';


export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')
  const [formSubmitted, handleFormSubmit] = useForm("xnqwppnp");

  const clearForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setName('')
    setEmail('')
    setComment('')
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <Head>
        <title>Contact me</title>
      </Head>
      {formSubmitted.succeeded && <p className='text-center bg-green-50 border p-4 rounded-lg'>
        <FontAwesomeIcon className='text-green-400' icon={faCheckCircle} /> Your comment was sent!</p>}
      <ContentContainer>
        <form className="my-20" onSubmit={handleFormSubmit}>
          <h1 className="text-2xl font-bold font-montserrat">Send me a message!</h1>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full rounded-lg border p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full rounded-lg border p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="comment">Comment</label>
            <textarea
              name="comment"
              id="comment"
              rows={4}
              className="w-full rounded-lg border p-2"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div className="flex justify-between space-x-10">
            <button
              className="cursor rounded-lg border bg-red-400 px-5 py-1 font-semibold text-white"
              onClick={(e) => clearForm(e)}
            >
              Clear form
            </button>
            <button
              className="cursor rounded-lg border bg-cyan-600 px-5 py-1 font-semibold text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </ContentContainer>
    </div>
  )
}
