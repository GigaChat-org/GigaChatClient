import { useState } from 'react';
import Nav from './Landing/nav';
import Footer from './Landing/Footer';
import Blog from './Blogs/Blog';

function Blogapp() {
  return (
   <div>
   <Nav />
    <Blog />
    <Footer />
   </div>
  )
}

export default Blogapp
