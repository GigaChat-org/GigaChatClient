import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Termsapp from './termsapp';
import Privacyapp from './privacyapp';
import Refundapp from './refundapp';
import Communityapp from './communityapp';
import Supportapp from './supportapp';
import Aboutapp from './aboutapp';
import Chatapp from './Chatapp';
import Blogapp from './Blogapp';
import CreatePost from './Blogs/CreatePost'
import EditPost from './Blogs/EditPost';
import IndexPage from './Blogs/IndexPage';
import LoginPage from './Blogs/LoginPage';
import PostPage from './Blogs/PostPage';
import ProtectedRoute from './Blogs/ProtectedRoute'
import { UserContextProvider } from './Blogs/UserContext';

function Index() {
    return (
      <div>
        <BrowserRouter>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about-us" element={<Aboutapp />} />
            <Route path="/blogs" element={<Blogapp />}>
              <Route index element={<IndexPage />} />
              <Route path="login-admin" element={<LoginPage />} />
              <Route path="create" element={<ProtectedRoute><CreatePost /></ProtectedRoute> } />
              <Route path="post/:id" element={<PostPage />} />
              <Route path="edit/:id" element={<EditPost />} />
            </Route>
            <Route path="/support" element={<Supportapp />} />
            <Route path="/chat" element={<Chatapp />} />
            <Route path='/terms' element={<Termsapp />} />
            <Route path='/privacy-policies' element={<Privacyapp />} />
            <Route path='/refund-policies' element={<Refundapp />} />
            <Route path='/community-guidelines' element={<Communityapp />} />
          </Routes>
        </UserContextProvider>
        </BrowserRouter>
      </div>
    );
  }

  export default Index