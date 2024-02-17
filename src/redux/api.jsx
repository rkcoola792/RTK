import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const myApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  tagTypes:["Products"],
  endpoints: (builder) => ({
    getPosts: builder.query({ query: () => "products",
    providesTags:["Products"]
  }),

    newPost: builder.mutation( {
      query:(product)=>({
        url:"products/add",
        method:"Post",
        body:product
      }),
      invalidatesTags:["Products"]
    }),
  }),
});

export const {useGetPostsQuery,useNewPostMutation}=myApi