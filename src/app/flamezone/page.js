"use client"


import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion'; 
import Image from "next/image";
import Link from 'next/link';
import Logo from "../../../web/bb.jpg";
import Mission from '../../../web/mission.png'
import axios from 'axios';
import { FaFacebook, FaYoutube, FaTiktok, FaGoogle, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const page = () => {
  const [selected, setSelected] = useState(false);
  const router = useRouter();
  const Register = () => {
    const LoginForm = () => {
      const [hovered, setHovered] = useState(false);
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        businessName: '',
        phoneNumber: '',
        proposal: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('https://hofapi-brad.onrender.com/api/register', formData);
          alert("Success")
          console.log('Registration successful:', response.data);
        } catch (error) {
          console.error('Error during registration:', error);
        }
      };
    
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="p-8 bg-gray-800 rounded-lg shadow-lg max-w-md w-full"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Register For Business BuildUp</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">Name</label>
              <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Proposed Business Name</label>
              <input 
               type="text"
               name="businessName"
               value={formData.businessName}
               onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Phone Number</label>
              <input 
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Brief Business Proposal</label>
              <textarea
               name="proposal"
               value={formData.proposal}
               onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#ff4500' }}
              whileTap={{ scale: 0.9 }}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              Register
            </motion.button>
          </form>
        </motion.div>
        {hovered && (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-red-500 opacity-70 transform -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-fire"></div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className='w-full h-screen bg-black'>
      <div className='w-full items-center justify-center'>
        <LoginForm />
      </div>
    </div>
  )
}


const Catalogue = () => {

  return (
    <div>
    <div className="w-full h-full ">
            </div>
            <div className=" h-full items-center md:mt-0 mt-6 justify-center md:mx-6 mx-6 flex-col flex pb-8 md:gap-32 gap-6 font-outfit ">
              <div className="w-[100%] justify-center flex flex-col md:flex-row md:gap-10 gap-6">
                <div className="  bg-white rounded-lg border-4 border-red-500 hover:bg-[#B41000] md:px-4 mt-6 mx-4 shadow-solid-about flex-col items-center justify-center text-center">
                {/* <div className=" flex md:mx-40 mx-28 items-center mt-5 bg-black rounded-full w-[60px] h-[60px]">
                    <Image src={Mission} className='ml-[5px]' alt="host" width={50} height={50} />
                  </div> */}
                  <h1 className="md:text-xl text-xl text-[#B41000] font-semibold pt-5">
                    Believer's Buildup
                  </h1>
                  <h5 className="text-sm md:text-md text-black flex p-4 md:px-8 md:pt-5">
                  At Flamezone Academy, we believe that a spark of faith can light up the darkest corners of the world. Our mission is to kindle that spark within each believer, equipping them with the knowledge and tools they need to grow spiritually and make a lasting impact. Through dedicated teaching and transformative experiences, we empower believers to shine their light, bringing hope, love, and inspiration to their communities and beyond. 
                  </h5>
                </div>
                <div onClick={() => setSelected(true)} className=" bg-white border-4 hover:bg-[#B41000] border-red-500  md:px-4 mt-6 mx-4 shadow-solid-about rounded-lg flex-col items-center justify-center text-center">
                {/* <div className=" flex md:mx-40 mx-28 items-center mt-5 bg-black rounded-full w-[60px] h-[60px]">
                    <Image src={Mission} className='ml-[5px]' alt="host" width={50} height={50} />
                  </div> */}
                  <h1 className="md:text-xl text-xl text-[#B41000] font-semibold pt-5">
                   Business Buildup
                  </h1>
                  <h5 className="text-sm md:text-md text-black p-4 md:px-8 md:pt-5">
                  At Flamezone Academy, we are dedicated to transforming visionary ideas into successful businesses. Our tailored programs and expert guidance provide entrepreneurs with the tools and knowledge needed to navigate the complexities of the business world. From initial concept to market triumph, we support every step of the journey, ensuring that your business vision becomes a victorious reality. 
                  </h5>
                </div>
                <div className=" bg-white mt-6 mx-4 border-4 border-red-500 hover:bg-[#B41000] md:px-4 shadow-solid-about rounded flex-col items-center justify-center text-center">
                  {/* <div className=" flex md:mx-40 mx-28 items-center mt-5 bg-black rounded-full w-[60px] h-[60px]">
                    <Image src={Mission} className='ml-[5px]' alt="host" width={50} height={50} />
                  </div> */}
                  <h1 className="md:text-xl text-xl text-[#B41000] font-semibold pt-5">
                    Steward's Buildup
                  </h1>
                  <h5 className="text-sm md:text-md text-black p-4 md:px-8 md:pt-5">
                  At Flamezone Academy, our Stewards Buildup program empowers individuals to become faithful stewards of God's gifts. Through biblical teachings and practical workshops, we help you recognize and develop your unique talents for God's glory and the service of others. Join us to fulfill your divine calling and make a lasting impact in the world for God's kingdom.
                  </h5>
                </div>
                <div className=" bg-white mt-6 mx-4 border-4 border-red-500 hover:bg-[#B41000] md:px-4 shadow-solid-about rounded flex-col items-center justify-center text-center">
                  {/* <div className=" flex md:mx-40 mx-28 items-center mt-5 bg-black rounded-full w-[60px] h-[60px]">
                    <Image src={Mission} className='ml-[5px]' alt="host" width={50} height={50} />
                  </div> */}
                  <h1 className="md:text-xl text-xl text-[#B41000] font-semibold pt-5">
                    Ministry Buildup
                  </h1>
                  <h5 className="text-sm md:text-md text-black p-4 md:px-8 md:pt-5">
                  At Flamezone Academy, our Stewards Buildup program empowers individuals to become faithful stewards of God's gifts. Through biblical teachings and practical workshops, we help you recognize and develop your unique talents for God's glory and the service of others. Join us to fulfill your divine calling and make a lasting impact in the world for God's kingdom.
                  </h5>
                </div>
              </div>
            </div>
            </div>
  )
}


    return (
      <div className='w-full bg-[#1D232A] h-screen'>
<div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="navbar bg-base-300 w-full">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>
      <div className="mx-2 flex-1 px-2">
        <Image onClick={() => router.push('/')} className="py-1" src={Logo} width={45} height={45} />
        <div className='ml-3'>Flamezone Academy</div>
      </div>
      <div className="hidden flex-none lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li><a className='ml-1 rounded-md bg-[#B41000]' href="/">Home</a></li>
          <li><a className='border-b-[2px] border-[#B41000]' href="/flamezone">Flamezone</a></li>
          <li><a className='ml-1 rounded-md bg-[#B41000]' href="https://wa.me/+2349032865677">Contact</a></li>
          <li><a className='ml-1 rounded-md bg-[#B41000]' href="https://t.me/thehofglobal">Media</a></li>
          <li><a className='ml-1 rounded-md bg-[#B41000]' href='/partner'>Become a Partner</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li><a className="hover:bg-[#B41000]" href="/">Home</a></li>
      <li><a className="hover:bg-[#B41000]" href="/flamezone">Flamezone</a></li>
      <li><a className="hover:bg-[#B41000]" href="https://wa.me/+2349032865677">Contact</a></li>
      <li><a className="hover:bg-[#B41000]" href="https://t.me/thehofglobal">Media</a></li>
      <li><a className="hover:bg-[#B41000]" href='/partner'>Become a Partner</a></li>
      <li><a className='hover:bg-[#B41000]' >iTestify</a></li>
    </ul>
  </div>
</div>
      {selected ? <Register />  : <Catalogue />}
      <footer className="footer footer-center bg-[#B41000] text-primary-content p-2 md:p-10">
  <aside>
    <Image src={Logo} width={50} height={50} />
    <p className="font-bold text-white">
      HOF Global
      <br />
    </p>
    <p className="text-white">Copyright © 2024 - All right reserved</p>
    <div className="text-white flex"><FaGoogle className="mr-1 pt-[2px]" size={12} /><p className="text-[10px] -mt-[2px]">thehofglobal@gmail.com</p></div>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-1">
      <a>
        <FaFacebook width={24} height={24} color="#fff" />
      </a>
      <a>
        <FaWhatsapp width={24} height={24} color="#fff" />
      </a>
      <a>
        <FaTiktok width={24} height={24} color="#fff" />
      </a>
      <a>
        <FaInstagram width={24} height={24} color="#fff" />
      </a>
      <a>
        <FaYoutube width={24} height={24} color="#fff" />
      </a> 
    </div>
  </nav>
</footer>
      </div>
    )
      
  }
  

  

export default page