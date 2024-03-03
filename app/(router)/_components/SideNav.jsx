"use client"
import { BadgeIcon, BookOpen, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function SideNav() {
    const menu = [
        {
            id:1,
            name:'All Courses',
            icon:BookOpen,
            path:'/courses'
        },
        {
            id:2,
            name:'Membership',
            icon:BadgeIcon,
            path:'/membership'
        },
        {
            id:3,
            name:'Be Instructor',
            icon:GraduationCap,
            path:'/instructor'
        }
    ]
    const path = usePathname();
  return (
    <div className='p-5 bg-white shadow-sm border h-screen'>
        <Image src='/next.svg' alt='logo' width={170} height={80} priority/>
        <hr className='mt-7'/>
        <div className='mt-8'>
            {menu.map((item,index)=> (
                <Link href={item.path} key={index}>
                    <div key={item.id} className={`group flex gap-3 mt-2 p-3 text-[18px] items-center text-gray-700 cursor-pointer hover:bg-primary hover:text-white rounded-md transition-all ease-in-out duration-200 ${path.includes(item.path) && 'bg-primary text-white'}`}>
                        <item.icon className='group-hover:animate-bounce'/>
                        <h2> {item.name}</h2>
                    
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SideNav