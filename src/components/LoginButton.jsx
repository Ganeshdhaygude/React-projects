// src/components/LoginButton.jsx

import React from 'react';

const LoginButton = () => {
  return (
    <div className="flex items-center justify-between">
      <button
        className="w-full px-4 py-2   font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        type="button"
      >
        logIn
      </button>
    </div>
  );
};

export default LoginButton;
