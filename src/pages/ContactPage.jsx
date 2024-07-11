import React from 'react'

const ContactPage = () => {
  return (
    <div className="isolate bg-acquablue px-6 py-24 sm:py-32 lg:px-8">
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
    >
      <div
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
      />
    </div>
    <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-5xl font-bold tracking-tight text-orange-500 mb-6">Contact sales</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Have a question or need help? Fill out the form and we would get back to you as soon as possible.
        </p>
      </div>
      <form action= "#" className='mx-auto mt-16 max-w-xl sm:mt-20'>
        <div className='mb-4'>
          <label htmlFor='First Name' 
          className="block text-l font-semibold leading-6   text-gray-900">First Name</label>
          <div className="mt-2.5">
          <input placeholder="Angela" 
          id="first-name" 
          name="first-name"
          autoComplete="given-name"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               type="text"/>
               </div>
        </div>

        <div className="mb-4">
          <label htmlFor='Last Name' className="block text-l font-semibold leading-6  text-gray-900">Last Name</label>
          <div className="mt-2.5">
          <input placeholder="Boston" 
          id="last-name"
           name="last-name"
           autoComplete="family-name"
          className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' type="text"/>
          </div>
        </div>

        <div className="mb-4">
            <label htmlFor="email" className="block text-l font-semibold leading-6  text-gray-900">
              Your Email
            </label>
            <div className="mt-2.5">
              <input
              placeholder='angelaboston@gmail.com'
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="phone number" className="block text-l font-semibold leading-6  text-gray-900">
              Phone Number
            </label>
            <div className="mt-2.5">
              <input
              placeholder='+233 24 345 6839'
                id="phone number"
                name="phone number"
                type="phone number"
                autoComplete="phone number"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-l font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
              placeholder='Type your message here...'
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>

          <div className='flex justify-center'>
            <button type="submit" className='bg-orange-400 text-white font-semibold px-4 py-4 rounded-lg hover:gray-300 focus:outline-white'>Send Message</button>
          </div>
      </form>
    </div>
    
  
  )
}

export default ContactPage