import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../Constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='max-container '>
    <div className=' flex justify-between items-start gap-20 flex-wrap max-lg:flex-col '>
       <a href='/'>
       <img src={footerLogo} alt='footerlogo' width={150} height={46}/>
       </a>
       <p className=' text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>Get Shoes ready for the new term at your nearest Nike store. Find your perfect size In Store. Get Rewards.</p>

       <div className='flex items-center gap-5 mt-8'>
       {socialMedia.map((icon) => (
        <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full 
        transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-violet-500 cursor-pointer">
        <img src={icon.src} alt={icon.alt} width={24} height={24}/>
        </div>
       ))}
       </div>
    </div>
    <div className='flex flex-1 justify-between lg:ga-10 gap-20 flex-wrap mt-10'>
    {footerLinks.map((section) => (
        <div key={section}>
        <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-violet-500">{section.title}</h4>
        <ul>{section.links.map((link) => (
            <li className='text-slate-400 mt-2'><a href=''>{link.name}</a></li>))}</ul>
        </div>
    ))}
    </div>
    <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm: items-center'>
    <div className='flex flex-1 justify-start items-center font-montserrat gap-2 cursor-pointer'>
    <img src={copyrightSign} alt='Copy RIght' width={20} height={20} className='rounded-full m-0'/>
    <p className='font-palanquin'>Copyright. All rights reserved.</p>
    </div>
    <p className='font-palanquin cursor-pointer'>Terms & Conditions</p>
    </div>
    </footer>


  )
}

export default Footer
