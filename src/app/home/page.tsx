"use client"
import axios from 'axios';
import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Carousel from '../components/Carousel/Carousel';



const Home = () => {
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
      }

      useEffect(()=>{
        fetchApi()
      },[]);

  return (
    <div>
      {/* <Sidebar/> */}
      <Carousel/>
    </div>
  )
}

export default Home