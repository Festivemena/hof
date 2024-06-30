"use client"


import React, { useState } from 'react'
import { motion } from 'framer-motion'; 
import Image from "next/image";
import Link from 'next/link';
import Logo from "../../../web/logo.png";
import Mission from '../../../web/mission.png'
import axios from 'axios';

const page = () => {
  const [selected, setSelected] = useState(false);
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
    <div className="w-full ">
            </div>
            <div className=" h-full items-center md:mt-0 mt-6 justify-center md:mx-6 mx-6 flex-col flex md:gap-32 gap-6 font-outfit ">
              <div className="w-[100%] justify-center flex flex-col md:flex-row md:gap-10 gap-6">
                <div className="  bg-blue-100 border-2 border-red-500  md:px-4 mt-6 mx-4 shadow-solid-about rounded flex-col items-center justify-center text-center">
                <div className=" flex md:mx-40 mx-28 items-center mt-5 bg-black rounded-full w-[60px] h-[60px]">
                    <Image src={Mission} className='ml-[5px]' alt="host" width={50} height={50} />
                  </div>
                  <h1 className="md:text-xl text-xl text-violet-600 font-semibold pt-5">
                    Believer's Buildup
                  </h1>
                  <h5 className="text-sm md:text-md flex p-4 md:px-8 md:pt-5">
                  Our innovative solution at BinZ ensures the effective and hygienic collection of waste, preventing contamination and disease spread. Our smart bins create a barrier between users and collected trash, ensuring safety and cleanliness. Additionally, when a bin is full, our system promptly notifies waste collection officers for immediate pick-up, ensuring efficient and timely waste management.
                  </h5>
                </div>
                <div onClick={() => setSelected(true)} className=" bg-blue-100 border-2 border-red-500  md:px-4 mt-6 mx-4 shadow-solid-about rounded flex-col items-center justify-center text-center">
                <div className=" flex md:mx-40 mx-28 items-center mt-5 bg-black rounded-full w-[60px] h-[60px]">
                    <Image src={Mission} className='ml-[5px]' alt="host" width={50} height={50} />
                  </div>
                  <h1 className="md:text-xl text-xl text-orange-500 font-semibold pt-5">
                   Business Buildup
                  </h1>
                  <h5 className="text-sm md:text-md p-4 md:px-8 md:pt-5">
                  BinZ stands as a testament to effective waste classification. Our advanced smart bin technology ensures precise sorting of waste, maximizing recycling efficiency and minimizing environmental impact. With BinZ, waste is meticulously classified, contributing to a cleaner and more sustainable future.
                  </h5>
                </div>
                <div className=" bg-blue-100 mt-6 mx-4 border-2 border-red-500  md:px-4 shadow-solid-about rounded flex-col items-center justify-center text-center">
                  <div className=" flex md:mx-40 mx-28 items-center mt-5 bg-black rounded-full w-[60px] h-[60px]">
                    <Image src={Mission} className='ml-[5px]' alt="host" width={50} height={50} />
                  </div>
                  <h1 className="md:text-xl text-xl text-green-600 font-semibold pt-5">
                    Steward's Buildup
                  </h1>
                  <h5 className="text-sm md:text-md  p-4 md:px-8 md:pt-5">
                  With our advanced recycling solutions, you can rest assured that waste management is in capable hands. We handle the complexities of waste collection and classification, allowing you to focus on your core business and deliver exceptional results. Experience the peace of mind that comes with efficient recycling and reliable waste management, and let us take your sustainability efforts to new heights.
                  </h5>
                </div>
              </div>

              {/* <div className="w-[100%] justify-center mt-5 flex flex-col md:flex-row md:gap-10 gap-6">
                <div className="  bg-blue-100 mx-4 border-2 border-black  md:px-4 shadow-solid-about-2 rounded flex-col items-center justify-center text-center">
                  <div className=" flex md:mx-40 mx-28 items-center w-[100px] h-[50px]">
                    <img src={ui} />
                  </div>
                  <h1 className="md:text-3xl text-xl text-pink-700 font-semibold pt-5">
                    UI/UX
                  </h1>
                  <h5 className="text-sm md:text-md flex p-4 md:px-8 md:pt-5">
                    Crafting Seamless Experiences: Elevate your digital presence
                    with our exceptional UI/UX design service. Our team of
                    skilled designers combines creativity and expertise to
                    create captivating interfaces that engage users and drive
                    results. From intuitive navigation to visually stunning
                    aesthetics, we bring your vision to life, ensuring every
                    interaction is a delightful journey. Experience the power of
                    design that captivates, inspires, and leaves a lasting
                    impression.
                  </h5>
                </div>
                <div className=" bg-blue-100 border-2 border-black  md:px-4 mt-6 mx-4 shadow-solid-about-2 rounded flex-col items-center justify-center text-center">
                  <div className=" flex md:mx-40 mx-28 items-center w-[100px] h-[50px]">
                    <img src={security} />
                  </div>
                  <h1 className="md:text-3xl text-xl text-brown-500 font-semibold pt-5">
                    Cyber Security
                  </h1>
                  <h5 className="text-sm md:text-md p-4 md:px-8 md:pt-5">
                    we unravel the intricate tales of cyber threats,
                    anticipating their every move. Our proactive approach
                    identifies vulnerabilities before they can be exploited,
                    fortifying your defenses and ensuring your digital empire
                    remains impenetrable. But our mission goes beyond
                    protection. We empower you with knowledge, equipping you to
                    navigate the treacherous digital landscape. Through
                    comprehensive audits, training programs, and strategic
                    guidance, we empower you to become the hero of your own
                    cybersecurity story.
                  </h5>
                </div>
                <div className=" bg-blue-100 mt-6 mx-4 border-2 border-black  md:px-4 shadow-solid-about-2 rounded flex-col items-center justify-center text-center">
                  <div className=" flex md:mx-40 mx-28 items-center w-[100px] h-[50px]">
                    <img src={consult} />
                  </div>
                  <h1 className="md:text-3xl text-xl text-yellow-600 font-semibold pt-5">
                    Consultancy
                  </h1>
                  <h5 className="text-sm md:text-md p-4 md:px-8 md:pt-5">
                    Our consultancy services extend beyond advice. We work
                    collaboratively with your team, providing hands-on support
                    and guidance throughout the implementation process. We
                    believe in building long-lasting partnerships, and our
                    commitment to your success remains unwavering. Whether
                    you're a startup looking to disrupt the market or an
                    established enterprise seeking to stay ahead of the
                    competition, let's unlock your business potential and embark
                    on a journey of growth and success.
                  </h5>
                </div>
              </div> */}
            </div>
            </div>
  )
}


    return (
      <div className='w-full bg-[#1D232A] h-screen'>
        <div className="navbar hidden md:flex bg-base-100">
  <div className="flex-1">
  <div className="ml-10  md:flex my-3 hidden">
        <Image src={Logo} width={50} height={50} />
      </div>
      <div className=" md:hidden ml-2  my-2">
        <Image src={Logo} width={55} height={55} />
      </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-orange-500 text-xl">Flamezone Academy</a>
  </div>
  <div className="navbar-end flex-none">
    <ul className="menu menu-horizontal px-1">
    <Link href={"/about"}>
      <div className='mx-auto pr-4'>About HOF</div></Link>  
      <Link href={"/register"}>
      <div className='mx-auto pr-4'>Flamezone</div></Link>
      <Link href={"https://wa.me/+2349032865677"}>
      <div className='mx-auto pr-4'>Contact</div></Link>
      <Link href={"https://t.me/thehofglobal"}>
      <div className='mx-auto pr-4'>Sermons</div>
      </Link>
      <div className='mx-auto pr-4'>Givings</div>
      {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li> */}
    </ul>
  </div>
</div>
<div className="navbar flex md:hidden bg-base-100">
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
  <div className="flex-1">
    <a className="btn btn-ghost text-orange-500  text-xl">Flamezone</a>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
      </svg>
    </button>
  </div>
</div>
      {selected ? <Register />  : <Catalogue />}
      </div>
    )
      
  }
  

  

export default page