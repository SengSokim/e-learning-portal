"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { Search } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React, { useState } from "react";
import BlogCard from "../_components/BlogCard";
import Sidebar from "../_components/Sidebar";

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
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [search, setSearch] = useState("");
  function handleSearch() {
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set("query", search);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      <div
        className={`lg:mx-[200px] text-white grid grid-cols-2 md:grid-cols-4 p-5`}
      >
        <div className="col-span-3 mr-2 mt-3">
          <div className="text-black bg-white flex-no-wrap sticky top-0 z-10 flex items-center space-x-4 text-sm p-3 rounded-md justify-between">
            <div className="flex gap-5">
              {contentCategories.map((item, index) => (
                <Link href={item.url} key={index}>
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

            <div className="flex items-center">
              <Input
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <Button onClick={handleSearch} type="button" className="ml-3 ">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Separator className="bg-zinc-700 mt-3" />
          <div className="">
            <BlogCard />
          </div>
        </div>

        <div className="hidden lg:flex">
          <div className="">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
