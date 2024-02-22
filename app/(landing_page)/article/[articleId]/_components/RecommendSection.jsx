import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import React from 'react'

function RecommendSection() {
  const recommends = [
    {
      title:'Learn more about Graphql',
      author:{
        name:'Mike Joe',
        initials:'MJ'
      },
      date:'Feb 10'
    },
    {
      title:'What you need to know about CSS',
      author:{
        name:'Lauren Joe',
        initials:'LJ'
      },
      date:'Feb 10'
    },
    {
      title:'Javascript tips and tricks',
      author:{
        name:'Mikasa Joe',
        initials:'MJ'
      },
      date:'Feb 10'
    }
  ]
  return (
    <div className=''>
        <h3 className="font-semibold text-[20px]">Recommendation</h3>
        {recommends.map((item,index) => (
          <div className='flex items-center mt-3' key={index}>
          <Avatar className="mr-3 w-16 h-16">
            {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
            <AvatarFallback className="bg-violet-300">
              <h4 className="font-semibold text-[18px]" >
                {item.author.initials}
              </h4>
              
            </AvatarFallback>
          </Avatar>
          <div className='group'>
            <h3 className="font-bold text-[20px] group-hover:text-violet-600">{item.title}</h3>
            <h5 className="text-[18px] text-zinc-600 group-hover:text-violet-600">
              {item.author.name} - {item.date}
            </h5>
          </div>
        </div>
        ))}
        
    </div>
  )
}

export default RecommendSection