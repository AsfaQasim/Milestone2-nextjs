"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import home from '../../public/assets/Home.jpg';
import Link from "next/link";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import home from '../../public/assets/Home.jpg'
>>>>>>> 422df26 (asfaportfolio)
=======


>>>>>>> 2164349 (asfaportfolio)

const Hero = () => {
  return (
    <div className="bg-blue-100 min-h-screen flex flex-col items-center justify-center">
      <section className="text-slate-900 text-center">
        <div className="container mx-auto px-5 py-24 flex flex-col items-center">
          {/* Hero Image */}
          <Image
            className="w-48 h-48 mb-8 rounded-full border-4 border-blue-500 shadow-lg"
            alt="hero"
<<<<<<< HEAD
            src={("../../../assets/Home.jpg")}
=======
            src={home}
>>>>>>> 422df26 (asfaportfolio)
            width={200}
            height={200}
          />
          
          {/* Heading and Typewriter */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">I am</h1>
          <div className="text-3xl font-semibold text-gray-900">
            <Typewriter
              options={{
                strings: ["Web Developer", "Programmer", "Video Editor"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          {/* Divider */}
          <div className="w-16 h-1 bg-blue-700 mt-4 mb-6"></div>

          {/* Description */}
          <p className="leading-relaxed text-lg max-w-md text-gray-700 mb-8">
            I specialize in crafting responsive and dynamic web interfaces with
            HTML, CSS, JavaScript, React, and Next.js. Let&abpos;s build modern, optimized web experiences together!
          </p>

          {/* Contact Button */}
          <Link href="#Contact">
            <button className="bg-blue-600 hover:bg-blue-800 text-white py-3 px-6 rounded-full transition duration-300">
              Contact Me
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};
export default Hero;
