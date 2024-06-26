import React from 'react'

const ContactUs = () => {
  return (
    <div name="contactus" class="w-full text-gray-700 bg-gradient-to-b from-red-600 to-red-800 body-font pb-24">

      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Contact Us</h1>
        <h3 class="w-full my-2 text-xl font-bold leading-tight text-center text-gray-600 pt-10">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</h3>
        <form action="#" class="space-y-8">
          <div>
            <label for="email" class="block mb-2 text-lg font-medium text-gray-900 ">Your email</label>
            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
          </div>
          <div>
            <label for="subject" class="block mb-2 text-lg font-medium text-gray-900 ">Subject</label>
            <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let us know how we can help you" required />
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block mb-2 text-lg font-medium text-gray-900 ">Your message</label>
            <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit"

            class="mx-auto lg:mx-0  bg-white text-gray-800 font-bold rounded-full mt-3 lg:mt-0 py-2 px-4 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >Send message</button>
        </form>
      </div>

    </div>
  )
}

export default ContactUs