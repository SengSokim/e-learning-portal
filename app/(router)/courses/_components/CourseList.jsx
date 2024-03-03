import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import CourseItem from './CourseItem';
import Link from 'next/link';

function CourseList() {

    const [courseList, setCourseList] = useState();
    useEffect(() => {
        getAllCourses();
    
    }, [])
    const getAllCourses = ()=> {
        GlobalApi.getAllCoursesList().then(response => {
           
            setCourseList(response?.courses)
        })
    }
    
    return (
        <div className='p-5 bg-white rounded-lg mt-3'>
            <div className='flex items-center justify-between'>
                <h2 className='text-[20px] font-bold text-primary'>All Courses</h2>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="All"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">All</SelectItem>
                        <SelectItem value="dark">Paid</SelectItem>
                        <SelectItem value="system">Free</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 mt-3'>
                {courseList ? courseList.map((item,index)=> (
                    <Link href={"course-preview/"+item.slug} key={index} prefetch>
                        <div >
                            <CourseItem course={item}/>
                        </div>
                    </Link>
                ))
                :[1,2,3,4,5,6,7,8,9].map((item,index)=>(
                    <div key={index} className="w-full h-[240px] rounded-xl m-2 bg-zinc-300 animate-pulse"></div>
                ))
                }
            </div>
        </div>
    )
}

export default CourseList