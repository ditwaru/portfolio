import { useState } from 'react'
import ContentContainer from '../components/ContentContainer'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')

  const clearForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setName('')
    setEmail('')
    setComment('')
  }
  return (
    <ContentContainer>
      <form className="flex flex-col space-y-5">
        <h1 className="text-2xl font-bold">Send me a message!</h1>
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
            className="cursor rounded-lg border bg-cyan-500 px-5 py-1 font-semibold text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </ContentContainer>
  )
}
