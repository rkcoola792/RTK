import React from 'react'

const NewPostCard = (props) => {
  

            
  return (
    <div className="w-[260px] h-[360px] bg-slate-100 rounded-md">
      <img className='rounded-md'
        src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg"
        alt=""
      />
      <div className='p-4'>
        <p>{props.data.name}</p>
        <p className="text-sm text-gray-600">{props.data.description}</p>
        <p className="text-sm text-gray-600">Price : ${props.data.price}</p>
        <p className="text-sm text-gray-600">Rating : 4</p>
      </div>
    </div>
  );
}

export default NewPostCard
