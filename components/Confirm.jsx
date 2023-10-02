
"use client"
import Image from 'next/image';
import { useEffect,useState } from 'react';

/*const carList=[
    {
       service:'Sedan',
       imageUrl:'/sedan.png',
       price_multiplier:1,
    },
    {
        service:'SUV',
        imageUrl:'/suv.png',
        price_multiplier:1.5,
     },
     {
        service:'Luxury',
        imageUrl:'/luxury.png',
        price_multiplier:2,
     }
]*/

const basePrice=20000000;

const Confirm = () => {
    const [carList,setCarList]=useState([]);
    const fetchRides=async()=>{
        const response=await fetch('/api/db/getRides')
        const data=await response.json();
        setCarList(data);
    }
    useEffect(() => {
        fetchRides();
    }, [])
    
    const storeTripDetails=async()=>{

    }
  return (
    <div className="flex flex-col m-4 mt-2 gap-2">
        <div className='rideSelector'>
             <p className='text-white text-center font-bold text-lg'>Choose a ride or swipe up to see more!</p>
             {carList.map((cars,index)=>(
                  <div key={index} className='flex p-2 flex-row m-3 gap-3 justify-between'>
                       <div className='flex'>
                          <p className='text-white font-semibold text-sm'>{cars.service}<br/>
                          5 mins away <br/>
                          {((basePrice / 10**5 ) * cars.price_multiplier).toFixed(2)}
                          </p>
                       </div>
                       <Image src={cars.imageUrl}
                        alt={cars.service}
                        width={80}
                        height={10}
                        />
                  </div>  
             ))}
        </div>
        <button type='button' 
        className='p-2 ml-32 font-semibold w-1/4 rounded-md bg-gradient-to-r from-rose-400 to-orange-300' 
        onClick={()=>storeTripDetails()}>
            Confirm
        </button>
    </div>
  )
}

export default Confirm