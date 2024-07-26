// src/components/RegisterPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs p-8 bg-white rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <Link to="/" className="text-blue-500 hover:underline">
            Already have an account? Login here.
          </Link>
          <br />
          <Link to="/feeds" className="text-blue-500 hover:underline">
            Go to Feeds
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
