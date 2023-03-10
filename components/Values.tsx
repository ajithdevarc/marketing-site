import React from 'react'
import Image from 'next/image'
import dev from '../public/dev.svg'
import passion from '../public/passion.png'
import excellence from '../public/excellence.png'
import service from '../public/service.png'

const Values = () => {
  return (
    <div className='max-w-6xl m-auto'>
            <div className='p-4'>
                <h1 className='text-4xl text-center font-bold'>Our Core Values</h1>
            </div>
         <div className='grid grid-cols-1 lg:grid-cols-2'>
             <div className='' >
                 <Image className='md:ml-40 lg:ml-10' src={dev} alt='dev'/>
             </div>
       
          <div className='grid grid-cols-1 ml-12 mr-2 lg:ml-4'>
            <div>
                <Image className='inline' src={passion} alt='passion' width={30} height={30}/>
                <span className='text-3xl ml-2 mb-2 font-semibold'>Passion</span>
                <p className='text-xl text-gray-500 2xl:text-xl 2xl:leading-8'>We love what we do, love digital marketing, 
                and greet new challenges with excitement.</p>
                <p className='text-xl text-gray-500 2xl:text-xl 2xl:leading-8'>Our clients feel the love every day.</p>
            </div>
            <div>
                <Image className='inline' src={excellence} alt='excellence' width={30} height={30} />
                <span className='text-3xl ml-2 mb-2 font-semibold'>Excellence</span>
                <p className='text-xl text-gray-500 2xl:text-xl 2xl:leading-8'>We deliver what we promise and go above and
                     beyond to add unanticipated value to our clients.
                </p>
                <p className='text-xl text-gray-500 2xl:text-xl 2xl:leading-8'>We often demand more of ourselves than our clients do.</p>
            </div>
            <div>
                <Image className='inline' src={service} alt='service' width={30} height={30}/>
                <span className='text-3xl ml-2 mb-2 font-semibold'>Personalized Services</span>
                <p className='text-xl text-gray-500 2xl:text-xl 2xl:leading-8'>Dont be surprised if you feel like you are our only client.<br/>
                     We ask a lot of questions to get to know your company so
                      we can anticipate your needs and exceed your goals.
                </p>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Values