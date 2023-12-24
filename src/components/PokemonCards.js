import React, { useEffect, useState,useRef } from 'react'
import {useSelector } from "react-redux";
import Card from './Card';
import Modal from './Modal';



const PokemonCards = () => {
    //states
    const [pokemonList, setPokemonList] = useState([]);
    const [searchedPokemonExist,setSearchedPokemonExist] = useState(false);
    const [searchedPokemonId,setSearchedPokemonId] = useState(-1);
    const [next, setNext] = useState(null);
    const [hasNext, setHasNext] = useState(false);
    const [page, setPage] = useState(1);
    const [modalPopup,setModalPopup] = useState(false);
    const [id,setId]=useState('')
    const {search} = useSelector((state) => state.filter);
    
    const scrollableElementRef = useRef(null)

    //fetching the list of pokemon
    const fetchPokemonData = async () => {
        let response;
        if (next == null) {
            response = await fetch(`${process.env.REACT_APP_BASE_API_URL}/pokemon?limit=20&offset=0`);
        } else {
            response = await fetch(next);
        }
        const data = await response.json();
        setPokemonList([...pokemonList,...data["results"]]);
        setNext(data["next"]);
        if (data["next"] !== null) {
            setHasNext(true);
        } else {
            setHasNext(false);
        }

    }

    //fetching list of searched pokemon
    const fetchSearchPokemonData = async()=>{
        try{
            const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}/pokemon/${search}`);
            const data = await response.json();
            setSearchedPokemonExist(true);
            setSearchedPokemonId(data?.id)
        }catch(e){
            setSearchedPokemonExist(false);
        }
        
    }

    //Handling scroll logic
    const handelInfiniteScroll = async () => {
        try {
          if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
          ) {
            setPage((prev) => prev + 1);
          }
        } catch (error) {
          console.log(error);
        }
      };
    

      const onClickHandler=(Pid,Pname)=>{
        setModalPopup(true);
        setId(Pid);
      }

    useEffect(() => {
        const handleScroll = () => {
            const scrollableElement = scrollableElementRef.current;

            if (
                scrollableElement.scrollHeight - scrollableElement.scrollTop <=
                scrollableElement.clientHeight
            ) {
                handelInfiniteScroll();
            }
        };
        const scrollableElement = scrollableElementRef.current;
        scrollableElement.addEventListener('scroll', handleScroll);

        return () => {
            scrollableElement.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const fetchData = async()=>{
            await fetchPokemonData();
        }
        if(search){
            fetchSearchPokemonData();
        }else{
            fetchData();
        }
    }, [page,search]);


    return (
            <div ref={scrollableElementRef} className='relative w-[100%] h-[100%] p-5 grid max-md:gap-3 max-md:grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-4 lg:gap-5 overflow-y-scroll'>
                {
                 search?(
                    <div>
                        {
                        searchedPokemonExist?(<Card key={searchedPokemonId} name={search} url={`${process.env.REACT_APP_BASE_API_URL}/pokemon/${searchedPokemonId}/`} customOnClick={onClickHandler}/>):(<div key={searchedPokemonExist}>Sorry! This pokemon is yet to be discovered</div>)
                        
                        }
                    </div>
                    
                    ):(<></>)   
                }
                {
                    !search && pokemonList.map((pokemon, key) => (
                        <Card key={key} name={pokemon.name} url={pokemon.url} customOnClick={onClickHandler} />
                    ))
                }
                {
                    modalPopup?(<div className='absolute flex justify-center items-center w-[100%] h-[100%]'><Modal id={id} setModalPopup={setModalPopup} /></div>):(<></>)
                }
            </div>    
    )
}

export default PokemonCards


  

  
  
