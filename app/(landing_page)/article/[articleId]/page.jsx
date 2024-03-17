"use client";

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import RecommendSection from "./_components/RecommendSection";
import ArticleContent from "./_components/ArticleContent";
import Sidebar from "./_components/Sidebar";
import GlobalApi from "@/app/_utils/GlobalApi";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function Article({ params }) {
  const [post, setPost] = useState();
  const [recommendations, setRecommendations] = useState([]);
  useEffect(() => {
    params && getPostById(params);
    getRecommendation();
  }, [params]);
  
  const getPostById = (params) => {
    GlobalApi.getPostById(params?.articleId).then((response) => {
      setPost(response?.post);
    });
  };

  const getRecommendation = () => {
    GlobalApi.recommendations().then((response) => {
    
      setRecommendations(response?.posts);
    })
  }

  return post && recommendations ? (
    <div>
      <div className="lg:mx-[150px]  text-black grid grid-cols-2 md:grid-cols-4 lg:p-5">
        <div className="col-span-3 mr-2 ">
          <div className="mt-3 bg-white rounded-md p-5">
            <ArticleContent post={post} />
          </div>
          <div className="mt-3 bg-white rounded-md p-5">
            <RecommendSection recommendations={recommendations}/>
          </div>
        </div>

        <div className="hidden lg:flex h-full mt-3">
          <div className="ml-2">
            <Sidebar />

            <div className="bg-white p-5 rounded-lg mt-3 sticky top-3 mb-3">
              <h3 className="font-bold text-[20px] text-zinc-600 ">
                Learn to code 🧑‍💻
              </h3>
              <p className="mt-3 text-zinc-600 text-[14px]">
                Explore free courses on CSS, JS, React, AI Engineering, and UI
                Design.
              </p>
              <Image
                src="/programming1.gif"
                width={300}
                height={300}
                alt="coverImg"
              />

              <Link href={"/courses"} scroll={true}>
                <Button className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded mt-3 w-full">
                  View Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className="lg:mx-[200px]  text-black grid grid-cols-2 md:grid-cols-4 p-5">
        <div className="col-span-3 mr-2 bg-zinc-300 rounded-md p-5 h-[600px] animate-pulse"></div>
        <div className="hidden lg:flex bg-zinc-300 h-[600px] animate-pulse"></div>
      </div>
    </div>
  );
}

export default Article;
