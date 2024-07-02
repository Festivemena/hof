"use client"

import React, { useState } from 'react'
import { FaFacebook, FaYoutube, FaTelegram, FaGoogle, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Logo from "../../../web/bb.jpg";
import axios from 'axios';
import { GrGallery } from "react-icons/gr";
import { MdAudiotrack } from "react-icons/md";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const page = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phoneNumber: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = async (e) => {
      setLoading(true);
      e.preventDefault();
      try {
        const response = await axios.post('https://hofapi-brad.onrender.com/api/testimony', formData);
        setLoading(false);
        alert("Success")
        console.log('Partnership successful:', response.data);
      } catch (error) {
        setLoading(false);
        console.error('Error during Partnership:', error);
      }
    };
  
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
            <div className='ml-3'>iTestify</div>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li><a className='ml-1 rounded-md bg-[#B41000]' href="/">Home</a></li>
              <li><a className='ml-1 rounded-md bg-[#B41000]' href="/flamezone">Flamezone</a></li>
              <li><a className='ml-1 rounded-md bg-[#B41000]' href="https://wa.me/+2349032865677">Contact</a></li>
              <li><a className='ml-1 rounded-md bg-[#B41000]' onClick={()=>document.getElementById('my_modal_1').showModal()}>Media</a></li>
              <li><a className='bg-[#B41000]' href='/partner'>Become a Partner</a></li>
              <li><a href='/testify' className='border-b-[2px] border-[#B41000]' >iTestify</a></li>
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
      <li><a className="hover:bg-[#B41000]" onClick={()=>document.getElementById('my_modal_1').showModal()}>Media</a></li>
      <li><a className="hover:bg-[#B41000]" href='/partner'>Become a Partner</a></li>
          <li><a href='/testify' className='hover:bg-[#B41000]' >iTestify</a></li>
        </ul>
      </div>
    </div>
    <div>
    <dialog id="my_modal_1" className="modal">
    <div className="modal-box">
    <div className="flex justify-between w-full">
    <div className="card cursor-pointer card-compact mt-2 shadow-xl">
  <a href='https://www.instagram.com/thehofglobalmin/' className="card-body">
    <GrGallery size={42} color="#B41000" />
  </a>
</div>
<div className="card card-compact cursor-pointer mt-2 shadow-xl">
  <a href='https://t.me/thehofglobal' className="card-body">
   <MdAudiotrack size={42} color="#B41000" />
  </a>
</div>
<div className="card card-compact cursor-pointer mt-2 shadow-xl">
  <a href="https://www.youtube.com/@thehofglobalmin" className="card-body"> 
   <MdOutlineSlowMotionVideo size={42} color="#B41000" />
  </a>
</div>
    </div>
      <form method="dialog" className="modal-backdrop">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-[#B41000]">Close</button>
      </form>
  </div>
</dialog>
    </div>
        <div className="lg:hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:ml-16 lg:text-left">
      <h1 className="text-5xl font-bold">iTestify</h1>
      <div className="py-6">
       "I thought it good to shew the signs and wonders that the high God hath wrought toward me"
      <p>-Daniel 4:2(KJV)</p>
      </div>
    </div>
    <div className="lg:card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <form className="card-body" onSubmit={handleSubmit}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full name"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Phone Number</span>
        </label>
        <input
          type="number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Testimony</span>
          </label>
          <textarea
            name="testimony"
            value={formData.testimony}
            onChange={handleChange}
            placeholder="Your testimony"
            className="textarea textarea-bordered"
            required
          />
        </div>
      <div className="form-control mt-6">
        <button type="submit" className="btn bg-[#B41000]">
        {loading ? (
                    <span className="loading loading-ring loading-lg"></span>
                  ) : (<span>Submit</span>)}
        </button>
      </div>
    </form>
    </div>
  </div>
</div>
<footer className="footer footer-center bg-[#B41000] text-primary-content p-2 md:p-10">
  <aside>
    <Image src={Logo} width={50} height={50} />
    <p className="font-bold text-white">
      HOF Global
      <br />
    </p>
    <p className="text-white">Copyright © 2024 - All right reserved</p>
    <div className="text-white flex"><FaGoogle className="mr-1 pt-[2px]" size={16} /><p className="text-[12px] ">thehofglobal@gmail.com</p></div>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-1">
      <a href='facebook.com/thehofglobalmin'>
        <FaFacebook size={24} color="#fff" />
      </a>
      <a href='https://wa.me/+2349032865677'>
        <FaWhatsapp size={24} color="#fff" />
      </a>
      <a href='https://t.me/thehofglobal'>
        <FaTelegram size={24} color="#fff" />
      </a>
      <a href='https://www.instagram.com/thehofglobalmin/ '>
        <FaInstagram size={24} color="#fff" />
      </a>
      <a href='https://www.youtube.com/@thehofglobalmin'>
        <FaYoutube size={24} color="#fff" />
      </a> 
    </div>
  </nav>
</footer>
    </div>
  )
}

export default page