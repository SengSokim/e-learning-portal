import Image from 'next/image'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import DOMPurify from "isomorphic-dompurify";
function CourseVideoDescription({course}) {
  
  return (
    <div className='p-3'>
      <title>{course.name}</title>
      <h2 className="text-[20px] font-semibold">{course.name}</h2>
      <Image src={course.coverImage.url} width={250} height={250} alt="coverImg"/>
      <p>
        {course.description}
      </p>
      <h2 className='text-[20px] font-semibold mt-3'>Chapters</h2>

      
      {course.courseChapters.map((item,index) => (
        <div key={item.id}>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent >
                <div
                    dangerouslySetInnerHTML={{__html: item.content ? DOMPurify.sanitize(item.content.html) : '---'}}
                  />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
      <div></div>
    </div>
  )
}

export default CourseVideoDescription