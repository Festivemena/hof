import React from 'react'
import Link from 'next/link'

const Intro = () => {
  return (
    <div className=" text-white py-8">
    <div className="justify-between flex px-4">
        <Link href={"/about"}>
      <div className='mx-auto pr-4'>About HOF</div></Link>
      <div className='mx-auto'>Register</div>
      <div className='mx-auto'>Contact</div>
      <div className='mx-auto'>Sermons</div>
      <div className='mx-auto pl-6'>Givings</div>
    </div>
  </div>
  )
}

export default Intro