import React from 'react'
import Logo from '../assests/Navbar/pokedex_logo.png'
import PokeBall from '../assests/Navbar/Pokemon-Pokeball.png'
import "./Navbar.css"
const Navbar = () => {

  return (
    <div className=' flex max-md:justify-between px-5 md:justify-between w-[100%] h-[15%] border-b-[0.6rem] border-black border-solid'>
      {/* left container for lights*/}
      <div className='flex justify-center items-center gap-5 max-md:w-[20%] lg:w-[33.33%] h-[100%]'>
        {/* big blue light */}
        <div className=' max-md:w-[4rem] max-md:h-[4rem] md:w-[4.5rem] md:h-[3.5rem] lg:w-[5rem] lg:h-[5rem] border-4 border-black border-solid aspect-w-1 aspect-h-1 rounded-full glowing-ball'> </div>
        {/* three small light */}
        <div className='max-md:hidden flex jusitfy-center items-center w-[83%] h-[100%] gap-3'>
          {/* green light */}
          <div className="lg:w-[2rem] lg:h-[30%] md:w-[2rem] md:h-[20%] rounded-full border-4 border-solid border-black bg-green-500 ball-1 " ></div>
          {/* yellow light */}
          <div className="lg:w-[2rem] lg:h-[30%] md:w-[2rem] md:h-[20%] rounded-full border-4 border-solid border-black bg-yellow-500 ball-2" ></div>
          {/* red light */}
          <div className="lg:w-[2rem] lg:h-[30%] md:w-[2rem] md:h-[20%] rounded-full border-4 border-solid border-black bg-red-500 ball-3" ></div>
        </div>
        
      </div>
      {/* Logo container*/}
      <div className=' max-md:w-[70%] max-md:h-[75%] md:w-[60%] md:h-[80%] lg:w-[33.33%] h-[100%] flex justify-center items-center'>
        <img src={Logo} alt="" className='w-[100%] h-[80%]'/>
      </div>

      {/* bouncing pokeball container */}
      <div className='max-md:hidden relative lg:w-[33.33%] h-[100%] flex justify-center items-center'>
        <img src={PokeBall} alt="" className='absolute ball w-[20%] h-[80%]'/>
      </div>
    </div>
  )
}

export default Navbar
