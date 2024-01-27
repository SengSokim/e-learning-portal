import Image from 'next/image'
import React from 'react'

function WelcomeBanner() {
  return (
    <div className='flex gap-5 items-center bg-indigo-500 rounded-xl p-5 h-[140px]'>
        <Image src="/vercel.svg" alt="banner" width={140} height={140} />
        <div>
            <h2 className="font-bold text-[26px] text-white">Welcome to the academy!</h2>
        </div>
    </div>
  )
}

export default WelcomeBanner