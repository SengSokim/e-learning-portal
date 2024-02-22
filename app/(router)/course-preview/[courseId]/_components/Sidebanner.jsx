import React from 'react'
import { Lock } from 'lucide-react'
import Link from 'next/link'
function Sidebanner({chapters}) {
    
    return (
        <div className="">
            <div className="w-full h-[240px] rounded-xl m-2 bg-zinc-300 animate-pulse">
            </div>
            {chapters.map((item,index) => (
                <Link key={index} href={"/course-content/"+item.slug}>
                    <div className='m-2 rounded-xl bg-white p-3 w-full flex justify-between hover:bg-zinc-600 hover:text-white transition-all ease-in-out duration-200'>
                        {index+1}. {item.title}
                        <Lock />
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Sidebanner