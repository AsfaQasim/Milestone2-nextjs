import React from 'react'
import Image from 'next/image'
<<<<<<< HEAD
=======
import home from '../../public/assets/Home.jpg'
>>>>>>> 422df26 (asfaportfolio)

const About = () => {
  return (
    <div className='bg-blue-100 min-h-screen flex flex-col items-center justify-center'>
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              I am Asifa Qasim
            </h1>
            <p className="leading-relaxed text-lg max-w-md text-gray-700 mb-8">
              Skilled in web developer with expertise in HTML, CSS, and Next.js, creating visually appealing and responsive designs. With a strong focus on UI perfection, I deliver sleek, modern web applications that prioritize user experience.
            </p>
            <div/>
            <div/>
           
               
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rounded-full">
            <Image
              className="object-cover object-center rounded-full border-4 border-blue-500 shadow-lg"
              alt="hero"
<<<<<<< HEAD
              src={('../../../assets/Home.jpg')}
=======
              src={home}
>>>>>>> 422df26 (asfaportfolio)
              width={720}
              height={120}
            />
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default About
