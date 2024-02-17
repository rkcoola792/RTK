import "./App.css";
import { useGetPostsQuery, useNewPostMutation } from "./redux/api";
import PostCard from "./components/PostCard";
import { useState } from "react";
import NewPostCard from "./components/NewPostCard";

function App() {
  const {  data } = useGetPostsQuery();
  let products = data?.products;
  const [newPost]=useNewPostMutation()
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [newProducts,setNewProducts]=useState([])
  function handleClick(e) {
    e.preventDefault();
    const product={
      name,description,price
    }
    setNewProducts(prev=>prev.concat(product))

    newPost(product)
     setName("");
     setDescription("");
     setPrice("");
  }
  return (<>
    <div className="flex flex-col justify-center gap-4 items-center mt-4">
      <h1 className="text-3xl">Products</h1>

      <form action="" className="flex gap-4">
        <input
          className="p-1 px-4 border border-black rounded-md"
          type="text"
          placeholder=" Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="p-1  px-4 border border-black rounded-md"
          type="text"
          placeholder="Product description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="p-1 border px-4 border-black rounded-md"
          type="text"
          placeholder="Product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button
          className="bg-green-300 p-2 px-4 rounded-md"
          onClick={handleClick}
        >
          Add Product
        </button>
      </form>
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
              {newProducts.map((ele,index) => (
                <NewPostCard  key={index} data={ele}></NewPostCard>
              ))}
            </div>
          </div>
        )}
      </div>
      </>
  );
}

export default App;
