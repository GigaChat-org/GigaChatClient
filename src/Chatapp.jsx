import { useState } from 'react';
import Chatting from './Chatting/Chatting';
import Nav from './Landing/nav';
import Footer from './Landing/Footer';

function Chatapp() {
  return (
   <div>
   <Nav />
    <Chatting />
    <Footer />
   </div>
  )
}

export default Chatapp
