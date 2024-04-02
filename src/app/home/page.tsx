"use client"
import React, { useEffect, useState } from 'react'
import Carousel from '../components/Carousel/Carousel';
import { FaPlay } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import Image from 'next/image';



const Home = () => {
  const [nowPlaying , setNowPlaying] = useState([])
    async function fetchApi(){
        // const resp = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=76fb20faaf241f4327443ac5534a9062")
        // const resp = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=76fb20faaf241f4327443ac5534a9062")
        // const resp = await fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=76fb20faaf241f4327443ac5534a9062")
        // const resp = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=76fb20faaf241f4327443ac5534a9062")
        // const resp = await fetch("https://api.themoviedb.org/3/person/popular?api_key=76fb20faaf241f4327443ac5534a9062")
        // const resp = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=76fb20faaf241f4327443ac5534a9062")
        // const resp = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=76fb20faaf241f4327443ac5534a9062")
        // const resp = await fetch("https://api.themoviedb.org/3/movie/latest?api_key=76fb20faaf241f4327443ac5534a9062")
        const resp = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=76fb20faaf241f4327443ac5534a9062")
        // const resp = await fetch("https://api.themoviedb.org/3/configuration/countries?api_key=76fb20faaf241f4327443ac5534a9062") bina kaam ki
        // const resp = await fetch("https://api.themoviedb.org/3/person/changes?api_key=76fb20faaf241f4327443ac5534a9062") => bina kam ki
        // const resp = await fetch("https://api.themoviedb.org/3/movie/changes?api_key=76fb20faaf241f4327443ac5534a9062") => bina kaam ki
        const data = await resp.json();
        console.log(data)
        setNowPlaying(data.results)
      }

      useEffect(()=>{
        fetchApi()
      },[]);

  return (
    <div className='w-full relative'>
      <div className="absolute background-two flex flex-col justify-center gap-5 text-white">
        <div className='xs:mt-[10rem] md:mt-[30rem] pl-32'>
          <h1 className="xs:text-4xl md:text-5xl font-extrabold">Unlimited movies, TV shows and more</h1>
          <p>New Release</p>
          <div className='flex gap-8'>
            <button className='bg-[#fff3] xs:text-xl md:text-2xl font-bold xs:px-0 xs:py-0 md:px-20 md:py-2 border rounded-md flex gap-4 items-center'><FaPlay/>Watch Now</button>
            <button className='bg-[#fff3] xs:text-xl md:text-2xl font-bold xs:px-0 xs:py-0 md:px-6 mdpy-2 border rounded-md'><IoMdAdd/></button>
          </div>
        </div>
        <div className='bg-black flex flex-col justify-center gap-5 pl-32'>
          <div className='flex gap-2 overflow-x-auto w-full'>
            {
              nowPlaying.map((item) =>{
                return(
                  <Image key={item.id} width={300} height={300} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt=''/>
              )})
            }
        </div>
        </div>
      </div>
      <Carousel/>
    </div>
  )
}

export default Home