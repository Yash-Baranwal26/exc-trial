import React from 'react';
import { FiGithub } from 'react-icons/fi';

export default function AuthenticationPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-700 border-b border-white">
        <div className="flex space-x-8">
          <a href="#" className="text-gray-400 hover:text-white">Examples</a>
          <a href="#" className="text-gray-400 hover:text-white">Mail</a>
          <a href="#" className="text-gray-400 hover:text-white">Dashboard</a>
          <a href="#" className="text-gray-400 hover:text-white">Tasks</a>
          <a href="#" className="text-gray-400 hover:text-white">Playground</a>
          <a href="#" className="text-gray-400 hover:text-white">Forms</a>
          <a href="#" className="text-gray-400 hover:text-white">Music</a>
          <a href="#" className="text-gray-400 hover:text-white font-semibold border-b-2 border-white">Authentication</a>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex h-[calc(100vh-120px)] m-8 border border-white rounded-lg p-6">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-900 flex flex-col items-start pt-8 pl-8">
          <h1 className="text-3xl font-semibold">⌘ Acme Inc</h1>
          <div className="flex-grow"></div>
          <p className="text-gray-400 text-center max-w-xs mb-8">
            Acme Inc
            "This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before."
            
            Sofia Davis
          </p>
        </div>

        {/* Authentication Form */}
        <div className="w-2/3 flex flex-col items-center bg-black p-10 border-l border-white relative">
          {/* Login label aligned to top-right */}
          <div className="absolute top-4 right-4">
            <h2 className="text-lg font-medium">Login</h2>
          </div>

          <div className="w-full max-w-md space-y-6 pt-20">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-gray-400">
              Enter your email below to create your account
            </p>

            {/* Email Input */}
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-500 mt-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />

            {/* Sign In Button */}
            <button className="w-full bg-white text-black font-semibold py-2 rounded mt-4 hover:bg-gray-200">
              Sign In with Email
            </button>

            {/* Divider */}
            <div className="flex items-center mt-6">
              <hr className="flex-grow border-gray-600" />
              <span className="mx-4 text-gray-400">OR CONTINUE WITH</span>
              <hr className="flex-grow border-gray-600" />
            </div>

            {/* GitHub Sign In */}
            <button className="w-full flex items-center justify-center bg-gray-700 text-white font-semibold py-2 rounded mt-4 hover:bg-gray-600">
              <FiGithub className="mr-2" /> GitHub
            </button>

            {/* Terms and Privacy Policy */}
            <p className="text-xs text-gray-500 mt-8">
              By clicking continue, you agree to our{' '}
              <a href="#" className="text-gray-400 underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-gray-400 underline">
                Privacy Policy
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
