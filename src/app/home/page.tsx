"use client"
import React, { useEffect, useState } from 'react'
import Carousel from '../components/Carousel/Carousel';
import { FaPlay } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import Image from 'next/image';
import axios from 'axios';
import Banners from '../components/Banners/Banners';



const Home = () => {
  // const [nowPlaying , setNowPlaying] = useState([])
  const [allData , setAllData] = useState({
    now_playing: [],
    popular: [],
    upcoming: [],
    airing_today: [],
    top_rated: []
  })
    async function fetchApi(){
        try {
          const [resp1 , resp2, resp3, resp4, resp5] = await Promise.all([
            axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=76fb20faaf241f4327443ac5534a9062"),
            axios.get("https://api.themoviedb.org/3/person/popular?api_key=76fb20faaf241f4327443ac5534a9062"),
            axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=76fb20faaf241f4327443ac5534a9062"),
            axios.get("https://api.themoviedb.org/3/tv/airing_today?api_key=76fb20faaf241f4327443ac5534a9062"),
            axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=76fb20faaf241f4327443ac5534a9062"),
          ])
          setAllData({...allData, now_playing:resp1.data.results, popular: resp2.data.results, upcoming: resp3.data.results, airing_today: resp4.data.results, top_rated: resp5.data.results})
          console.log(resp1.data.results, resp2.data.results, resp3.data.results, resp4.data.results)
        } catch (error) {
          console.error(error)
        }
        
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
        <div className='bg-black flex flex-col justify-center gap-5 pl-32 mt-5'>
          <Banners data={allData.now_playing} text={"Now Playing"}/>
          <Banners data={allData.airing_today} text={"Arriving Today"}/>
          <Banners data={allData.upcoming} text={"Upcomming"}/>
          <Banners data={allData.top_rated} text={"Top"}/>
        </div>
      </div>
      <Carousel/>
    </div>
  )
}

export default Home