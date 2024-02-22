"use client"

import React, { useEffect, useState } from 'react'
import GlobalApi from '@/app/_utils/GlobalApi'
import DOMPurify from "isomorphic-dompurify";
import Content from './_components/Content';
function CourseContent({params}) {
  const [contentInfo, setContentInfo] = useState();
  useEffect(() => {
      params&&getChapterById()
    }, [params])
  const getChapterById = () => {
  GlobalApi.getChapterById(params?.contentId).then((response) => {
      setContentInfo(response?.courseChapter)
  })
  };

  return contentInfo && (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5'>
        <Content content={contentInfo}/>
    </div>
  )
}

export default CourseContent