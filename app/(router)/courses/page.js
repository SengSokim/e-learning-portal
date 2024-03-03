"use client"

import React, { useEffect, useState } from 'react'
import CourseList from './_components/CourseList'
import Sidebanner from './_components/Sidebanner'
import WelcomeBanner from './_components/WelcomeBanner'

function Courses() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-5">
      <title>Courses</title>
      <div className="col-span-3">
        <WelcomeBanner />

        <div>
          <CourseList />
        </div>
      </div>
      <div>
        <Sidebanner/>
      </div>
    </div>
  )
}

export default Courses