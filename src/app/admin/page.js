"use client"

import React, { useState, useEffect } from 'react';
import { FaFacebook, FaYoutube, FaTiktok, FaGoogle, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Logo from "../../../web/bb.jpg";
import axios from 'axios';

const Dashboard = () => {
  const [currentState, setCurrentState] = useState('state1');
  const [data, setData] = useState(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const fetchData = async (state) => {
    setLoading(true);
    try {
      let response;
      switch (state) {
        case 'state1':
          response = await axios.get('https://hofapi-brad.onrender.com/api/partner');
          break;
        case 'state2':
          response = await axios.get('https://hofapi-brad.onrender.com/api/testimony');
          break;
        case 'state3':
          response = await axios.get('https://hofapi-brad.onrender.com/api/register');
          break;
        case 'state4':
          response = await axios.get('https://api.example.com/endpoint4');
          break;
        default:
          throw new Error('Invalid state');
      }
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentState);
  }, [currentState]);

  const handleStateChange = (state) => {
    setCurrentState(state);
  };

  const renderData = () => {
    if (!data) {
      return <div>No data available</div>;
    }

    switch (currentState) {
      case 'state1':
        return (
          <div>
            <h2>Partners</h2>
            {data.map((item, index) => (
            <div key={index} className=" mt-1 bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
    <p>{item.email}</p>
    <p>{item.phoneNumber}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{item.partnership}</button>
    </div>
  </div>
</div>
 ))}
          </div>
        );
      case 'state2':
        return (
          <div>
            <h2>Testimonies</h2>
            {data.map((item, index) => (
            <div key={index} className=" mt-1 bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{item.email}</h2>
    <p>{item.testimony}</p>
    <p>{item.phoneNumber}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{item.name}</button>
    </div>
  </div>
</div>
 ))}
          </div>
        );
      case 'state3':
        return (
          <div>
          <h2>Business BuildUp</h2>
          {data.map((item, index) => (
          <div key={index} className=" mt-1 bg-base-100 w-96 shadow-xl">
<div className="card-body">
  <h2 className="card-title">{item.businessName}</h2>
  <p>Name: {item.name}</p>
  <p>Email: {item.email}</p>
  <p>Phone no:{item.phoneNumber}</p>
  <p className='pt-3'>{item.proposal}</p>
  {/* <div className="card-actions justify-end">
    <button className="btn btn-primary">{item.partnership}</button>
  </div> */}
</div>
</div>
))}
        </div>
        );
      case 'state4':
        return (
          <div>
            <h2>State 4 Data</h2>
            <div className="grid grid-cols-2 gap-4">
              {data.map((item, index) => (
                <div key={index} className="p-4 border rounded shadow">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return <div>No data available</div>;
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
            <Image onClick={() => router.push('/')} className="py-1" src={Logo} width={45} height={45} alt="HOF Logo" />
            <div className='ml-3'>HOF Admin</div>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li><a className='ml-1 rounded-md bg-[#B41000]' href="/">Home</a></li>
              <li><a className='ml-1 rounded-md bg-[#B41000]' href="/flamezone">Flamezone</a></li>
              <li><a className='ml-1 rounded-md bg-[#B41000]' href="https://wa.me/+2349032865677">Contact</a></li>
              <li><a className='ml-1 rounded-md bg-[#B41000]' onClick={()=>document.getElementById('my_modal_1').showModal()}>Media</a></li>
              <li><a className='border-b-[2px] border-[#B41000]' href='/partner'>Become a Partner</a></li>
              <li><a href='/testify' className='ml-1 rounded-md bg-[#B41000]' >iTestify</a></li>
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
    <div className="flex-row lg:flex-col">
    <div className="card card-compact bg-[#B41000] mt-2 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Gallery!</h2>
  </div>
</div>
<div className="card card-compact bg-[#B41000] mt-2 shadow-xl">
  <div className="card-body">
    <h2 className="card-title ">Sermons!</h2>
  </div>
</div>
<div className="card card-compact bg-[#B41000] mt-2 shadow-xl">
  <div className="card-body"> 
    <h2 className="card-title">Videos!</h2>
  </div>
</div>
    </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-[#B41000]">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
      <div className="flex justify-center pl-2 pr-2">
        <button
          className={`btn mx-2 ${currentState === 'state1' ? 'bg-green-500' : 'bg-[#B41000]'}`}
          onClick={() => handleStateChange('state1')}
        >
          Partners
        </button>
        <button
          className={`btn mx-2 ${currentState === 'state2' ? 'bg-green-500' : 'bg-[#B41000]'}`}
          onClick={() => handleStateChange('state2')}
        >
          Testimonies
        </button>
        <button
          className={`btn mx-2 ${currentState === 'state3' ? 'bg-green-500' : 'bg-[#B41000]'}`}
          onClick={() => handleStateChange('state3')}
        >
          Business BuildUp
        </button>
        {/* <button
          className={`btn mx-2 ${currentState === 'state4' ? 'bg-green-500' : 'bg-[#B41000]'}`}
          onClick={() => handleStateChange('state4')}
        >
          State 4
        </button> */}
      </div>
      <div className="container mx-auto p-4">
        {loading ? (
          <div className="text-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div>{renderData()}</div>
        )}
      </div>
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
  );
};

export default Dashboard;
