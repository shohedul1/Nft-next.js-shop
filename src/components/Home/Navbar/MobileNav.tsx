import { navLinks } from '@/constant/Constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiX } from 'react-icons/bi'

type Props = {
    nav: boolean;
    closeNav: () => void;

}
const MobileNav = ({ closeNav, nav }: Props) => {
    const ResponsiveNav = nav ? "translate-x-0" : "translate-x-[-100%] "
    return (
        <div className={`transform ${ResponsiveNav} transition-all duration-500 fixed  top-0 left-0 z-[200] h-[100vh] right-0 bottom-0 bg-lime-200`}>
            {/* Logo */}
            <div>
                <Image priority src={"/images/logo.png"} alt="Logo" width={180} height={180} />
                <BiX onClick={closeNav} className='w-8 h-8 absolute top-[2rem] text-black z-[202] right-[2rem]' />
            </div>
            {/* navLinks */}
            <div className='relative z-[201] space-y-12 flex flex-col items-center justify-center h-[60%]'>
                {
                    navLinks.map((link) => {
                        return (
                            <Link href={link.url} key={link.id}>
                                <p className='text-2xl font-semibold cursor-pointer hover:text-blue-800 transition-all duration-200 text-gray-900'>
                                    {link.label}
                                </p>
                            </Link>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default MobileNav

