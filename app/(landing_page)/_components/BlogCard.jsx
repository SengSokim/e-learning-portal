import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { BookmarkPlus, MoreHorizontal } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import GlobalApi from "@/app/_utils/GlobalApi";
import Date from "@/components/date";


function BlogCard() {
  const [posts, setPosts] = useState();

    useEffect(() => {
      getAllPosts()
    }, [])
    const getAllPosts = () => {
     
      GlobalApi.getPosts().then(response => (
        setPosts(response?.posts)
      ))
    }
    
  const contentCategories = ["For you", "Following", "Javascript", "Lifestyle"];
  return posts && (
    <div>
      <div className="bg-primary flex items-center space-x-4 text-sm p-3 rounded-md">
        {contentCategories.map((item, index) => (
          <div key={index} className={`hover:text-violet-600 transition-all ease-in-out duration-200 ${index ==1  && ' text-violet-600'}`}>
            {item}
          </div>
        ))}
      </div>
      <Separator className="bg-zinc-700 mt-3" />
      <div >
        {posts.map((item, index) => (
            <Link href={'/article/'+item.slug} key={index}>
                <div className="bg-white text-black rounded-md p-3 mt-3" >
                    <div className="flex justify-between text-zinc-500">
                      <div className="flex">
                        
                        <Date dateString={item.date}/>
                        <Badge className="ml-3">Web</Badge>
                      </div>
                      <div className="text-zinc-600 ml-3 text-[12px]">
                          <h5>3 min read</h5>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h3 className="font-semibold text-[24px]">{item.title}</h3>
                    </div>

                    <p className="my-4 text-zinc-500">{item.excerpt}</p>
                    <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Avatar className="mr-3 ">
                        <AvatarFallback>{item.author.name}</AvatarFallback>
                        </Avatar>
                        <div className="leading-5">
                        <h5 className="font-medium text-[16px] text-gray-700">
                            {item.author.name}
                        </h5>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <BookmarkPlus />
                        <MoreHorizontal />
                    </div>
                    </div>
                </div>
            </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogCard;
