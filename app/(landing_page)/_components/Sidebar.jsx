"use client"
import GlobalApi from "@/app/_utils/GlobalApi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BookmarkPlus } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Sidebar({staffPicks, topics}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  function handleSearch(search) {
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set("topic", search);
    } else {
      params.delete("topic");
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    staffPicks && topics && (
      <div className="p-3 text-black">
        <div className="p-3 bg-white text-black rounded-md ">
          <h4 className="font-semibold text-[16px]">Staff Picks</h4>
          {staffPicks.map((item, index) => (
            <Link href={'/article/'+item.slug} key={index}>
              <div className="my-2 group" >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="mr-3 w-8 h-8">
                      {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                      <AvatarFallback className="bg-dawn-sky">
                        {item.author.name}
                      </AvatarFallback>
                    </Avatar>
                    <div className="leading-5">
                      <h5 className="font-medium text-[14px] text-zinc-600 group-hover:text-cloudy-sky">
                        {item.author.name}
                      </h5>
                    </div>
                  </div>

                  <div>
                    <Badge className="bg-midnight">{item.tag}</Badge>
                  </div>
                </div>
                <h4 className="font-medium mt-3 text-[14px] group-hover:text-cloudy-sky">
                  {item.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
        <div className="p-3 bg-white text-black rounded-md mt-3 ">
          <h4 className="font-semibold my-4 text-[16px]">Recommended topics</h4>
          <div className="grid grid-cols-2 gap-3">
            {topics.map((item, index) => (
              <div
                className="bg-midnight rounded-full p-2 flex justify-center hover:bg-slate-400 transition-all ease-in-out duration-200"
                key={index}
                onClick={() => handleSearch(item.name)}
              >
                <div className="text-[12px] text-white capitalize" >
                  {item.name.length > 10 ? item.name.slice(0, 10) + "..." : item.name}
                </div>
              </div>
            ))}
          </div>
          
        </div>
        <div className="p-3 bg-white text-black rounded-md mt-3 sticky top-3">
          <h4 className="font-semibold my-4 text-[16px]">Reading list</h4>
          <div className=" text-gray-500 ">
            <span className="flex">Click the <BookmarkPlus/> on any story to </span> easily add it to your reading list or a custom list that you can share.
          </div>
          
        </div>
      </div>
    )
  );
}

export default Sidebar;
