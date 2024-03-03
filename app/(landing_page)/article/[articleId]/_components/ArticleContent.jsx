import Date from '@/components/date'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import DOMPurify from 'isomorphic-dompurify'
import Image from 'next/image'
import React from 'react'

function ArticleContent({post}) {
  
  return post && (
    <div className="">
        <title>{post.title}</title>
        <div className='w-full'>
          <Image className="object-cover w-full h-[600px]" priority src={post.coverImage? post.coverImage.url : '/next.svg'} width={500} height={500} alt="coverImg"/>
        </div>
        <Separator className='my-5'/>
        <div className="mt-3">
            <h3 className="font-semibold text-[28px]">{post.title}</h3>
            <div className="flex justify-between items-center my-2">
              <div className="flex items-center">
                  <Avatar className="mr-3 ">
                  <AvatarFallback>{post.author.name}</AvatarFallback>
                  </Avatar>
                  <div className="leading-5">
                  <h5 className="font-medium text-[16px] text-gray-700">
                      {post.author.name}
                  </h5>
                  </div>
              </div>
              <div>
                <Date dateString={post.date}/>
              </div>
            </div>
            <div className="mt-5"
              dangerouslySetInnerHTML={{__html: post.content ? DOMPurify.sanitize(post.content.html) : '---'}}
            />
            
        </div>
        
    </div>
  )
}

export default ArticleContent