import BlogHeader from '@/components/clients/Blog/BlogHeader'
import BlogList from '@/components/clients/Blog/BlogList'
import Navbar from '@/components/clients/Navbar'
import { BASE_URL } from '@/constants/utils'
import axios from 'axios'
import React from 'react'




const fetchAllBlogs = async () =>{
  const {data} = await axios.get(`${BASE_URL}getAllBlogs/?page=1`) 
  return (data)
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