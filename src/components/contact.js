import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-green-400 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h1 className="text-center text-3xl font-extrabold text-gray-900">Get in touch</h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
          </p>
          <form className="mt-6 space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  defaultValue={''}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Need help?
                </a>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Privacy Policy
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className = "bi bi-cursor-fill"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    >
                    <path
                                       fillRule="evenodd"
                                       d="M0 8a.5.5 0 0 1 .5-.5h3.586L2.293 4.793a.5.5 0 0 1 .707-.707l3.5 3.5a.5.5 0 0 1 0 .707l-3.5 3.5a.5.5 0 0 1-.707-.707L4.086 8.5H.5A.5.5 0 0 1 0 8z"
                                     />
                    <path
                                       fillRule="evenodd"
                                       d="M11.5 0a.5.5 0 0 1 .5.5v3.586l-3.207-3.207a.5.5 0 1 1 .707-.707L12 3.293V.5a.5.5 0 0 1 .5-.5z"
                                     />
                    <path
                                       fillRule="evenodd"
                                       d="M16 11.5a.5.5 0 0 1-.5.5h-3.586l2.293 2.293a.5.5 0 1 1-.707.707l-3.5-3.5a.5.5 0 0 1 0-.707l3.5-3.5a.5.5 0 0 1 .707.707L12.914 8.5H15.5a.5.5 0 0 1 .5.5z"
                                     />
                    <path
                                       fillRule="evenodd"
                                       d="M4.207 13.207a.5.5 0 0 1-.707.707L3.293 12H.5a.5.5 0 0 1-.5-.5v-3.586l3.207 3.207a.5.5 0 0 1 .707 0z"
                                     />
                    </svg>
                    </span>
                    Submit
                    </button>
                    </div>
                    </form>
                    </div>
                    </div>
                    </div>
                    );
                    };
                    
                    export default ContactUs;
