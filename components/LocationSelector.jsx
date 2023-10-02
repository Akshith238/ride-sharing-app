"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { useContext } from 'react'
import { UberContext } from '@/context/uberContext'

const LocationSelector = () => {
  const [inFocus, setInFocus] = useState('from');
  const {Pickup,setPickup,Dropoff,setDropoff}=useContext(UberContext);
  const storeTripDetails=async()=>{
      
  }

  return (
    <div className='flex flex-col pt-2 m-4 gap-2'>
      <div className='searchHeader font-semibold text-xl text-white'>
          {inFocus === 'from'?'Where are you?':'To?'}
      </div>
      <div className='flex flex-row'>
          <input 
          className='p-2 w-full rounded-md text-black' 
          placeholder='Enter pickup location' 
          onChange={e=>setPickup(e.target.value)}
          onFocus={()=>setInFocus('from')}/>
      </div>
      <div className='flex flex-row'>
          <input 
          className='p-2 w-full rounded-md text-black' 
          placeholder='Enter drop location' 
          onChange={e=>setDropoff(e.target.value)}
          onFocus={()=>setInFocus('To')}/>
      </div>
    </div>
  )
}

export default LocationSelector