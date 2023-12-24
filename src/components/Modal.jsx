import React, { useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import Spinner from './spinner';

const Modal = ({ id, setModalPopup }) => {
    //states
    const [isImageLoaded, setImageLoaded] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [stats, setStats] = useState([]);
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false);


    //fetching stats of pokemon
    const fetchData = async () => {
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}/pokemon/${id}`);
        const data = await response.json();
        setStats(data["stats"]);
        setName(data?.species?.name);
        const imgUrl = `${process.env.REACT_APP_BASE_IMG_URL}/${id}.svg`
        setImageUrl(imgUrl);
        setLoading(false);
    }

    //Mapping of state values to colors
    const powertoColorMapping = (value) => {
        if (value <= 40) {
            return "bg-[#cf281f]"
        } else if (value <= 75) {
            return "bg-[#FFA500]"
        } else {
            return "bg-[#1cde07]"
        }
    }


    //handling image loading
    const handleImageLoad = () => {
        setImageLoaded(true);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (

        <div className='w-[100%] h-[100%] fixed bg-black bg-opacity-50'>
            <div className='md:w-[75%] md:h-[40%] lg:w-[50%] lg:h-[40%] max-md:w-[90%] max-md:h-[60%] bg-white mx-auto border-4 border-solid gap-2 flex flex-col justify-center items-center border-black'>
                <div className='flex flex-row-reverse w-[100%] h-[5%]'>
                    <button onClick={() => setModalPopup(false)} className='bg-red-500 w-[1rem] h-[100%] mr-3 flex justify-center items-center'>
                        <RxCross1 style={{ color: "white" }} />
                    </button>
                </div>
                <div className='border-4 border-black border-solid w-[98%] h-[90%] flex justify-center items-center '>
                    {
                        loading || stats.length<=0?(<Spinner />) : (
                            <div className='flex max-md:flex-col md:flex-row justify-center items-center w-[100%] h-[100%]'>
                                <div className=' md:px-3 md:w-[35%] md:h-[100%] md:gap-2 lg:w-[40%] lg:h-[100%] max-md:w-[100%] max-md:h-[30%] flex justify-center items-center lg:border-r-4 md:border-r-4 max-md:border-b-2 border-black border-solid'>
                                    <img
                                        src={imageUrl}
                                        alt=""
                                        onLoad={handleImageLoad}
                                        style={{ display: isImageLoaded ? 'block' : 'none' }}
                                        className='w-[100%] h-[80%]'
                                    />
                                </div>
                                <div className=' md:w-[65%] lg:w-[60%] lg:h-[100%] max-md:w-[100%] max-md:h-[70%] flex flex-col gap-3 justify-center items-center'>
                                    <p className='text-lg font-bold'>{name}</p>
                                    {
                                        stats.length > 0 && stats.map((stat, key) => (
                                            <div key={key} className='flex flex-row gap-2  md:w-[90%] md:h-[80%] lg:w-[90%] lg:h-[8%] justify-center items-center'>
                                                <p className='w-[40%] h-[10%] bg=yello-300'>{stat?.stat?.name}</p>
                                                <p className='w-[10%] h-[10%]'>{stat.base_stat}</p>
                                                <div className={`w-[100%] h-[100%] bg-slate-300`}>
                                                    <div style={{ width: stat.base_stat.toString() + "%", height: "100%" }} className={`${powertoColorMapping(stat.base_stat)}`}>&nbsp;</div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Modal
