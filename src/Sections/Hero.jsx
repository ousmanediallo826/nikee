import React, { useState } from 'react'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../Constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../Components/ShoeCard'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section
      id="home"
      className="w-full flex flex-col lg:flex-row justify-between items-center min-h-screen gap-10 px-6 lg:px-12 max-container"
    >
      {/* Left Section */}
      <div className="flex flex-col justify-center items-start w-full lg:w-1/2 pt-20 lg:pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>
        <h1 className="mt-10 font-palanquin text-6xl sm:text-7xl lg:text-8xl max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>{' '}
          <span className="text-coral-red inline-block mt-3">Nike</span>Shoes
        </h1>
        <p className="font-montserrat text-slate-400 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover Stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="flex mx-12 justify-start items-start flex-wrap w-full mt-5 gap-8 sm:gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-3xl sm:text-4xl font-palanquin font-bold">
                {stat.value}
              </p>
              <p className="leading-6 sm:leading-7 font-montserrat text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="relative flex flex-col justify-center items-center w-full lg:w-1/2 xl:min-h-screen bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="Shoe collection"
          className="object-contain w-full max-w-lg h-auto"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-6">
          {shoes.map((shoe, index) => (
            <ShoeCard
              key={index}
              imgUrl={shoe}
              changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
