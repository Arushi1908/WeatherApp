import React from 'react'
import { useGlobalContext } from './Context'

export default function Front() {
    const weather = useGlobalContext();
    
  return (
    <>
      <div className='bg-sky-300 h-screen text-center items-center font-bold py-2 '>
        <div className='text-4xl text-sky-900 bg-yellow-300 border-sky-900 border-2 mx-40 lg:mx-96 py-1 mb-8'>
          Weather
        </div>

        <div>
          <input className='p-1 text-yellow-400 bg-sky-900 rounded-2xl border-yellow-400 border-2 shadow-lg' placeholder='Search' value={weather.city} onChange={(e) => weather.setCity(e.target.value)} />

          <button className='bg-sky-900 text-yellow-400 m-3 p-1 px-2 border-yellow-400 border-2 rounded-xl shadow-lg hover:bg-white hover:text-black'  onClick={weather.fetchData}>Search </button>
        </div>
        
        <div className='grid-rows-2 mx-auto w-80 bg-sky-900 border-yellow-400 border-2 mt-8 h-80 rounded-2xl text-white'>
          
          <img className='h-36 mx-auto mb-6' src={weather.data?.current?.condition?.icon} alt="" />
          <div className='text-2xl text-yellow-400'>{weather.data?.current?.temp_c}°C</div>
          <div className='text-xl '>{weather.data?.current?.condition?.text}</div>
          <div className='text-xl text-yellow-400'>{weather.data?.location?.name}, {weather.data?.location?.region}</div>
          <div className='text-xl '>Wind - {weather.data?.current?.wind_kph} kph</div>
          
        </div>
      </div>
    </>
  )
}
