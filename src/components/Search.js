import React, { useEffect,useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setSearch } from '../slices/FilterSlice';

const Search = () => {
  //state
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [searchBarValue,setSearchBarValue] = useState('');
  
  //dispatcher
  const dispatch = useDispatch();

  //search bar input change handler
  const changeHandler = (event)=>{
    setSearchBarValue(event.target.value);
  }


  //search button click handler
  const submitHandler = ()=>{
    dispatch(setSearch(searchBarValue));
  }

  useEffect(() => {
      const isSmall = window.matchMedia('(max-width: 768px)').matches;
      setIsSmallScreen(isSmall);
  },[]);

  return (
    <div className='flex max-md:w-[90%] md:w-[40%] lg:w-[30%] max-md:h-[60%] lg:h-[100%] gap-5'>
        {/* search bar */}
        <input onChange={changeHandler} value={searchBarValue} type="text" placeholder='Enter pokemon name' className=' rounded-md md:text-lg lg:w-[70%] max-md:w-[80%] bg-[#51ad60] border-black border-4 border-solid text-black lg:text-xl max-md:text-md px-4 outline-none placeholder-black' />
        {/* search button */}
        <button onClick={submitHandler} className='flex justify-center items-center lg:w-[30%] md:px-2 max-md:w-[20%] bg-[#28aafd] lg:p-5 max-md:p-2 border-4 border-solid border-black font-semibold lg:text-xl max-md:text-md'> {isSmallScreen?(<IoMdSearch size={24}/>):("Search")}</button>
    </div>
  )
}

export default Search
