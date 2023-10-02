"use client"
import { useEffect,useContext} from 'react'
import { UberContext } from '@/context/uberContext'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const style = {
  wrapper: `flex- h-full w-full`,
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

const Map = () => {
  const {PickupCoordinates,DropOffCoordinates}=useContext(UberContext);

  console.log(PickupCoordinates,DropOffCoordinates);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [76.96629,10.99415],
      zoom: 11,
    })
    map.addControl(
      new mapboxgl.NavigationControl());
    if(PickupCoordinates){
      addToMap(map,PickupCoordinates)
    }
  
    if(DropOffCoordinates){
      addToMap(map,DropOffCoordinates)
    }
  
    if(PickupCoordinates && DropOffCoordinates){
      map.fitBounds([DropOffCoordinates,PickupCoordinates],{
        padding:60,
      })
    }
  
    return () => {
        map.remove();
      };
  }, [])

  
  const addToMap=(map,coordinates)=>{
    const marker=new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  }

  return <div className={style.wrapper} id='map'/>
}

export default Map