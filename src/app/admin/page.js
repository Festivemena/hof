"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaFacebook, FaYoutube, FaTiktok, FaGoogle, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Logo from "../../../web/bb.jpg";

const Page = () => {
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">
              <Image onClick={() => router.push('/')} className="py-1 cursor-pointer" src={Logo} width={45} height={45} alt="Logo" />
              <div className='ml-3'>Admin</div>
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li><a className="rounded-md bg-[#B41000]" href="/flamezone">Flamezone</a></li>
                <li><a className="ml-1 rounded-md bg-[#B41000]" href="https://wa.me/+2349032865677">Contact</a></li>
                <li><a className="ml-1 rounded-md bg-[#B41000]" href="https://t.me/thehofglobal">Media</a></li>
                <li><a className="ml-1 rounded-md bg-[#B41000]" href='/partner'>Become a Partner</a></li>
                <li><a href='/testify' className='hover:bg-[#B41000]' >iTestify</a></li>
              </ul>
            </div>
          </div>

          <div className="p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Business Proposals Section */}
              <div className="bg-white p-4 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Business Proposals</h2>
                {data ? (
                  <div className="space-y-4">
                    {data.map((item, index) => (
                      <div key={index} className="p-4 bg-gray-100 rounded shadow-md">
                        <p><strong>Name:</strong> {item.name}</p>
                        <p><strong>Email:</strong> {item.email}</p>
                        <p><strong>Business Name:</strong> {item.businessName}</p>
                        <p><strong>Phone Number:</strong> {item.phoneNumber}</p>
                        <p><strong>Proposal:</strong> {item.proposal}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>Loading...</p>
                )}
              </div>

              {/* Prayers Section */}
              <div className="bg-white p-4 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Prayers</h2>
                <p>Prayer content goes here...</p>
              </div>

              {/* Testimonies Section */}
              <div className="bg-white p-4 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Testimonies</h2>
                <p>Testimonies content goes here...</p>
              </div>

              {/* Partners Section */}
              <div className="bg-white p-4 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Partners</h2>
                <p>Partners content goes here...</p>
              </div>
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
            <li><a href='/testify' className='hover:bg-[#B41000]' >iTestify</a></li>
          </ul>
        </div>
      </div>

      <footer className="footer footer-center bg-primary text-primary-content p-2 md:p-10">
        <aside>
          <Image src={Logo} width={50} height={50} alt="Logo" />
          <p className="font-bold">
            HOF Global
            <br />
          </p>
          <p>Copyright © 2024 - All right reserved</p>
          <div className="text-white flex">
            <FaGoogle className="mr-1 pt-[2px]" size={12} />
            <p className="text-[10px] -mt-[2px]">thehofglobal@gmail.com</p>
          </div>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-1">
            <a>
              <FaFacebook width={24} height={24} />
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
  );
}

export default Page;
