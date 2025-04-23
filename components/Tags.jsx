import React from 'react'

const Tags = (props) => {
  const tags = props.tags;
  const tagArray = [];

  for(let i = 0; i < tags.length; i++){
    tagArray.push(<p>{tags[i]}</p>)
  }

  return (
    <div className='hidden xl:block w-1/4 px-10'>
      <h2 className='font-semibold font-outfit text-sm text-gray-sub pb-5'>TAGS</h2>
      <div className='tag font-urbanist text-[1.2rem] lg:text-[1rem]'>
        {tagArray}
      </div>
    </div>
  )
}

export default Tags
