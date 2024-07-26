// src/components/FeedsPage.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FeedsPage = ({ posts, setPosts }) => {
  const [newPost, setNewPost] = useState('');
  const [viewMyPosts, setViewMyPosts] = useState(false);

  const handlePostChange = (e) => {
    setNewPost(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        content: newPost,
        user: 'me', // Assuming 'me' represents the current user
        approved: false, // New posts are not approved by default
      };
      setPosts([...posts, post]);
      setNewPost('');
    }
  };

  const toggleViewMyPosts = () => {
    setViewMyPosts(!viewMyPosts);
  };

  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const approvePost = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, approved: true } : post
      )
    );
  };

  const filteredPosts = posts.filter(
    (post) => post.user === 'me' || post.approved
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">Feeds</h2>
        <form onSubmit={handlePostSubmit}>
          <textarea
            className="w-full p-2 mb-4 text-gray-700 border rounded focus:outline-none focus:shadow-outline"
            rows="4"
            placeholder="What's on your mind?"
            value={newPost}
            onChange={handlePostChange}
          />
          <button
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Post
          </button>
        </form>
        <div className="mt-4 flex justify-between">
          <button
            className={`px-4 py-2 font-bold rounded ${viewMyPosts ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} focus:outline-none focus:shadow-outline`}
            onClick={toggleViewMyPosts}
          >
            {viewMyPosts ? 'View All Posts' : 'View My Posts'}
          </button>
          <Link to="/admin" className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-700 focus:outline-none focus:shadow-outline">
            Admin
          </Link>
        </div>
        <div className="mt-4">
          {filteredPosts.length > 0 ? (
            <ul>
              {filteredPosts.map((post) => (
                <li key={post.id} className="p-2 my-2 bg-gray-200 rounded flex justify-between items-center">
                  <span>{post.content}</span>
                  {post.user === 'me' && (
                    <>
                      <button
                        className="ml-4 px-2 py-1 text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
                        onClick={() => deletePost(post.id)}
                      >
                        Delete
                      </button>
                      {!post.approved && (
                        <button
                          className="ml-4 px-2 py-1 text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
                          onClick={() => approvePost(post.id)}
                        >
                          Approve
                        </button>
                      )}
                    </>
                  )}
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

export default FeedsPage;
