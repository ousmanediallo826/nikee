import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({feedback, imgURL, customerName, rating}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img src={imgURL} alt='Customer' className='rounded-full object-cover w-[120px] h-[120px]'/>
      <h2 className='font-bold font-palanquin text-3xl'>{customerName}</h2>
      <p className='info-text text-center'>{feedback}</p>
      <div className='flex gap-3 mt-2 justify-center items-center'>
      <img src={star} alt='' width={24} height={24} className='object-contain m-0'/>  <h3 className='text-coral-red text-2xl'>{rating}</h3></div>
     
    </div>
  )
}

export default ReviewCard
