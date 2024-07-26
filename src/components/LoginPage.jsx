// src/components/LoginPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';
import LoginButton from './LoginButton';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs p-8 bg-white rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Login</h2>
        <form>
          <UsernameInput />
          <PasswordInput />
          <LoginButton />
        </form>
        <div className="mt-4 text-center">
          <Link to="/register" className="text-blue-500 hover:underline">
            Don't have an account? Register here.
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

export default LoginPage;
