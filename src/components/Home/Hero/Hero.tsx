import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='h-[calc(100vh-13vh)] w-full flex justify-center flex-col bg-red-200'>
            <div className='w-5/6 mx-auto  items-center grid grid-cols-1 lg:grid-cols-5 gap-8'>
                {/* text content */}
                <div className='col-span-2'>
                    <h1 className='text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-blue-950 font-bold'>
                        Buy,Sell and collect NFTs.
                    </h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam itaque quam corrupti esse ut quia nostrum pariatur consequuntur. Id, asperiores.
                    </p>
                    <div className='flex items-center space-x-2 mt-10 '>
                        <button className='px-8 py-3 text-center font-semibold text-white rounded-full bg-blue-900 transition-all hover:bg-blue-950'>
                            Upload
                        </button>
                        <button className='px-8 py-3 text-center font-semibold text-white rounded-full bg-rose-900 transition-all hover:bg-rose-950'>
                           Explor
                        </button>

                    </div>
                </div>
                {/* image */}
                <div className='col-span-3'>
                   <Image src={"/images/hero2.png"} alt='heror' width={700} height={700} priority/>
                </div>
            </div>
        </div>
    )
}

export default Hero