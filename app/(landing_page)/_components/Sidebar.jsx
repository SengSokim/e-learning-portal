"use client"
import GlobalApi from "@/app/_utils/GlobalApi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BookmarkPlus } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Sidebar() {
  const [staffPicks, setStaffPicks] = useState([]);
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    Promise.all([getStaffPicks(), getTopics()])
      .then(() => setLoading(false))
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  
  const getStaffPicks = () => {
    return GlobalApi.staffPicks()
      .then((response) => {
        setStaffPicks(response?.posts || []);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching staff picks:", error);
        throw error;
      });
  };
  
  const getTopics = () => {
    return GlobalApi.getTopics()
      .then((response) => {
        setTopics(response?.topics || []);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching topics:", error);
        throw error;
      });
  };
  
  if (loading) {
    return <div className="mt-3 ml-2 p-3 bg-zinc-300 text-black rounded-md w-[250px] h-[680px] animate-pulse"></div>;
  }
  
  if (error) {
    return <div className="mt-3 ml-2">Error: {error.message}</div>;
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
                      <AvatarFallback className="bg-orange-300">
                        {item.author.name}
                      </AvatarFallback>
                    </Avatar>
                    <div className="leading-5">
                      <h5 className="font-medium text-[14px] text-zinc-600 group-hover:text-violet-600">
                        {item.author.name}
                      </h5>
                    </div>
                  </div>

                  <div>
                    <Badge>{item.tag}</Badge>
                  </div>
                </div>
                <h4 className="font-medium mt-3 text-[14px] group-hover:text-violet-600">
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
                className="bg-gray-600 rounded-full p-2 flex justify-center hover:bg-slate-400 transition-all ease-in-out duration-200"
                key={index}
              >
                <p className="text-[12px] text-white capitalize">
                  {item.name.length > 10 ? item.name.slice(0, 10) + "..." : item.name}
                </p>
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
