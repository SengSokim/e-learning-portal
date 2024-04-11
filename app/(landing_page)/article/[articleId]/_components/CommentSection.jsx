"use client";
import React from "react";
import Date from '@/components/date'
import GlobalApi from "@/app/_utils/GlobalApi";
import { useState } from "react";
import dayjs from "dayjs";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
                <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
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
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-gray-500 transition-all ease-in-out"
                >
                Post comment
                </button>
            </form>
            {allComments.map((item,index) => (
                <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900" key={index}>
                <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    <Avatar className=" w-8 h-8 mr-2">
                        <AvatarFallback className="bg-orange-500 uppercase">
                        {item.username.slice(0,2)}
                        </AvatarFallback>
                    </Avatar>
                    {item.username}
                    </p>
                  
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                        <Date dateString={item.date}/>
                    </div>
                
                </div>
                <button
                    id="dropdownComment1Button"
                    data-dropdown-toggle="dropdownComment1"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                >
                    <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 3"
                    >
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                    <span className="sr-only">Comment settings</span>
                </button>

                <div
                    id="dropdownComment1"
                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                    <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton"
                    >
                    <li>
                        <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                        Edit
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                        Remove
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                        Report
                        </a>
                    </li>
                    </ul>
                </div>
                </footer>
                <p className="text-gray-500 dark:text-gray-400">
                {item.content}
                </p>
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
