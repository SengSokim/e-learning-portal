import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import DOMPurify from 'isomorphic-dompurify'
import Image from 'next/image'
import React from 'react'

function ArticleContent({post}) {
   
  return (
    <div className="">
        {/*<Image src={content.imageUrl} width={400} height={400} alt="coverImg"/>*/}
        <Separator className='my-5'/>
        <div className="mt-3">
            <h3 className="font-semibold text-[28px]">{post.title}</h3>

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
           
            <div
              dangerouslySetInnerHTML={{__html: post.content ? DOMPurify.sanitize(post.content.html) : '---'}}
            />
            
        </div>
        
    </div>
  )
}

export default ArticleContent