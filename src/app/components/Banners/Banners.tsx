import Image from 'next/image'
import React from 'react'

const Banners = ({data, text}) => {
  return (
    <>
      <p className='xs:text-xl md:text-2xl font-bold'>{text}</p>
          <div className='flex gap-2 overflow-x-auto w-full'>
            {
              data.map((item) =>{
                return(
                  <Image key={item.id} width={300} height={300} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt=''/>
              )})
            }
          </div>
    </>
  )
}

export default Banners