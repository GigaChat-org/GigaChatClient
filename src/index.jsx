import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

function Index() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  export default Index