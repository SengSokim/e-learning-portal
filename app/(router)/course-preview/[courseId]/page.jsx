"use client"

import GlobalApi from '@/app/_utils/GlobalApi'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CourseVideoDescription from './_components/CourseVideoDescription'
import Sidebanner from './_components/Sidebanner'

function CoursePreview({params}) {
  const [courseInfo, setCourseInfo] = useState();
  useEffect(() => {
    params&&getCourseVideoById()
  }, [params])
  const getCourseVideoById = () => {
    GlobalApi.getCourseById(params?.courseId).then((response) => {
      setCourseInfo(response?.course)
    })
  };

  return courseInfo&&(
    <div className='grid grid-cols-1 md:grid-cols-3 p-5'>
      <div className='col-span-2 bg-white p-3 rounded-xl'>
        <CourseVideoDescription course={courseInfo}/>
      </div>
      <div>
        <Sidebanner chapters={courseInfo.courseChapters}/>
      </div>
    </div>
  )
}

export default CoursePreview