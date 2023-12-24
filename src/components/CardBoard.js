import React from 'react'
import PokemonCards from './PokemonCards'

const CardBoard = () => {
  return (
    <div className=' rounded-xl w-[90%] h-[66%] flex flex-col justify-center items-center bg-white mx-auto border-4 border-solid border-black mb-4'>
      {/* header styling of console screen */}
      <div className='w-[100%] h-[5%] flex justify-center items-center gap-12'>
        <div className='bg-red-500 rounded-full w-[1rem] h-[1rem] border-solid border-black border-2'></div>
        <div className='bg-red-500 rounded-full w-[1rem] h-[1rem] border-solid border-black border-2'></div>
      </div>
      {/* console screen for card display */}
      <div className='w-[98%] h-[90%] bg-slate-200 mx-auto border-black border-4 border-solid'>
        <PokemonCards/>
      </div>
      {/* bottom styling of console screen */}
      <div className=' flex justify-between items-center w-[97%] h-[5%]'>
        <div className='bg-green-600 w-[1rem] h-[1rem] rounded-full border-2 border-solid border-black '></div>
        <div className='flex flex-col gap-1'>
            <div className='w-[1rem] h-[0.2rem] bg-black'></div>
            <div className='w-[1rem] h-[0.2rem] bg-black'></div>
            <div className='w-[1rem] h-[0.2rem] bg-black '></div>
        </div>
      </div>
    </div>
  )
}

export default CardBoard
