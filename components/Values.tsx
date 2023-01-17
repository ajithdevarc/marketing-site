import React from 'react'
import Image from 'next/image'
import dev from '../public/dev.svg'
import passion from '../public/passion.png'
import excellence from '../public/excellence.png'
import service from '../public/service.png'

const Values = () => {
  return (
    <div>
            <div className='p-4'>
                <h1 className='text-4xl text-center font-bold'>Our Core Values</h1>
            </div>
         <div className='grid grid-cols-1 lg:grid-cols-2'>
             <div >
                 <Image className='md:ml-40' src={dev} alt='dev'/>
             </div>
       
          <div className='grid grid-cols-1 ml-16  '>
            <div>
                <Image src={passion} alt='passion' width={30} height={30}/>
                <h2 className='text-3xl mb-2'>Passion</h2>
                <p className='text-xl text-gray-500'>We love what we do, love digital marketing, 
                and greet new challenges with excitement.</p>
                <p className='text-xl text-gray-500'>Our clients feel the love every day.</p>
            </div>
            <div>
                <Image src={excellence} alt='excellence' width={30} height={30} />
                <h2 className='text-3xl mb-2'>Excellence</h2>
                <p className='text-xl text-gray-500'>We deliver what we promise and go above and
                     beyond to add unanticipated value to our clients.
                </p>
                <p className='text-xl text-gray-500'>We often demand more of ourselves than our clients do.</p>
            </div>
            <div>
                <Image src={service} alt='service' width={30} height={30}/>
                <h2 className='text-3xl mb-2'>Personalized Services</h2>
                <p className='text-xl text-gray-500'>Dont be surprised if you feel like you are our only client.<br/>
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