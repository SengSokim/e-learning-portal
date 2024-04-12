"use client";
import React from "react";
import Date from '@/components/date'
import GlobalApi from "@/app/_utils/GlobalApi";
import { useState } from "react";
import dayjs from "dayjs";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
function CommentSection({comments,slug}) {
    
    const [textComment, setTextComment] = useState();
    const today = dayjs().format('YYYY-MM-DD');
    const [allComments, setAllComments] = useState(comments);
    const { user } = useKindeBrowserClient();
    function addComment(content) {
        const username = user.given_name;
        GlobalApi.commentOnPost(content,today,username,slug).then((response) => {
          setAllComments([...allComments,response.createComment]);
        });
        setTextComment('')
      }
  return (
    <div>
        <section className="bg-white dark:bg-gray-900 py-8 antialiased rounded-md">
            <div className="mx-5">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg lg:text-2xl font-bold text-nightblack dark:text-white">
                Discussion
                </h2>
            </div>
            <form className="mb-6">
                <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <label htmlFor="comment" className="sr-only">
                    Your comment
                </label>
                <textarea
                    id="comment"
                    rows="6"
                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                    placeholder="Write a comment..."
                    required
                    value={textComment}
                    onChange={(e) => setTextComment(e.target.value)}
                ></textarea>
                </div>
                <button
                type="button"
                onClick={() => addComment(textComment)}
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-midnight rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-gray-500 transition-all ease-in-out"
                >
                Post comment
                </button>
            </form>
            {allComments.map((item,index) => (
                <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900" key={index}>
                <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    <Avatar className=" w-8 h-8 mr-2">
                        <AvatarFallback className="bg-dawn-sky uppercase">
                        {item.username.slice(0,2)}
                        </AvatarFallback>
                    </Avatar>
                    {item.username}
                    </div>
                  
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                        <Date dateString={item.date}/>
                    </div>
                
                </div>
                

                <DropdownMenu>
                    <DropdownMenuTrigger className="items-center">
                        <MoreHorizontal color="#696969"/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Remove
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Report
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </footer>
                <div className="text-gray-500 dark:text-gray-400">
                {item.content}
                </div>
                <div className="flex items-center mt-4 space-x-4">
                <button
                    type="button"
                    className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                >
                    <svg
                    className="mr-1.5 w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 18"
                    >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                    />
                    </svg>
                    Reply
                </button>
                </div>
            </article>
            ))
                
            }
            
            </div>
        </section>
    </div>
  );
}

export default CommentSection;
