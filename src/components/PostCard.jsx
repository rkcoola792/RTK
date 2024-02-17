import React from 'react'

const PostCard = ({data}) => {
const {title,description,price,rating,thumbnail}=data
  return (
    <>
      <div className="w-[260px] h-[360px] bg-slate-100 rounded-md ">
        <img className="h-[200px] w-full rounded-md" src={thumbnail} alt="" />
        <div className="p-4">
          <p>{title}</p>
          <p className="text-sm text-gray-600">
            {" "}
            {description.split("").splice(0, 70).join("")}
          </p>
          <p className="text-sm text-gray-600">Price : ${price} </p>
          <p className="text-sm text-gray-600">Rating : {rating}</p>
        </div>
      </div>
    </>
  );
}

export default PostCard
