import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import Blobs from '@/components/Blobs'
import CheckIcon from '@/components/CheckIcon'
import SpinnerIcon from '@/components/SpinnerIcon'
import classnames from 'classnames'

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full space-y-5">
      <CheckIcon className="w-10 h-10 mx-4 stroke-lime-500" />
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-bold text-slate-600">Thank you!</h1>
        <p className="text-lg text-slate-500">
          I will get back to you as soon as possible.
        </p>
      </div>
    </div>
  )
}

const ContactFormPresentation = ({ onSubmit, errors, isLoading, isSubmitted }) => {
  return (
    <Blobs width="w-1/2">
      <div className="relative p-12 m-10 mb-20 bg-white rounded-xl">
        { isSubmitted &&
          <div className="absolute inset-0 z-10 bg-white">
            <Success />
          </div>
        }
        <form onSubmit={onSubmit}>
          <div>
            <input
              disabled={isSubmitted || isLoading}
              className="w-full p-4 mb-10 border-2 border-white rounded-md bg-slate-100 text-slate-600 focus:outline-none focus:border-purple-500"
              id="email"
              type="email"
              placeholder="Email"
              required
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={errors}
            />
          </div>
          <div>
            <textarea
              disabled={isSubmitted || isLoading}
              rows="10"
              id="message"
              name="message"
              required
              placeholder="Your message"
              className="w-full p-4 mb-10 border-2 border-white rounded-md bg-slate-100 text-slate-600 focus:outline-none focus:border-purple-500"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={errors}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading || isSubmitted}
            className={classnames("relative px-6 py-4 text-center text-white transition duration-300 ease-in-out delay-150 bg-indigo-500 rounded-md whitespace-nowrap bg-gradient-to-tr hover:transition-all", { "hover:-translate-y-1 hover:bg-fuchsia-500": !isLoading })}
          >
            { isLoading &&
              <div className="absolute inset-0 flex items-center justify-center">
                <SpinnerIcon className="w-6 h-6 fill-white animate-spin" />
              </div>
            }
            <span className={classnames({ "opacity-0": isLoading })}>Send message</span>
          </button>
        </form>
      </div>
    </Blobs>
)
}


const ContactForm = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE)

  return(
    <ContactFormPresentation
      isLoading={state.submitting}
      isSubmitted={state.succeeded}
      errors={state.errors}
      onSubmit={handleSubmit}
    />
  )

}

export { ContactFormPresentation, Success }
export default ContactForm