import { Separator } from '@/components/ui/separator'
import React from 'react'
import RichTextEditor from '../_components/Editor'

function Write() {
  return (
    <div className="flex justify-center align-items-center bg-white mx-[25px] lg:mx-[200px]">
     
      <div className="m-[25px]">
        <h3 className='font-semibold text-[24px]'>Rich Text Editor</h3>
        <Separator className="my-3"/>
        <div className="w-[40em] lg:w-[60em]">
          <RichTextEditor />
        </div>
        
      </div>
        
    </div>
  )
}

export default Write