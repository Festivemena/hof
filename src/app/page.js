import Image from "next/image";
import Logo from "../../HOF WEB/logo.png";
import Dez from "../../HOF WEB/cut.png";
import Hi from "../../HOF WEB/hi.png";
import Bg from "../../HOF WEB/pattern2.png";
import Fla from "../../HOF WEB/fla.png";
import Act from "../../HOF WEB/act.png";
import Pra from "../../HOF WEB/pra.png";
import Intro from "../../components/home";
import Hero from "../../components/hero";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black pt-10 w-full h-full">
    <div className="px-6 flex justify-between sticky w-full">
    <Link href={"/"}>
      <div className=" ml-10 text-3xl">
        <Image src={Logo} width={70} height={70} />
      </div>
    </Link>
      <div className=" text-white">
    <div className="justify-between text-lg flex mr-24 pt-6 px-4">
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
      </div> 
      <div className='w-full h-full flex'>
      <Image src={Dez} className=" pt-24 z-30" width={600} height={750} />
      <div className="-mt-16">
         <Image src={Hi} width={750} className="py-52 z-30" height={150} />
     </div>
    </div>
    <div className="w-full h-full items-stretch relative -mt-[290px]">
      <Image src={Bg} width={1600} height={150} />
    </div>
    <div className="w-full h-full items-stretch relative">
      <Image src={Fla} width={1600} height={350} />
    </div>
    <div className="w-full h-full flex items-stretch relative">
    <Image src={Act} width={800} height={350} />
      <Image src={Pra} width={800} height={350} />
    </div>
    <div>
      <div>tiKtok</div>
      <div>facebook</div>
    </div>
    </main>
  );
}
