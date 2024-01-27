import GlobalApi from '@/app/_utils/GlobalApi'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect,useState } from 'react'

function Sidebanner() {
  const [sideBanner, setSideBanner] = useState();

  useEffect(() => {
    getSidebanner();

  }, [])
  
  const getSidebanner = () => {
    GlobalApi.getSidebanner().then((response) => {
 
      setSideBanner(response?.sidebanners);
    })
  }
  return (
    <div className="">
      {sideBanner ? sideBanner.map((item,index) => (
        <div key={index} className=" bg-white m-2 p-2 rounded-xl">
          <div className="bg-indigo-500 rounded-xl m-2 p-1 items-center flex justify-center">
            <a href={item.url} target="_blank">
              <Image priority src={item.banner.url} width={240} height={300} alt="banner"/>
            </a>
          </div>
        </div>
        
      )):
      [1].map((item,index) => (
        <div key={index} className="w-full h-[240px] rounded-xl m-2 bg-zinc-300 animate-pulse">
        </div>
      ))
        
      }
    </div>
    
    
  )
}

export default Sidebanner