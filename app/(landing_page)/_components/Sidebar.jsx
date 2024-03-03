import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import React from "react";

function Sidebar() {
  const staffPicks = [
    {
      authorName: "Super Admin",
      initials: "SA",
      title: "Lorem ipsum dolor sit amet.",
    },
    {
      authorName: "John Doe",
      initials: "JD",
      title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      authorName: "Kayden Admin",
      initials: "KA",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, suscipit!",
    },
  ];
  const recommendedTopics = [
    'Web development',
    'Block chain',
    'AI',
    'Python',
    'JavaScript',
    'CSS'
  ]
  return (
    <div className="p-3 text-black ">
      <div className="p-3 bg-white text-black rounded-md ">
        <h4 className="font-semibold text-[16px]">Staff Picks</h4>
        {staffPicks.map((item, index) => (
          <div className="my-2" key={index}>
            <div className="flex items-center">
              <Avatar className="mr-3 w-8 h-8">
                {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                <AvatarFallback className="bg-orange-300">
                  {item.initials}
                </AvatarFallback>
              </Avatar>
              <div className="leading-5">
                <h5 className="font-medium text-[14px] text-zinc-600">
                  {item.authorName}
                </h5>
              </div>
            </div>
            <h4 className="font-medium mt-3 text-[14px]">{item.title}</h4>
          </div>
        ))}
      </div>
      <div className="p-3 bg-white text-black rounded-md mt-3 ">
        <h4 className="font-semibold my-4 text-[16px]">Recommended topics</h4>
        <div className="grid grid-cols-2 gap-3">
          {recommendedTopics.map((item,index) => (
            <div className="bg-gray-600 rounded-full p-2 flex justify-center hover:bg-slate-400 transition-all ease-in-out duration-200" key={index}>
              <p className="text-[12px] text-white">{item.slice(0, 10)+'...'}</p>
            </div>
          ))}
        
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
