"use client"

import React from 'react'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from "../../../web/bb.jpg";
import { FaFacebook, FaYoutube, FaTiktok, FaGoogle, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();
    const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://hofapi-brad.onrender.com/api/register'); // Replace with your backend endpoint
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="p-4">
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
        <div className='ml-3'>Admin</div>
      </div>
      <div className="hidden flex-none lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li><a className=" rounded-md bg-[#B41000]" href="/flamezone">Flamezone</a></li>
          <li><a className=" ml-1 rounded-md bg-[#B41000]" href="https://wa.me/+2349032865677">Contact</a></li>
          <li><a className=" ml-1 rounded-md bg-[#B41000]" href="https://t.me/thehofglobal">Media</a></li>
          <li><a className=" ml-1 rounded-md bg-[#B41000]" href='/partner'>Become a Partner</a></li>
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
    {data ? (
        <div>
            <div className="space-y-4 ">
                {data.map((item, index) => (
                    <div key={index} className="p-4 bg-slate-600 rounded shadow-md">
                        <p><strong>Name:</strong> {item.name}</p>
                        <p><strong>Email:</strong> {item.email}</p>
                        <p><strong>Business Name:</strong> {item.businessName}</p>
                        <p><strong>Phone Number:</strong> {item.phoneNumber}</p>
                        <p><strong>Proposal:</strong> {item.proposal}</p>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <p className='h-screen'>Loading...</p>
    )}
     <footer className="footer footer-center bg-primary text-primary-content p-2 md:p-10">
  <aside>
    <Image src={Logo} width={50} height={50} />
    <p className="font-bold">
      HOF Global
      <br />
    </p>
    <p>Copyright © 2024 - All right reserved</p>
    <div className="text-white flex"><FaGoogle className="mr-1 pt-[2px]" size={12} /><p className="text-[10px] -mt-[2px]">thehofglobal@gmail.com</p></div>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-1">
      <a>
        <FaFacebook width={24} height={24} color="" />
      </a>
      <a>
        <FaWhatsapp width={24} height={24} />
      </a>
      <a>
        <FaTiktok width={24} height={24} />
      </a>
      <a>
        <FaInstagram width={24} height={24} />
      </a>
      <a>
        <FaYoutube width={24} height={24} />
      </a>
    </div>
  </nav>
</footer>
</div>
  )
}

export default page

