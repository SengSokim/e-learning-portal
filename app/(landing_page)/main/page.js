"use client"

import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'
import BlogCard from '../_components/BlogCard';
import Sidebar from '../_components/Sidebar';

function Main() {
    
  return (
    <div>
      <div className={`lg:mx-[200px] text-white grid grid-cols-2 md:grid-cols-4 p-5`}>
        <div className="col-span-3 mr-2">
            <div className="mt-3">
                <BlogCard
                />
            </div>
        </div>

        <div className="hidden lg:flex">
          <div className="">
              <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main