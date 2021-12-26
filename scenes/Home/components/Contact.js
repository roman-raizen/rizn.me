import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import Blobs from '@/components/Blobs'

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xwkyppeo")
  if (state.succeeded) {
      return <p>Thanks! I'll be back to you shortly</p>
  }
  return (
      <Blobs width="w-1/2">
        <div className="bg-white mb-20 p-12 rounded-xl m-10">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                className="bg-slate-100 mb-10 rounded-md p-4 text-slate-600 focus:outline-none focus:border-purple-500 border-2 border-white w-full"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div>
              <textarea
                rows="10"
                id="message"
                name="message"
                placeholder="Your message"
                className="bg-slate-100 mb-10 rounded-md p-4 text-slate-600 focus:outline-none focus:border-purple-500 border-2 border-white w-full"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" disabled={state.submitting} className="px-6 py-4 whitespace-nowrap rounded-md text-white bg-gradient-to-tr bg-indigo-500 hover:transition-all transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-500 duration-300">
              Send message
            </button>
          </form>
        </div>
      </Blobs>
  )
}

export default ContactForm