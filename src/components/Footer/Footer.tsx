import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitch, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='pt-12 pb-12'>
      <div className='w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start border-b-[1.5px] border-b-slate-300'>
        {/* frist  part */}
        <div>
          <div className='text-2xl text-red-700 font-semibold mb-4'>
            NFTFY Shop
          </div>
          <p className="text-gray-700 text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ab ipsa quisquam!
          </p>
          <div className='mt-4 flex items-center space-x-4'>
            <FaFacebook className='w-6 h-6 text-blue-700 hover:text-blue-800' />
            <FaTwitch className='w-6 h-6 text-sky-500  hover:text-sky-800' />
            <FaYoutube className='w-6 h-6 text-rose-700  hover:text-rose-800' />
            <FaInstagram className='w-6 h-6 text-pink-700  hover:text-pink-800' />

          </div>
        </div>
        {/* 2nd part */}

        <div className='xl:mx-auto md:mx-auto lg:mx-0 mx-0 flex flex-col'>
          <h1 className='footer_title'>all NFTS </h1>
          <Link className='footer_link' href={"#"}>Explor</Link>
          <Link className='footer_link' href={"#"}>About</Link>
          <Link className='footer_link' href={"#"}>Contack Us</Link>
          <Link className='footer_link' href={"#"}>Our Blog</Link>
          <Link className='footer_link' href={"#"}>FAQ</Link>
        </div>

        {/* 3rd part */}
        <div className='flex flex-col xl:mx-auto '>
          <h1 className='footer_title'>Company</h1>
          <Link className='footer_link' href={"#"}>Explor</Link>
          <Link className='footer_link' href={"#"}>About</Link>
          <Link className='footer_link' href={"#"}>Contack Us</Link>
          <Link className='footer_link' href={"#"}>Our Blog</Link>
          <Link className='footer_link' href={"#"}>FAQ</Link>
        </div>
        {/* 4th part */}
        <div className='xl:mx-auto md:mx-auto lg:mx-0 mx-0 flex flex-col'>
          <h1 className='footer_title'>My Account </h1>
          <Link className='footer_link' href={"#"}>Authors</Link>
          <Link className='footer_link' href={"#"}>Collections</Link>
          <Link className='footer_link' href={"#"}>Author Profile</Link>
          <Link className='footer_link' href={"#"}>Create item</Link>
          <Link className='footer_link' href={"#"}>NFT Profile</Link>
        </div>
      </div>
      <div className='text-center mt-4 text-sm text-black opacity-75'>Copyright @ 2024 webdev warriros</div>
    </div >
  )
}

export default Footer