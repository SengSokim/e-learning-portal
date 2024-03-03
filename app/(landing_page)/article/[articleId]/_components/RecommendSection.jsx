import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";

function RecommendSection() {
  const recommends = [
    {
      title: "Learn more about Graphql",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, recusandae?",
      imageUrl: "/next.svg",
      author: {
        name: "Mike Joe",
        initials: "MJ",
      },
      date: "Feb 10",
    },
    {
      title: "What you need to know about CSS",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, recusandae?",
      imageUrl: "/next.svg",
      author: {
        name: "Lauren Joe",
        initials: "LJ",
      },
      date: "Feb 10",
    },
    {
      title: "Javascript tips and tricks",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, recusandae?",
      imageUrl: "/next.svg",
      author: {
        name: "Mikasa Joe",
        initials: "MJ",
      },
      date: "Feb 10",
    },
  ];
  return (
    <div className="">
      <h3 className="font-semibold text-[20px]">Recommendation</h3>
      {recommends.map((item, index) => (
        <div className="flex justify-between items-center mt-3" key={index}>
          <div className="group">
            <h4 className="font-bold text-[20px] group-hover:text-violet-600">
              {item.title}
            </h4>
            <p className="py-3">{item.excerpt}</p>
            <div className="flex items-center">
              <Avatar className="mr-3 w-8 h-8">
                {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                <AvatarFallback className="bg-violet-300">
                  <h4 className="font-semibold text-[18px]">
                    {item.author.initials}
                  </h4>
                </AvatarFallback>
              </Avatar>
              <h5 className="text-[18px] text-zinc-600 group-hover:text-violet-600">
                {item.author.name} - {item.date}
              </h5>
            </div>
          </div>
          <div>
            <Image src={item.imageUrl} width={0} height={0} alt="coverIMG" priority className="w-24 h-24"/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecommendSection;
