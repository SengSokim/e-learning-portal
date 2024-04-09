
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import BlogCard from "../_components/BlogCard";
import Sidebar from "../_components/Sidebar";
import { Searchbar } from "../_components/Searchbar";
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
                    className={`hover:text-violet-600 transition-all ease-in-out duration-200 ${
                      index == 1 && " text-violet-600"
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
            
          </div>

          <Separator className="bg-zinc-700 mt-3" />
          <div className="">
            <BlogCard />
          </div>
        </div>

        <div className="hidden lg:flex h-[900px] sticky top-[-200px]">
          <div className="">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
