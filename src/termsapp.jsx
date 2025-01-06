import { useState } from 'react';
import Footer from './Landing/Footer';
import Nav from './Landing/nav';
import TermsAndConditions from './Terms/Termspolicies';

function Termsapp() {
  return (
   <div>
    <Nav />
    <TermsAndConditions />
    <Footer />
   </div>
  )
}

export default Termsapp