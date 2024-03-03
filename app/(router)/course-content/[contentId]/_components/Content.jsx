import React from 'react'

function Content({content}) {
  return (
    <div className='col-span-2 bg-white p-5 rounded-xl leading-loose'>
        <title>{content.title}</title>
        <h2 className='text-[24px] font-semibold text-violet-400'>{content.title}</h2>
        {content.courseContents.map((item,index) => (
            <div key={index} className='overflow-x-auto'>
                <h3 className='text-[20px] font-semibold'>{item.title}</h3>
                <div
                    dangerouslySetInnerHTML={{__html: item.content ? DOMPurify.sanitize(item.content.html) : '---'}}
                  />
            </div>
        ))}
    </div>
  )
}

export default Content