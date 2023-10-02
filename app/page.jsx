import Image from 'next/image'


export default function Home() {
  return (
     <div className='bg-black flex justify-center'>
         <div className='flex-col gap-3'>
            <h1 className='p-3 bg-gradient-to-r from-rose-400 to-orange-300 inline-block text-transparent bg-clip-text'>Welcome to Ride-Sharing-App</h1>
            <p className='text-center text-white font-semibold-700'>Ride Your Way Shared With the Ones On Your way</p>
            <Image
                src='/pexels-heber-vazquez-17405148.jpg'
                width={600}
                height={500}
                className=' rounded-md shadow-lg'
            />
         </div>
         
     </div>
  )
}
