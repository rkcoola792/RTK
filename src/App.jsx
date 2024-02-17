import "./App.css";
import { useGetPostsQuery } from "./redux/api";
import PostCard from "./components/PostCard";
import { useState } from "react";

function App() {
  const { isLoading, data } = useGetPostsQuery();
  let products = data?.products;
  // console.log("products", products);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  function handleClick(e){
    e.preventDefault()

    console.log(name,description,price)
    setName("")
    setDescription("")
    setPrice("")
  }
  return (
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
        <button className="bg-green-300 p-2 px-4 rounded-md" onClick={handleClick}>
          Add Product
        </button>
      </form>
      <div className="app flex flex-wrap gap-4 mx-20 my-8">
        {products?.map((ele, index) => (
          <div className="postcard ">
            <PostCard key={ele.id} data={ele}></PostCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
