import BlogHeader from '@/components/clients/Blog/BlogHeader'
import BlogList from '@/components/clients/Blog/BlogList'
import Navbar from '@/components/clients/Navbar'
import axios from 'axios'
import React from 'react'




const fetchAllBlogs = async () =>{
  const {data} = await axios.get('http://127.0.0.1:8000/api/getAllBlogs/?page=1') 
  return (data?.results)
}

const Blog = async () => {

  const data = await fetchAllBlogs()
  return (
    <div className='MainSection' style={{ display:'flex', flexDirection:'column'}}>
      <Navbar/>
      <BlogHeader/>
      <div style={{display: "flex",flexDirection: "column",flexGrow:1, overflowY: "scroll"}}t>
        <BlogList data={data} />
      </div>
    </div>
  )
}

export default Blog