import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Dashimg from "../assets/Dashimg.png"

const Landing = () => {
  
  const navigate = useNavigate();

  function handleClick() {
    navigate("/chat");
  }

  const testimonials = [
    {
      quote: "I never knew anonymous chatting could be this fun! The design is smooth and intuitive, and I’ve had some of the best conversations with people I’d never have met otherwise. It feels very safe and completely anonymous, which makes it even better. It’s a great way to make new connections without any pressure. Highly recommend!",
      name: "Giga #1",
     
    },
    {
      quote: "As a lesbian, I’ve often felt hesitant to open up about my feelings, but this platform has given me a space where I can be myself without fear of judgment. I’ve had conversations with people who understand, and it’s been so relieving to share my thoughts anonymously. It’s refreshing to have such an open and safe space to express myself. I truly feel heard here.",
     name: "Giga #2",
    },
    {
      quote: "I was feeling really down after failing my exam, and I didn't know who to talk to. This app was a lifeline. I could vent and talk to strangers who listened without judgment. It really helped me clear my head and feel better. I’m grateful for this anonymous space where I could share my feelings and not feel alone.",
      name: "Giga #3",
      
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      

      {/* Main Content */}
      <main className="flex flex-col justify-center items-center space-y-6">
      
      <section className=" flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row space-y-4 h-5/6 mx-auto bg-gray-800 bg-opacity-75 p-10 rounded-lg shadow-lg bg-[url('D:./assets/background.png')] bg-cover">
      <div className='flex flex-col text-center md:text-left lg:text-left xl:text-left 2xl:text-left justify-center'>
      <div>
  <h1 className="text-5xl font-semibold text-white">Chat Anonymously,</h1>
  <h1 className="text-5xl font-semibold text-white">Talk Freely</h1>
  </div>
  <div className='my-9 flex justify-center md:justify-start lg:justify-start xl:justify-start 2xl:justify-start'>
  <p className="text-white text-xl lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:w-9/12">Get ready for an anonymous chat experience! Click on the "Start Chatting" button to join a random chat room. No sign-up required, just start chatting anonymously! Your privacy is our priority. Chat with strangers freely and securely.</p>
  </div>
  <div>
  <button onClick={handleClick} className="px-6 py-3 text-xl text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 focus:outline-none">
    Start Chatting
  </button>
  </div>
</div>
<div className=' flex justify-center'>
<img className='size-full' src={Dashimg} alt="Dashimg"/>
</div>
</section>

        {/* Review */}
        <div className="max-w-full flex flex-col justify-center items-center p-8 space-y-6 bg-black text-white">
          <div className='max-w-screen-xl w-full text-center'>
            <h1 className='text-3xl font-semibold'>Safe and fun—here's what users think</h1>
          </div> 
          <div className="sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 p-4">
            <p className="text-xl font-semibold leading-relaxed text-center">
              See why people are choosing our platform over other chat services. Here’s what they love about our safe, fun, and anonymous chat experience.
            </p>
          </div>

          <div className="py-12 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-center mb-8">What Our Users Say's !!!</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg shadow-lg transform transition-transform duration-500 bg-gray-800 text-white rotate-2 hover:rotate-0"
                  >
                    <p className="text-lg italic mb-4 text-gray-300">"{testimonial.quote}"</p>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
};

export default Landing;
