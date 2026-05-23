import React from 'react'
import { useState } from 'react';
import Cardslist from './Cardslist.jsx';

function Slider() {
  const [showCards, setShowCards] = useState(false);
  const handleClick = () => {
    setShowCards(true);
  }
  return (
    <div className='relative h-screen w-full'>
      {/* image*/}
      <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="travel image"
        className='absolute inset-0  w-full h-full object-cover' />
      {/* dark overlay */}
      <div className='absolute inset-0 bg-black/50'>
        {/* text  */}
        <div className='absolute inset-0 flex flex-col justify-center items-center text-2xl text-white '>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold'>Welcome to SmartTrip!!</h1>
          {/* paragraph*/}
          <p>Discover amazing places with SmartTrip! ! ! !</p>
          <button onClick={handleClick} className='hover:shadow-[0_0_25px_rgba(14,165,233,0.8)] mt-4 hover:scale-105 transform:transition-all duration-300 scroll-smooth text-3xl bg-green-500 hover:bg-green-600 text-white py-3 px-5 rounded'>Start your jurney</button>
          {showCards && <Cardslist />}
        </div>
      </div>


    </div>

  )
}

export default Slider