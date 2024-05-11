import Image from "next/image";
import Logo from "../../../web/logo.png";
import Dez from "../../../web/cut.png";
import Hi from "../../../web/hi.png";
import Bg from "../../../web/pattern.png";
import Link from "next/link";

export default function About() {
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
      <div className='mx-auto text-[#CA0000] pr-4'>About HOF</div></Link>
      <div className='mx-auto pr-4'>Register</div>
      <div className='mx-auto pr-4'>Contact</div>
      <div className='mx-auto pr-4'>Sermons</div>
      <div className='mx-auto pr-4'>Givings</div>
    </div>
  </div>
      </div> 
      <div className='w-full flex'>
      <Image src={Dez} className=" z-30" width={600} height={450} />
      <div className="mt-16 pr-12 ml-7">
        <div className="w-[850px] rounded-xl text-lg text-center text-black font-black text-pretty shadow-inner px-4 py-3 bg-white">
        HOF is a Force on a Rescue Mission to minister liberty to God’s people across Nations under the influence of darkness in any form. HOF is home for the rescued souls and an equipping centre for Called soldiers.
        </div>
        <div className="w-[850px] z-30 relative mt-4 rounded-xl text-black text-center text-pretty shadow-inner px-4 py-3 bg-white">
        I had a vision where I saw horses with soldiers on them, I looked at the frontline of this army and I saw Jesus leading this army. They were all standing, preparing or waiting for something. I looked far back and I began to see empty horses – horses without riders. I knew that was a problem! No wonder the army was not moving yet. Then Jesus said to me “Tell them I need them!”
I looked far ahead, at the other side of this army. I saw a gate with bars of Iron. I knew it was that gate the Bible described in Psalms – “He has broken the gate of brass and cut the bars of iron in sunder”. I could see through the gate and all I saw was GROSS Darkness, very thick darkness! I knew people were in it who needed to be rescued from that grip of darkness!
Months later, I was praying at home around past 10 on a Sunday morning and as I was rounding up, God spoke to me, “Raise me a people who can confront darkness!” I responded with fear “Confront Darkness? Lord, I never would want this. How would I even start? What do I know?” I just wanted to be a teacher of the Word.
To God’s glory – an apostolic mandate of Liberty, Understanding and Revival was born and kicked off on the 29th of July, 2022 in Ayobo, Lagos, Nigeria and moved to Ekosodin, Benin City, Nigeria where we hope to launch into the nations.
        </div>
     </div>
    </div>
    {/* <div className="w-full h-full items-stretch relative -mt-52">
      <Image src={Bg} width={1600} height={250} />
    </div> */}
   
    </main>
  );
}
