
import Image from 'next/image'
import React from 'react'
import { Badge } from "@/components/ui/badge"
function CourseItem({ course }) {
  return (
    <div className="group bg-zinc-100 border-b-4 border-indigo-500 h-[300px] md:h-[240px] p-3 rounded-t-md hover:bg-zinc-600 hover:text-white rounded-md transition-all ease-in-out duration-200">
        <Badge className="flex float-right bg-emerald-400 text-white">{course.isFree ? 'Free': ''}</Badge>
        <Image src={course.coverImage.url} width={160} height={160} alt="coverImg"/>
        <h2 className="text-[18px] font-semibold">
            {course.name.length > 50 ? course.name.slice(0,47)+'...' : course.name}
        </h2>
        
    </div>
  )
}

export default CourseItem