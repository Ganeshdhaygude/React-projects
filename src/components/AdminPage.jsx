// src/components/AdminPage.jsx

import React, { useState } from 'react';

const AdminPage = ({ posts, approvePost, deletePost }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">Admin - Manage Posts</h2>
        <div className="mt-4">
          {posts.length > 0 ? (
            <ul>
              {posts.map((post) => (
                <li key={post.id} className="p-2 my-2 bg-gray-200 rounded flex justify-between items-center">
                  <span>{post.content}</span>
                  <div>
                    {!post.approved && (
                      <button
                        className="ml-4 px-2 py-1 text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
                        onClick={() => approvePost(post.id)}
                      >
                        Approve
                      </button>
                    )}
                    <button
                      className="ml-4 px-2 py-1 text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
                      onClick={() => deletePost(post.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-600">No posts yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
