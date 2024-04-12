import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import React from "react";

function RecommendSection({recommendations}) {
  return (
    <div className="">
      <h3 className="font-semibold text-[20px]">Recommendation</h3>
      {recommendations.map((item,index) => (
        <Link key={index} href={`/article/${item.slug}`}>
        <div className="lg:flex justify-between items-center mt-3" >
          <div className="group">
            <h4 className="font-bold text-[20px] group-hover:text-clear-sky">
              {item.title}
            </h4>
            <div className="py-3">{item.excerpt}</div>
            <div className="flex items-center">
              <Avatar className="mr-3 w-8 h-8">
                {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                <AvatarFallback className="bg-dawn-sky">
                  <h4 className="font-semibold text-[12px]">
                    {item.author.name}
                  </h4>
                </AvatarFallback>
              </Avatar>
              <h5 className="text-[18px] text-zinc-600 group-hover:text-clear-sky">
                {item.author.name} - {item.date}
              </h5>
            </div>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}

export default RecommendSection;
