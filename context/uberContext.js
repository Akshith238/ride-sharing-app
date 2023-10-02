"use client"
import { createContext,useEffect,useState } from "react";


export const UberContext=createContext();

export const UberProvider=({children})=>{
    const [Pickup, setPickup] = useState('')
    const [Dropoff, setDropoff] = useState('')
    const [PickupCoordinates, setPickupCoordinates] = useState('');
    const [DropOffCoordinates, setDropOffCoordinates] = useState('');

    const createLocationCoordinatePromise = (locationName, locationType) => {
        return new Promise(async (resolve, reject) => {
          try {
            console.log(locationName);
            const response = await fetch('api/map/getLocation', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body:JSON.stringify({
                location:locationName,
              }),
            })
    
            const data = await response.json()
    
            if (data) {
              switch (locationType) {
                case 'pickup':
                  setPickupCoordinates(data)
                  break
                case 'dropoff':
                  setDropOffCoordinates(data)
                  break
              }
              resolve()
            } else {
              reject()
            }
          } catch (error) {
            console.log(error)
            reject()
          }
        })
      }
    
      useEffect(() => {
        if (Pickup && Dropoff) {
            ;(async () => {
                await Promise.all([
                  createLocationCoordinatePromise(Pickup, 'pickup'),
                  createLocationCoordinatePromise(Dropoff, 'dropoff'),
                ])
              })()
        } else return
      }, [Pickup, Dropoff])
    
    return(
        <UberContext.Provider value={{
            Pickup,setPickup,Dropoff,setDropoff,PickupCoordinates,
            setPickupCoordinates,DropOffCoordinates,setDropOffCoordinates
        }} >{children}</UberContext.Provider>
    )
}