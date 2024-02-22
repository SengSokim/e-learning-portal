"use client";

import React, { useState,useEffect } from "react";
import RecommendSection from "./_components/RecommendSection";
import ArticleContent from "./_components/ArticleContent";
import Sidebar from "./_components/Sidebar";
import GlobalApi from "@/app/_utils/GlobalApi";

function Article({ params }) {
 
  const [post, setPost] = useState();
  useEffect(() => {
    params && getPostById(params)
  }, [params])
 
  const getPostById = (params) => {
    GlobalApi.getPostById(params?.articleId).then(response => {
     
      setPost(response?.post)
    })
  }
 

  return post && (
    <div>
      <div className="lg:mx-[200px]  text-black grid grid-cols-2 md:grid-cols-4 p-5">
        <div className="col-span-3 mr-2 bg-white rounded-md p-5">
          <div className="mt-3">
            <ArticleContent post={post} />
          </div>
          <div className="mt-3">
            <RecommendSection />
          </div>
        </div>

        <div className="hidden lg:flex ">
          <div className="ml-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
