import React from 'react'

function Contact() {
  return (
    <div className='flex h-screen items-center justify-center flex-col'>
        <h4 className=" font-bold text-3xl">Contact Us</h4>

        <div className='mt-4 space-y-2'>
        <span> Name </span>
        <br/>
        <input type='text' placeholder='Enter your fullname' className='w-80 px-3 py-1 border rounded-md outline-none'/>
    </div>

    <div className='mt-4 space-y-2'>
        <span> Email </span>
        <br/>
        <input type='text' placeholder='Enter your Email' className='w-80 px-3 py-1 border rounded-md outline-none'/>
    </div>

    <div className='mt-4 space-y-2'>
        <label htmlFor='message'>Message</label>
        <br />
        <textarea
          id='message'
          placeholder='Enter your message'
          className='w-80 px-3 py-1 border rounded-md outline-none'/>
      </div>

      <div className='flex justify-around mt-4'>
        <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'> Contact </button>
    </div>
        </div>
  )
}

export default Contact