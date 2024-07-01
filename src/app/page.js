"use client"

import Image from "next/image";
import Log from "../../web/logo.png"
import Logo from "../../web/bb.jpg";
import { useRouter } from 'next/navigation';
import Dez from "../../web/cut.png";
import Hi from "../../web/app.jpg";
import Bg from "../../web/apsp.jpg";
import Fla from "../../web/fla.png";
import Act from "../../web/act.png";
import Pra from "../../web/pra.png";
import Link from "next/link";
import Mission from '../../web/mission.png'
import { MdMenu } from "react-icons/md";
import { FaFacebook, FaYoutube, FaTiktok, FaGoogle, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Home() {
  const router = useRouter();
  return (
    <main className="bg-[#111827] w-full h-full">
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
        <Image className="py-1" src={Log} width={45} height={45} />
      </div>
      <div className="hidden flex-none lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li><a className=" rounded-md bg-[#B41000]" href="/flamezone">Flamezone</a></li>
          <li><a className=" ml-1 rounded-md bg-[#B41000]" href="https://wa.me/+2349032865677">Contact</a></li>
          <li><a className=" ml-1 rounded-md bg-[#B41000]" href="https://t.me/thehofglobal">Media</a></li>
          <li><a className=" ml-1 rounded-md bg-[#B41000]" href='/partner'>Become a Partner</a></li>
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
      <li><a className="hover:bg-[#B41000]" href="https://t.me/thehofglobal">Media</a></li>
      <li><a className="hover:bg-[#B41000]" href='/partner'>Become a Partner</a></li>
      <li><a href='/testify' className='hover:bg-[#B41000]' >iTestify</a></li>
    </ul>
  </div>
</div>
<div className="hero bg-base-200 h-full">
  <div className=" w-full flex-col lg:flex-row">
    <Image onClick={() => router.push('/')}
      src={Hi} width={1400} height={500}
      className="w-full flex lg:hidden  rounded-lg shadow-2xl" />
      <Image onClick={() => router.push('/')}
      src={Bg} width={1400} height={500}
      className="w-full hidden lg:flex rounded-lg shadow-2xl" />
    <div>
      {/* <h1 className="text-5xl font-bold">Hello There!</h1>
      <p className="py-6">
       Welcome to The House of Flames; Home of Revelation, Revival
      </p>
      <button className="btn btn-primary">Learn More</button> */}
    </div>
  </div>
</div>
<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <Image width={320} height={500}
      src={Fla} 
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <Image width={320} height={500}
      src={Pra}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <Image width={320} height={500}
      src={Fla}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <Image width={320} height={500}
      src={Act}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
{/* Recommended Sermons */}
<div>
  {/* card */}
</div>
    <footer className="footer footer-center bg-black text-primary-content p-2 md:p-10">
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
    </main>
  );
}
