import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Blogcard } from './BlogCard/Blogcard';

export const Blog = () => {
      const [blogs, setBlogs] = useState([]);
       const fetchBlogs = async () => {
    try {
      const response = await axios.get("/blogs.json");
     setBlogs(response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  console.log(blogs);
  return (
    <div className='max-w-7xl m-auto py-12'>
        <h1 className='text-4xl mb-4 font-bold'>Latest Articles</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                blogs?.map(blog=><Blogcard key={blog.id} blog={blog}/>)
            }
        </div>
    </div>
  )
}
