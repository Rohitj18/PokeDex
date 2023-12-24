import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setFilterData } from '../slices/FilterSlice';
import { filterOption } from '../utils/Constants';


const FilterSlice = () => {

  //states
  const { filter} = useSelector((state) => state.filter);
  const [selectedOption, setSelectedOption] = useState(filter);
  
  const dispatch = useDispatch();


  //Drop down menu selection handler
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    localStorage.setItem("filterData", JSON.stringify(event.target.value));
    dispatch(setFilterData(event.target.value));
  };


  return (
    <div className='flex md:w-[40%] lg:w-[15%] max-md:w-[66%] max-md:h-[60%] h-[100%] gap-5'>
      <select
        id="dropdown"
        name="dropdown"
        value={selectedOption}
        onChange={handleSelectChange}
        className="w-[100%] rounded-lg h-[100%] bg-[#51ad60] border-black border-4 border-solid text-black text-lg px-5 outline-none"
      >
        {
          filterOption.map((opt)=>(
            <option value={opt}>{opt.charAt(0).toUpperCase() + opt.slice(1)}</option>
          ))
        }
      </select>
       
        
    </div>
  )
}

export default FilterSlice
