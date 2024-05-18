import Image from "next/image";
import Logo from "../../web/logo.png";
import Dez from "../../web/cut.png";
import Hi from "../../web/hi.png";
import Bg from "../../web/Pattern2.png";
import Fla from "../../web/fla.png";
import Act from "../../web/act.png";
import Pra from "../../web/pra.png";
import Intro from "../../components/home";
import Hero from "../../components/hero";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { FaFacebook, FaYoutube, FaTiktok, FaGoogle, FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="bg-black pt-4 md:pt-10 w-full h-full">
    <div className="px-2 md:px-6 flex justify-between sticky w-full">
    <Link href={"/"}>
      <div className="ml-10  md:flex hidden text-3xl">
        <Image src={Logo} width={70} height={70} />
      </div>
      <div className=" md:hidden ml-2 text-3xl">
        <Image src={Logo} width={55} height={55} />
      </div>
    </Link>
      <div className="hidden md:flex  text-white">
    <div className="justify-between flex text-lg mr-24 pt-6 px-4">
        <Link href={"/about"}>
      <div className='mx-auto pr-4'>About HOF</div></Link>  
      <div className='mx-auto pr-4'>Register</div>
      <div className='mx-auto pr-4'>Contact</div>
      <Link href={"https://t.me/thehofglobal"}>
      <div className='mx-auto pr-4'>Sermons</div>
      </Link>
      <div className='mx-auto pr-4'>Givings</div>
    </div>
  </div>
  <div className="flex md:hidden">
    <MdMenu color="#fff" size={36} />
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
    <div className="w-full h-full flex md:hidden items-stretch relative">
    <Image src={Act} width={750} height={350} />
    </div>
    <div className="w-full h-full flex md:hidden items-stretch relative">
    <Image src={Pra} width={750} height={350} />
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
