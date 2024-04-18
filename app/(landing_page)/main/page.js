"use client"
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import BlogCard from "../_components/BlogCard";
import Sidebar from "../_components/Sidebar";
import { Searchbar } from "../_components/Searchbar";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import GlobalApi from "@/app/_utils/GlobalApi";
function Main() {
  const contentCategories = [
    {
      tab: "For you",
      url: "/for-you",
    },
    {
      tab: "Following",
      url: "/following",
    },
    {
      tab: "Javacript",
      url: "/tab-javascript",
    },
    {
      tab: "Reading List",
      url: "/reading-list",
    },
  ];
  const [staffPicks, setStaffPicks] = useState([]);
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
    return <div className="mt-3 ml-2 p-3 bg-zinc-300 text-black rounded-md w-auto h-[680px] animate-pulse"></div>;
  }
  
  if (error) {
    return <div className="mt-3 ml-2">Error: {error.message}</div>;
  }

  return (
    <div>
      <div
        className={`lg:mx-[200px] text-white grid grid-cols-2 md:grid-cols-4 lg:p-5`}
      >
        <div className="col-span-3 mr-2 mt-3">
          <div className="text-black bg-white flex-no-wrap sticky top-0 z-10 lg:flex items-center space-x-4 text-sm p-3 rounded-md justify-between">
            <div className="flex gap-5 justify-evenly">
              {contentCategories.map((item, index) => (
                <Link
                  href={item.url}
                  key={index}
                  
                >
                  <div
                    className={`hover:text-cloudy-sky transition-all ease-in-out duration-200 ${
                      index == 1 && " text-cloudy-sky"
                    }`}
                  >
                    {item.tab}
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-3 lg">
              <Searchbar />
            </div>
            <div className="lg:hidden mt-3 flex overflow-x-auto">
              {
                topics ? (topics.map((item, index) => (
                  <div 
                    className="rounded-md mr-3 bg-midnight text-white p-2 whitespace-nowrap" 
                    key={index} 
                    onClick={() => handleSearch(item.name)}>
                    <div className="capitalize">
                     {item.name}
                    </div>
                    
                  </div>
                ))):(
                  <div>Loading...</div>
                )
              }
            </div>
          </div>

          <div className="">
            <BlogCard />
          </div>
        </div>

        <div className="hidden lg:flex h-[900px] sticky top-[-200px]">
          <div className="">
            <Sidebar staffPicks={staffPicks} topics={topics}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
