import Link from 'next/link';
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='bg-blue-50'>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

      <span className="ml-3 text-xl">Asifa M.Qasim</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Asifa M.Qasim ❤️
      <a
        href="https://twitter.com/knyttneve"
        className="text-gray-600 ml-1"
        rel="noopener noreferrer"
        target="_blank"
      >
      </a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link target='_blank' href = {'https://www.facebook.com/profile.php?id=61556456222532'}className="text-gray-500 mr-3 w-5 h-5 hover:text-blue-500">
       <FaFacebook className='hover:text-blue-500'/>
      </Link>
      
      <Link target='_blank' href = {'https://github.com/AsfaQasim?tab=repositories'}className="text-gray-500">
     
       <FaGithub className='hover:text-gray-700'/>
      </Link>
      <Link target='_blank' href = {'https://www.linkedin.com/in/asifa-muhammad-qasim-006120305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} className="text-gray-500 ml-3 w-5 h-5">
     
       <FaLinkedin className='hover:text-blue-500'/>
      </Link>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer

