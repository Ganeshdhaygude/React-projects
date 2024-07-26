// src/App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import FeedsPage from './components/FeedsPage';
import AdminPage from './components/AdminPage';

function App() {
  const [posts, setPosts] = useState([]);

  const approvePost = (postId) => {
    setPosts(posts.map((post) =>
      post.id === postId ? { ...post, approved: true } : post
    ));
  };

  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/feeds" element={<FeedsPage posts={posts} setPosts={setPosts} />} />
          <Route path="/admin" element={<AdminPage posts={posts} approvePost={approvePost} deletePost={deletePost} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
