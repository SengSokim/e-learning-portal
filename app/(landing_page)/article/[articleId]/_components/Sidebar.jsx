import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Sidebar() {
  return (
    <div className="">
      <div className="bg-white p-5 rounded-lg">
        <h3 className="font-bold text-[20px] text-zinc-600">
          cheaDEV Community
        </h3>
        <div className=" p-3 rounded-lg w-[100px]">
          <Image src="/logo.svg" alt="logo" width={140} height={60} priority/>
        </div>
        <p className="mt-3 text-zinc-600 text-[14px]">
          Dedicated platform for immersive eLearning experiences and insightful
          blog content! Our mission is to empower learners, educators, and
          enthusiasts alike with high-quality, accessible education and
          thought-provoking articles that foster continuous growth and
          knowledge-sharing.
        </p>
      </div>
      <div className="bg-white p-5 rounded-lg mt-3">
        <h3 className="font-bold text-[20px] text-zinc-600 ">
          Email Newsletter Signup
        </h3>
        <p className="mt-3 text-zinc-600 text-[14px]">
          Stay in the loop and never miss an update! Sign up for our newsletter
          to receive the latest news, exclusive content, and special offers
          directly to your inbox.
        </p>
        <Input type="email" placeholder="Email" className="mt-3" />
        <Button className="bg-violet-600 mt-3 w-full">Sign Up</Button>
      </div>
      
      
    </div>
  );
}

export default Sidebar;
