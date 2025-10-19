'use client'
import { assets } from '@/assets/assets'
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import CategoriesMarquee from './CategoriesMarquee'

const Hero = () => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'

    return (
        <div className='mx-6'>
            <div className='flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-10'>
                <div className='relative flex-1 flex flex-col bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] rounded-3xl xl:min-h-100 group shadow-2xl'>
                    <div className='p-5 sm:p-16'>
                        <div className='inline-flex items-center gap-3 bg-[#1e1e1e] text-[#00FFB2] pr-4 p-1 rounded-full text-xs sm:text-sm'>
                            <span className='bg-[#00FFB2] px-3 py-1 max-sm:ml-1 rounded-full text-black text-xs font-semibold'>NEWS</span> Free Shipping on Orders Above $50! <ChevronRightIcon className='group-hover:ml-2 transition-all' size={16} />
                        </div>
                        <h2 className='text-3xl sm:text-5xl leading-[1.2] my-3 font-semibold bg-gradient-to-r from-white to-[#00FFB2] bg-clip-text text-transparent max-w-xs sm:max-w-md drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]'>
                            Musatra--Innovation you love. Value you trust.
                        </h2>
                        <div className='text-gray-300 text-sm font-medium mt-4 sm:mt-8'>
                            <p>Starts from</p>
                            <p className='text-3xl font-bold text-[#00FFB2]'>{currency}9.9</p>
                        </div>
                        <button className='bg-[#00FFB2] text-black text-sm font-semibold py-2.5 px-7 sm:py-5 sm:px-12 mt-4 sm:mt-10 rounded-md hover:bg-[#00d999] hover:scale-105 active:scale-95 transition shadow-lg'>LEARN MORE</button>
                    </div>
                    <Image className='sm:absolute bottom-0 right-0 md:right-10 w-full sm:max-w-sm drop-shadow-[0_5px_25px_rgba(0,255,178,0.3)]' src={assets.hero_model_img} alt="" />
                </div>
                <div className='flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:max-w-sm text-sm text-slate-600'>
                    <div className='flex-1 flex items-center justify-between w-full bg-orange-200 rounded-3xl p-6 px-8 group'>
                        <div>
                            <p className='text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#FFAD51] bg-clip-text text-transparent max-w-40'>Trending Now</p>
                            <p className='flex items-center gap-1 mt-4'>View more <ArrowRightIcon className='group-hover:ml-2 transition-all' size={18} /> </p>
                        </div>
                        <Image className='w-35' src={assets.hero_product_img1} alt="" />
                    </div>
                    <div className='flex-1 flex items-center justify-between w-full bg-blue-200 rounded-3xl p-6 px-8 group'>
                        <div>
                            <p className='text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#78B2FF] bg-clip-text text-transparent max-w-40'>20% discounts</p>
                            <p className='flex items-center gap-1 mt-4'>View more <ArrowRightIcon className='group-hover:ml-2 transition-all' size={18} /> </p>
                        </div>
                        <Image className='w-35' src={assets.hero_product_img2} alt="" />
                    </div>
                </div>
            </div>
            <CategoriesMarquee />
        </div>

    )
}

export default Hero