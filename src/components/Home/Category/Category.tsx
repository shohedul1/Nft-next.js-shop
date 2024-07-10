import React from 'react'
import CategorySlider from './CategorySlider'

const Category = () => {
    return (
        <div className='pt-16 pb-12'>
            <h1 className='text-center font-bold p-2 md:text-4xl text-blue-950'>
                Trending Categories
            </h1>
            <div className='w-[80%] mx-auto md:mt-12'>
                {/* Categoryslider */}
                <CategorySlider />
            </div>
        </div>
    )
}

export default Category