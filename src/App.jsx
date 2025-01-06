import { useState } from 'react';
import './App.css';
import Landing from "./Landing/Landing";
import Footer from './Landing/Footer';
import Nav from './Landing/nav';

function App() {
  return (
   <div>
    <Nav />
    <Landing />
    <Footer />
   </div>
  )
}

export default App
