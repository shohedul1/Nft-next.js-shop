import React from 'react'
import CrateSellNftCard from './CrateSellNftCard'

const CreateSellNft = () => {
  return (
    <div className='pt-16 pb-20'>
        <h1 className='text-center font-bold text-3xl p-2 md:text-4xl text-blue-950'>
        Create and sell your NFTs
        </h1>
        <div className='w-[80%] mt-8 md:mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12'>
           <div>
           <CrateSellNftCard 
           image="/images/p1.png"
           title="1. Set up your wallet"
           />
           </div>
           <div>
           <CrateSellNftCard 
           image="/images/p2.png"
           title="2. Set up your collection"
           />
           </div>
           <div>
           <CrateSellNftCard 
           image="/images/p3.png"
           title="3. Add your NFTs"
           />
           </div>
           <div>
           <CrateSellNftCard 
           image="/images/p4.png"
           title="4. List them for Sale"
           />
           </div>
        </div>
        
    </div>
  )
}

export default CreateSellNft