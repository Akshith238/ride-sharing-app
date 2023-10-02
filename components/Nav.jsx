"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {signIn, signOut,useSession,getProviders} from "next-auth/react";

const Nav = () => {
    const {data:session}=useSession();
    const router=useRouter();
    const [Providers, setProviders] = useState(null);
    
    const handleSignOut=async()=>{
      router.push("/");
      await signOut();
    }
    useEffect(() => {
      const setUpProviders=async()=>{
         const response= await getProviders();
         setProviders(response);
      }
      setUpProviders();
    }, [])
    
  return (
    <nav className='flex bg-black flex-row justify-between items-start p-3'>
        <div className='flex gap-3 md:gap-5'>
            <Image
            src='/36ad9614f96687f694692cb0d94ae36e.png'
            width={50}
            height={50}
           />
           <h4 className='mt-2 font-extrabold bg-gradient-to-r from-rose-400 to-orange-300 text-transparent bg-clip-text'>Ride</h4>
        </div>
        <div>
        {session?.user?
            (
              <div className="flex gap-3 md:gap-5">
                  <Link href="/choose-ride" 
                   className="flex text-sm justify-center p-2 rounded-md no-underline text-black font-semibold bg-gradient-to-r from-rose-400 to-orange-300">
                      Choose Ride
                  </Link>
                    <button type="button"  
                    onClick={()=>{handleSignOut();}}
                    className="flex text-sm justify-center p-2 rounded-md no-underline text-black font-semibold bg-gradient-to-r from-rose-400 to-orange-300">
                      Sign Out
                    </button>
                  
                  <Link href="#">
                       <Image
                       src={session?.user.image}
                       alt="profile_img"
                       className="rounded-full"
                       width={37}
                       height={37}
                       />
                  </Link>
              </div>
              ):(
              <>
                {Providers && Object.values(Providers).map((provider)=>
                (
                   <button 
                   type="button" 
                   key={provider.name}
                   onClick={()=>signIn(provider.id)}
                   className="flex text-sm justify-center p-2 rounded-md no-underline text-black font-semibold bg-gradient-to-r from-rose-400 to-orange-300"
                   >
                       Sign In
                   </button>
                )
                )
                }
              </>
              )
            }    
        </div>
        

    </nav>
  )
}

export default Nav