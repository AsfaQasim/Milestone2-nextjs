import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import calculatorImg from '../../../assets/my calculator.png'
import ATMIMG from '../../../assets/4.jpeg'
import Myfood from '../../../assets/food.webp'
import portfolio from '../../../assets/portfolio.jpg'
import resume from '../../../assets/images.jpeg'

const Project = () => {
  return (
    <div className='bg-blue-100 min-h-screen flex flex-col items-center justify-center'>
      <div id="Project">
        <section className="text-gray-600 body-font min-h-screen flex flex-col items-center justify-center">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex w-full mb-10 item-center justify-center">
              <h1 className="sm:text-4xl text-3xl font-bold title-font text-gray-900 lg:w-1/3 mb-4 animate-bounce">
                My Projects
              </h1>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    alt="calculator project"
                    src={calculatorImg}
                    className="object-cover object-center w-full"
                    width={501}
                    height={301}
                  />
                  <div className="p-6 hover:bg-gray-100 transition duration-300 ease-in-out">
                    <h2 className="text-xs title-font font-medium text-blue-500 mb-1">
                      My Calculator
                    </h2>
                    <h1 className="text-2xl font-bold text-gray-900 mb-3">
                      Calculator
                    </h1>
                    <p className="leading-relaxed mb-3">
                      This is a mini calculator project that I built using JavaScript.
                    </p>
                    <Link href="https://asfaminicalculator.netlify.app/">
                      View Project
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    alt="food website project"
                    src={Myfood}
                    className="object-cover object-center w-full"
                    width={501}
                    height={301}
                  />
                  <div className="p-6 hover:bg-gray-100 transition duration-300 ease-in-out">
                    <h2 className="text-xs title-font font-medium text-blue-500 mb-1">
                      Food Website
                    </h2>
                    <h1 className="text-2xl font-bold text-gray-900 mb-3">
                      My Food Website
                    </h1>
                    <p className="leading-relaxed mb-3">
                      A beautiful and responsive food website that I developed.
                    </p>
                    <Link href="https://asfaresturantweb.netlify.app/">
                      View Project
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    alt="ATM project"
                    src={ATMIMG}
                    className="object-cover object-center w-full"
                    width={501}
                    height={301}
                  />
                  <div className="p-6 hover:bg-gray-100 transition duration-300 ease-in-out">
                    <h2 className="text-xs title-font font-medium text-blue-500 mb-1">
                      ATM Project
                    </h2>
                    <h1 className="text-2xl font-bold text-gray-900 mb-3">
                      ATM CLI Project
                    </h1>
                    <p className="leading-relaxed mb-3">
                      A command-line interface project that simulates an ATM machine.
                    </p>
                    <Link href="https://github.com/AsfaQasim/ATM-cli-project..git">
                      View Project
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    alt="portfolio project"
                    src={portfolio}
                    className="object-cover object-center w-full"
                    width={501}
                    height={301}
                  />
                  <div className="p-6 hover:bg-gray-100 transition duration-300 ease-in-out">
                    <h2 className="text-xs title-font font-medium text-blue-500 mb-1">
                      Portfolio
                    </h2>
                    <h1 className="text-2xl font-bold text-gray-900 mb-3">
                      My Portfolio
                    </h1>
                    <p className="leading-relaxed mb-3">
                      A showcase of my work and skills, presented in this personal portfolio website.
                    </p>
                    <Link href="https://asifaqasimportfolio.netlify.app/">
                      View Project
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    alt="Dynamic Resume project"
                    src={resume}
                    className="object-cover object-center w-full"
                    width={501}
                    height={301}
                  />
                  <div className="p-6 hover:bg-gray-100 transition duration-300 ease-in-out">
                    <h2 className="text-xs title-font font-medium text-blue-500 mb-1">
                      Dynamic Resume 
                    </h2>
                    <h1 className="text-2xl font-bold text-gray-900 mb-3">
                      My Dynamic Resume.
                    </h1>
                    <p className="leading-relaxed mb-3">
                      A showcase of my work and skills, presented in this Dynamic resume.
                    </p>
                    <Link href="https://milestone4-smoky.vercel.app/">
                      View Project
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Project
