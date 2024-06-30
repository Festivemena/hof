import Image from "next/image";
import Logo from "../../web/logo.png";
import Dez from "../../web/cut.png";
import Hi from "../../web/hi.png";
import Bg from "../../web/Pattern2.png";
import Fla from "../../web/fla.png";
import Act from "../../web/act.png";
import Pra from "../../web/pra.png";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { FaFacebook, FaYoutube, FaTiktok, FaGoogle, FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="bg-[#111827] w-full h-full">
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
      <div className='w-full hidden h-full md:flex'>
      <Image src={Dez} className=" pt-24 z-30" width={600} height={750} />
      <div className="-mt-16">
         <Image src={Hi} width={650} className="py-52 z-30" height={150} />
     </div>
    </div>
    <div className='w-full h-full sm:hidden flex '>
      <Image src={Dez} className=" mt-3 z-30" width={225} height={200} />
      <div className="mr-6 z-30">
         <Image src={Hi} width={320} className="mt-16 pr-6 z-30" height={400} />
     </div>
    </div>
    <div className="w-full h-full hidden md:flex items-stretch relative -mt-[220px]">
      <Image src={Bg} width={1600} height={150} />
    </div>
    <div className="w-full h-full items-stretch relative -mt-[72px] flex md:hidden">
      <Image src={Bg} width={1600} height={150} />
    </div>
    <div className="w-full h-full hidden md:flex items-stretch relative">
      <Image src={Fla} width={1600} height={350} />
    </div>
    <div className="w-full h-full hidden md:flex items-stretch relative">
    <Image src={Act} width={750} height={350} />
      <Image src={Pra} width={750} height={350} />
    </div>
    <div className="w-full h-full flex md:hidden items-stretch relative">
      <Image src={Fla} width={1600} height={350} />
    </div>
    <div className="w-full flex">
    <div className="w-full h-full flex md:hidden items-stretch relative">
    <Image src={Act} width={325} height={450} />
    </div>
    <div className="w-full h-full flex md:hidden items-stretch relative">
    <Image src={Pra} width={325} height={450} />
    </div>
    </div>
    <div className="fw-full text-center mt-2 mb-2 hidden md:flex items-center justify-center">
    <FaFacebook size={30} color="#3b5998" />
      <FaYoutube size={30} color="#ff0000" />
      <FaTiktok size={30} color="#fff" />
      <FaGoogle size={30} color="#db4437" />
      <FaWhatsapp size={30} color="#25d366" />
    </div>
    <div className="flex md:hidden w-full text-center mt-3 mb-3 items-center justify-center">
    <FaFacebook size={20} color="#3b5998" />
      <FaYoutube size={20} color="#ff0000" />
      <FaTiktok size={20} color="#fff" />
      <FaGoogle size={20} color="#db4437" />
      <FaWhatsapp size={20} color="#25d366" />
    </div>
    </main>
  );
}
