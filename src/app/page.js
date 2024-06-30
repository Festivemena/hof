import Image from "next/image";
import Logo from "../../web/logo.png";
import Dez from "../../web/cut.png";
import Hi from "../../web/hi.png";
import Bg from "../../web/Pattern2.png";
import Fla from "../../web/fla.png";
import Act from "../../web/act.png";
import Pra from "../../web/pra.png";
import Link from "next/link";
import Mission from '../../web/mission.png'
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
    <a className="btn btn-ghost text-orange-500 text-xl">{" "}</a>
  </div>
  <div className="navbar-end flex-none">
    <ul className="menu menu-horizontal px-1">
      <Link href={"/flamezone"}>
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
    <a className="btn btn-ghost text-orange-500  text-xl">{" "}</a>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
     <a href="/flamezone" className="pr-6 ">Flamezone</a>
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

    <div>
    <div className=" bg-blue-100 border-2 border-red-500  md:px-4 mx-4 shadow-solid-about rounded flex-col items-center justify-center text-center">
                <div className=" flex items-center w-full">
                    <Image src={Fla} className='w-full' alt="host" />
                  </div>
                  <h1 className="md:text-xl text-sm text-orange-500 font-semibold">
                   Join us for FLames Alive
                  </h1>
                </div>
    </div>
    <div className=" bg-blue-100 border-2 border-red-500  md:px-4 mx-4 shadow-solid-about rounded flex-col items-center justify-center text-center">
                <div className=" flex items-center w-full">
                    <Image src={Act} className='w-full' alt="host" />
                  </div>
                  <h1 className="md:text-xl text-sm text-orange-500 font-semibold">
                   Acts of the Believers
                  </h1>
                </div>
    <div className=" bg-blue-100 border-2 border-red-500  md:px-4 mx-4 shadow-solid-about rounded flex-col items-center justify-center text-center">
    <div className=" flex items-center w-full">
        <Image src={Pra} className='w-full' alt="host" />
      </div>
      <h1 className="md:text-xl text-sm text-orange-500 font-semibold">
       Join us for Prayer Walk
      </h1>
</div>
    
    <div className="w-full text-center mt-2 mb-2 hidden md:flex items-center justify-center">
    <FaFacebook size={30} color="#3b5998" />
      <FaYoutube size={30} color="#ff0000" />
      <FaTiktok size={30} color="#fff" />
      <FaGoogle size={30} color="#db4437" />
      <FaWhatsapp size={30} color="#25d366" />
    </div>
    <div className="flex md:hidden w-full text-center mt-3 mb-3 items-center justify-center">
    <FaFacebook size={18} color="#3b5998" />
      <FaYoutube size={18} color="#ff0000" />
      <FaTiktok size={18} color="#fff" />
      <FaGoogle size={18} color="#db4437" />
      <FaWhatsapp size={18} color="#25d366" />
    </div>
    </main>
  );
}
