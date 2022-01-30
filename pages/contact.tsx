import { useState } from "react"

export default function Contact () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const clearForm = (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setComment('');
    }
    return (<main className='w-3/4 max-w-lg'>
        <form className='flex flex-col space-y-5'>
            <div>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' className='border rounded-lg w-full' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' id='email' className='border rounded-lg w-full' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor='comment'>Comment</label>
                <textarea name='comment' id='comment' rows={4} className='border rounded-lg w-full' value={comment} onChange={(e) => setComment(e.target.value)} />
            </div>
            <div className='flex justify-between space-x-10'>
                <button className='border rounded-lg bg-red-400 px-5 py-1 text-white font-semibold cursor' onClick={(e) => clearForm(e)}>Clear form</button>
                <button className='border rounded-lg bg-green-700 px-5 py-1 text-white font-semibold cursor' type='submit'>Submit</button>
            </div>
        </form>
    </main>)
}