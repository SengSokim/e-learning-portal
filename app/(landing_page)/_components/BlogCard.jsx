import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BookmarkMinus, BookmarkPlus, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import GlobalApi from "@/app/_utils/GlobalApi";
import Date from "@/components/date";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import SuccessAlert from "./SuccessAlert";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
function BlogCard() {
  const [posts, setPosts] = useState();
  const [user, setUser] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [email, setEmail] = useState();
  const searchParams = useSearchParams();
  const search = searchParams.get("query") || "";
  const userId = user?.id || '';
  const [showToast, setShowToast] = useState(false);
  const supabase = createClientComponentClient()
  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.auth.getUser()
   
      setUser(data.user)
      setEmail(data.user.email)
      setIsLoaded(true)
    }
    getData()
  }, []);

  useEffect(() => {
    isLoaded && getAllPosts(search, userId);
  }, [search, userId]);

  const getAllPosts = (search, userId) => {
    GlobalApi.getPosts(search, userId).then((response) =>
      setPosts(response?.posts)
    );
  };

  function addToList(postId) {
    if (isLoaded) {
      GlobalApi.addToReadingList(userId, postId, email).then((response) => {
        if (response.upsertReadingList.id) {
          getAllPosts(search, userId);
          setShowToast(true);

          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        }
      });
    }
  }

  function removeFromlist(postId) {
    if (isLoaded) {
      GlobalApi.removeFromReadingList(userId, postId).then((response) => {
        if (response.updateReadingList.id) {
          getAllPosts(search, userId);
          setShowToast(true);

          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        }
      });
    }
  }

  return (
    <div>
      {showToast && <SuccessAlert />}
      <div>
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
                      <Badge className="ml-3">{item.tag}</Badge>
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

                      <p className="my-4 text-zinc-500">{item.excerpt}</p>
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
                  <div className={!user ? "hidden" : "flex gap-3"}>
                    {!item.subscribers.length ? (
                      <div
                        className="hover:bg-gray-200 rounded-full p-2 transition-all ease-in-out duration-200"
                        onClick={() => addToList(item.id)}
                      >
                        <BookmarkPlus />
                      </div>
                    ) : (
                      <div
                        className="hover:bg-gray-200 rounded-full p-2 transition-all ease-in-out duration-200"
                        onClick={() => removeFromlist(item.id)}
                      >
                        <BookmarkMinus />
                      </div>
                    )}

                    <div className="hover:bg-gray-200 rounded-full p-2 transition-all ease-in-out duration-200">
                      <MoreHorizontal />
                    </div>
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
  );
}

export default BlogCard;
