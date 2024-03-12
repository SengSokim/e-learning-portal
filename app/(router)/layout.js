"use client"

import React, { useEffect, useState } from 'react'

import SideNav from './_components/SideNav'
import LoadingBar from "react-top-loading-bar";
import { useRouter, usePathname } from 'next/navigation'
import Header from './_components/Header';

function layout({children}) {

  const [progress, setProgress] = useState(0)
  const router = useRouter();
  const pathname = usePathname();
  
  useEffect(() => {
    setProgress(40);

    setTimeout(() => {
      setProgress(100);
    }, 1000);
  
   
  }, [pathname])
  
  return (
    <div className=''>
        <LoadingBar
        color='#7346ff'
        progress={progress}
        waitingTime={400}
      />
        <div className="sm:w-64 hidden sm:block fixed">
            <SideNav/>
        </div>
        <div className="sm:ml-64">
            <Header />
            {children}
        </div>
        
    </div>
  )
}

export default layout