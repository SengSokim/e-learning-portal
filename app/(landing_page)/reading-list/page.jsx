"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import Date from "@/components/date";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import { BookmarkPlus, BookmarkMinus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SuccessAlert from "../_components/SuccessAlert";
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
function Bookmark() {
  const [posts, setPosts] = useState([]);
  const {user} = useKindeBrowserClient();
  const [showToast, setShowToast] = useState(false);

  const userId = user?.id || '';
  useEffect(() => {
    getReadingList(userId);
  }, [user]);
  const getReadingList = (userId) => {
    GlobalApi.getReadingList(userId).then((response) => {
     
      setPosts(response.readingList?.posts);
    });
  };
  
  function removeFromlist(postId) {
    GlobalApi.removeFromReadingList(userId, postId).then((response) => {
      if (response.updateReadingList.id) {
        getReadingList(userId);

        setShowToast(true);

        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      }
    });
  }
  return posts ? (
    <div>
      {showToast && <SuccessAlert />}
      <div className="mx-[150px] mb-5">
        <h3 className="text-[24px] font-bold">Reading List</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
          {posts
            ? posts.map((item, index) => (
                <div
                  className="bg-white text-black rounded-md p-3 mt-3"
                  key={index}
                >
                  <Link href={"/article/" + item.slug} prefetch>
                    <div className="flex justify-between text-zinc-500">
                      <div className="flex">
                        <Date dateString={item.date} />
                        <Badge className="ml-3">Web</Badge>
                      </div>
                      <div className="text-zinc-600 ml-3 text-[12px]">
                        <h5>3 min read</h5>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="mt-3">
                          <h3 className="font-semibold text-[24px]">
                            {item.title}
                          </h3>
                        </div>

                        <p className="my-4 text-zinc-500">
                          {item.excerpt.slice(0, 80) + " ..."}
                        </p>
                      </div>
                      <div className="pl-2">
                        <Image
                          width={300}
                          height={300}
                          src={
                            item.coverImage ? item.coverImage.url : "/next.svg"
                          }
                          alt="coverImg"
                          priority
                        />
                      </div>
                    </div>
                  </Link>
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
                    <div
                      className="hover:bg-gray-200 rounded-full p-2 transition-all ease-in-out duration-200"
                      onClick={() => removeFromlist(item.id)}
                    >
                      <BookmarkMinus />
                    </div>
                  </div>
                </div>
              ))
            : [1, 2, 3].map((item, index) => (
                <div
                  key={index}
                  className="bg-zinc-300 rounded-md p-3 mt-3 h-[280px] animate-pulse"
                ></div>
              ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <p className="text-lg font-bold tracking-tight text-gray-900 sm:text-4xl">
          Add your favorite stories to your list.
        </p>

        <p className="mt-4 text-gray-500 flex text-center justify-center">
          Simply click the on <BookmarkPlus /> to get started.
        </p>
        <Link
          href={"/"}
          className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          {" "}
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default Bookmark;
