import "./App.css";
import { useGetPostsQuery, useNewPostMutation } from "./redux/api";
import PostCard from "./components/PostCard";
import { useState } from "react";
import NewPostCard from "./components/NewPostCard";
import {useForm} from "react-hook-form"
import { DevTool } from "@hookform/devtools";

function App() {
  const form =useForm();
  const {register,control,handleSubmit,formState,getValues,reset}=form
  const{errors}=formState;
  const {  data } = useGetPostsQuery();

  let products = data?.products;
  const [newPost]=useNewPostMutation()
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [newProducts,setNewProducts]=useState([])
  function handleClick(e) {
    e.preventDefault();
    // const product={
    //   name,description,price
    // }
    // setNewProducts(prev=>prev.concat(product))

    // newPost(product)
    //  setName("");
    //  setDescription("");
    //  setPrice("");

    console.log("form values", getValues())
  }

  function onSubmit(data){
    console.log("form data", data);
    console.log(data?.productName);
    const product = {
      name: data?.productName,
      description: data?.productDescription,
      price: data?.productPrice,
    };
   setNewProducts(prev=>prev.concat(product))
   reset()
  }
  return (
    <>
      <div className="flex flex-col justify-center gap-4 items-center mt-4">
        <h1 className="text-3xl">Products</h1>

        <form
          action=""
          className="flex gap-4"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="flex flex-col gap-1">
            <input
              className="p-1 px-4 border border-black rounded-md"
              type="text"
              placeholder="Product name"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              {...register("productName", {
                required: "Product name is required",
              })}
            />
            <p className="text-sm text-red-500 ml-2">{errors?.productName?.message}</p>
          </div>
          <div className="flex flex-col gap-1">
            <input
              className="p-1 px-4 border border-black rounded-md"
              type="text"
              placeholder="Product description"
              // value={description}
              // onChange={(e) => setDescription(e.target.value)}
              {...register("productDescription", {
                required: "Product description is required",
              })}
            />
            <p className="text-sm text-red-500 ml-2">{errors?.productDescription?.message}</p>
          </div>
          <div className="flex flex-col gap-1">
            <input
              className="p-1 border px-4 border-black rounded-md"
              type="text"
              placeholder="Product price"
              // value={price}
              // onChange={(e) => setPrice(e.target.value)}
              {...register("productPrice", {
                required: "Product price is required",
                pattern: {
                  value: /^(0|[1-9][0-9]*)$/,
                  message: "Enter a valid price",
                },
              })}
            />
            <p className="text-sm text-red-500 ml-2">{errors?.productPrice?.message}</p>
          </div>
          <button
            type="submit"
            className="bg-green-300 p-2 px-4 rounded-md h-10"
            // onClick={handleClick}
          >
            Add Product
          </button>
        </form>
        <DevTool control={control}></DevTool>
        <div className="app flex flex-wrap gap-4 mx-20 my-8">
          {products?.map((ele, index) => (
            <div key={ele.id} className="postcard ">
              <PostCard data={ele}></PostCard>
            </div>
          ))}
        </div>
      </div>
      <div>
        {newProducts.length > 0 && (
          <div className="flex flex-col px-20">
            <h1 className="text-3xl mb-4 ml-[45%]">New Products</h1>
            <div className="flex gap-4 flex-wrap ">
              {newProducts.map((ele, index) => (
                <NewPostCard key={index} data={ele}></NewPostCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
