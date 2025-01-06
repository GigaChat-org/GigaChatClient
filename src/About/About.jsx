import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Vision from "../assets/vision.jpg";
import Mission from "../assets/Mission.jpg";
import Value from "../assets/value.avif"

const AboutUs = () => {
  const [impactNumbers, setImpactNumbers] = useState([0, 0, 0]);

  const statsData = [
    { target: 200, title: "Monthly Active User" },
    { target: 1000, title: "Connection Made" },
    { target: 100, title: "Daily Chats" },
  ];

  const cardData = [
    {
      image: Vision,
      title: "Vision",
      description: "To create a world where conversations are limitless and free from the constraints of identity.",
    },
    {
      image: Mission,
      title: "Mission",
      description: "To provide a safe and welcoming platform for open and honest dialogues.",
    },
    {
      image: Value,
      title: "Values",
      description: "We believe in the power of genuine conversations and creating a supportive environment.",
    },
  ];

  useEffect(() => {
    // Floating animation for cards
    gsap.fromTo(
      ".floating-card",
      { y: 0 },
      { y: -20, yoyo: true, repeat: -1, duration: 2, ease: "ease-in-out" }
    );

    // Simulate number animation
    const intervals = statsData.map(({ target }, index) => {
      return setInterval(() => {
        setImpactNumbers((prev) => {
          const newNumbers = [...prev];
          if (newNumbers[index] < target) {
            newNumbers[index] += 10;
          }
          return newNumbers;
        });
      }, 30);
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white flex flex-col items-center py-16 px-4">
      {/* Title */}
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text mb-8 text-center">
        About Us
      </h1>

      {/* Description */}
      <p className="text-lg max-w-2xl text-center mb-12 text-gray-400">
        Welcome to GigaChat – where conversations come alive, and anonymity is
        your superpower. At GigaChat, we believe in the magic of genuine
        connections without the constraints of identity. Our platform fosters
        open, honest, and meaningful dialogues, allowing you to express
        yourself freely and authentically. Join us and experience the freedom
        of anonymous communication. Let's chat, connect, and grow together –
        one conversation at a time.
      </p>

      {/* Impact Numbers */}
      <div className="flex flex-wrap justify-around w-full max-w-4xl mb-12">
        {statsData.map(({ title }, index) => (
          <div key={index} className="text-center px-4 mb-4">
            <div className="text-4xl font-bold text-white">
              {impactNumbers[index]}+
            </div>
            <p className="text-gray-400">{title}</p>
          </div>
        ))}
      </div>

      {/* Floating Cards Slider */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-4xl"
      >
        {cardData.map((card, index) => (
           
          <SwiperSlide key={index} style={{display:'flex', justifyContent:"center"}}>
            <div className="floating-card w-72 bg-gray-800 rounded-lg shadow-lg p-4 transform transition-transform hover:scale-105 hover:rotate-2">
              <img
                src={card.image}
                alt={`Card ${index + 1}`}
                className="object-contain rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-400">{card.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutUs;
