import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import mylogo from '../../public/assets/Mylogo.jpeg'
const Navbar = () => {
  return (
    <div className='text-gray-800 bg-blue-400 z-50 sticky top-0'>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
<<<<<<< HEAD
    <Image src = {('../../../assets/Mylogo.jpeg')} alt ="AQ" width ={50} height= {50} className='rounded-full'></Image>
=======
    <Image src = {mylogo} alt ="AQ" width ={50} height= {50} className='rounded-full'></Image>
>>>>>>> 422df26 (asfaportfolio)
      <span className="ml-3 text-xl">Asifa Qasim</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={'/'} className="mr-5 hover:text-blue-900">Home</Link>
      <Link href = {'#about'} className="mr-5 hover:text-blue-900">About</Link>
      <Link href = {'#skill'} className="mr-5 hover:text-blue-900">Skills</Link>
      <Link href={'#Project'} className="mr-5 hover:text-blue-900">Projects</Link>
      <Link href={'#Contact'} className="mr-5 hover:text-blue-900">Contact</Link>
    </nav>
  </div>
</header>

    </div>
  )
}

export default Navbar
