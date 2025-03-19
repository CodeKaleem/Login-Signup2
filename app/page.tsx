'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';



export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      ></motion.div>

      {/* Background Boxes Animation */}
      <div className="absolute inset-0 grid grid-cols-25 p-4">
        {Array.from({ length: 500 }).map((_, index) => (
          <motion.div
            key={index}
            className="w-16 h-16 rounded-lg"
            whileHover={{
              scale: 1.2,
              backgroundColor:'black',
              transition: { duration: 0.3 },
            }}
          ></motion.div>
        ))}
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 bg-white shadow-2xl rounded-2xl p-10 w-full max-w-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
          {isSignIn ? 'Welcome Back!' : 'Create an Account'}
        </h1>

        {/* Form */}
        {isSignIn ? (
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition font-semibold"
            >
              Sign In
            </button>
          </motion.form>
        ) : (
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition font-semibold"
            >
              Sign Up
            </button>
          </motion.form>
        )}

        {/* Toggle Button */}
        <div className="mt-6 text-center">
          <motion.button
            onClick={() => setIsSignIn(!isSignIn)}
            className="text-blue-500 hover:underline font-medium"
            whileHover={{ scale: 1.1 }}
          >
            {isSignIn ? 'Don’t have an account? Sign Up' : 'Already have an account? Sign In'}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}