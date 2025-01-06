import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Chatting from './Chatting/Chatting';
import Termsapp from './termsapp';
import Privacyapp from './privacyapp';
import Refundapp from './refundapp';
import Communityapp from './communityapp';
import Supportapp from './supportapp';
import Aboutapp from './aboutapp';

function Index() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about-us" element={<Aboutapp />} />
            <Route path="/support" element={<Supportapp />} />
            <Route path="/chat" element={<Chatting />} />
            <Route path='/terms' element={<Termsapp />} />
            <Route path='/privacy-policies' element={<Privacyapp />} />
            <Route path='/refund-policies' element={<Refundapp />} />
            <Route path='/community-guidelines' element={<Communityapp />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  export default Index