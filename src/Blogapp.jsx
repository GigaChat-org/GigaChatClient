import { useState } from 'react';
import Nav from './Landing/nav';
import Footer from './Landing/Footer';
import { Outlet } from 'react-router-dom';

function Blogapp() {
  return (
   <div>
    <Nav />
    <Outlet />
    <Footer />
   </div>
  )
}

export default Blogapp
