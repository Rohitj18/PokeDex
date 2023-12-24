import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { colourPallet } from '../utils/Constants';
import Spinner from './spinner';

const Card = ({ name, url, customOnClick }) => {

    //states
    const { filter } = useSelector((state) => state.filter);
    const [filterData, setFilterData] = useState(filter);
    const [pokemonData, setPokemonData] = useState({});
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [isImageLoaded, setImageLoaded] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [Pid, setPId] = useState('0');
    const [loading, setLoading] = useState(false);

    //fetching pokemon data for a paritcular pokemon
    const fetchPokemonData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPokemonData(data);
        const temparr = [];
        data.types.forEach((element) => {
            temparr.push(element.type.name);
        });
        setPokemonTypes(temparr);
        const urlSplit = url.split("/");
        const id = urlSplit[urlSplit.length - 2];
        const imageUrl = `${process.env.REACT_APP_BASE_IMG_URL}/${id}.svg`;
        setPId(id);
        setImageUrl(imageUrl);
    }

    // setter for image loading 
    const handleImageLoad = () => {
        setImageLoaded(true);
    }


    //conditions for filtering pokemons
    const filterFunction = () => {
        return filter != null && filter !== "all" && pokemonTypes[0] !== filter;
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await fetchPokemonData();
            setLoading(false);
        }
        fetchData();
    }, [])


    return (

        <div onClick={() => { customOnClick(Pid) }} className={`w-[100%] h-[10rem] hover:cursor-pointer hover:scale-110 flex ${pokemonTypes.length > 0 ? `${colourPallet[pokemonTypes[0]]}` : ""} ${filterFunction() ? "hidden" : ""} rounded-xl transition-all duration-150 ease-in-out shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}>
            {/* left-side card container */}
            <div className='w-[40%] h-[100%] flex flex-col gap-4 justify-center items-center'>
                <p className='text-white text-lg font-semibold'>{name}</p>
                <div className='flex flex-col gap-3'>
                    {
                        pokemonTypes.map((type, key) => (
                            <p key={key} className={`text-white p-1 text-center rounded-xl px-2 bg-white bg-opacity-25`}>{type}</p>
                        ))
                    }
                </div>

            </div>
            {/* right-side card container */}
            <div className='w-[60%] h-[100%] flex justify-center items-center'>
                {
                    isImageLoaded ? (<></>) : (<Spinner />)
                }
                <img
                    src={imageUrl}
                    alt=""
                    onLoad={handleImageLoad}
                    style={{ display: isImageLoaded ? 'block' : 'none' }}
                    className='w-[100%] h-[80%]'
                />
            </div>
        </div>

    )
}

export default Card
