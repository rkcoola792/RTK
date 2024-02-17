import './App.css'
import { useGetPostsQuery } from "./redux/api";
import PostCard from './components/PostCard';

function App() {
 const {isError,isLoading,isSuccess,data,error} = useGetPostsQuery();
   let products = data?.products;
   console.log("products",products)
 
  return (
    <div className='flex flex-col justify-center items-center mt-4'>
    <h1 className='text-3xl'>Products</h1>
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


export default App
