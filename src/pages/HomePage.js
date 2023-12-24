import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import FilterSlice from '../components/FilterSlice'
import CardBoard from '../components/CardBoard'
const HomePage = () => {
  return (
    <div className='bg-primary-bg-color w-[100vw] h-[100vh] overflow-y-scroll overflow-x-hidden'>
        <Navbar/>
        <div className=' px-2 my-6 flex lg:flex-row md:flex-col max-md:flex-col max-md:gap-3 lg:gap-12 lg:justify-center  lg:items-center max-md:items-start md:justify-center md:items-center gap-2 w-[100vw] overflow-x-hidden lg:h-[10%] max-md:h-[20%]'>
          <Search/>
          <FilterSlice/>
        </div>
        <CardBoard/>
    </div>

  )
}

export default HomePage
