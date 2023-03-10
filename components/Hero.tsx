import React from 'react'
import Image from 'next/image'
import marketingImage from '../public/marketing.jpg'
import { motion } from 'framer-motion'


const Hero = () => {
  return (
    <motion.div animate={{x:0}} initial={{x:'100vw'}} transition={{ type:'spring', delay:0.3}}
     className='grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 max-w-6xl m-auto'>
      <div className='text-sky-300'>
        <div className='ml-12 mt-36'>
        <h2 className='text-4xl font-bold text-black leading-normal '>
          ROI - FOCUSED DIGITAL MARKETING COMPANY IN KERALA</ h2>
        </div>

        <div>
          <h1 className='text-4xl font-bold ml-12 mr-2 mt-10 text-blue-600 leading-normal'>
            Take Your Brands Eventful story In To Digital Space</h1>
        </div>
        <div>
          <h3 className='text-xl leading-10 mt-6 ml-12 mr-2 text-gray-500 2xl:text-2xl 2xl:leading-8'>
            The epitome of dedication and perseverance, our team
             focuses on the exponential growth of the clients through
             tireless commitment.</h3>
        </div>
        <div className='text-xl mt-4 ml-10 '>
          <motion.button whileHover={{scale:1.1, textShadow: '0px 0px 8px rgb(255, 255, 255)',
           boxShadow:'0px 0px 8px rgb(255, 255, 255)',}} 
          className='text-white text-xl rounded-full ml-2 px-8 py-2 bg-blue-500 font-bold 2xl:mt-8 2xl:px-12 2xl:py-4' >
            Contact Us</motion.button>
        </div>
      </div>
      <div className='justify-center items-center grid'>
        <Image src={marketingImage} alt="marketing" placeholder='blur' width={700} height={700} />
      </div>
    </motion.div>
  )
}

export default Hero