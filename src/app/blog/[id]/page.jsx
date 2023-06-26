import BlogContent from '@/components/clients/Blog/BlogContent'
import Navbar from '@/components/clients/Navbar'
import axios from 'axios'
import React from 'react'

const fetchBlogDetail = async (id) =>{
  const {data} = await axios.get(`http://127.0.0.1:8000/api/getblog/${id}`) 
  return (data)
}

const page = async ({params}) => {
  const data = await fetchBlogDetail(params.id)

  return (
    <div className='MainSection'>
        <Navbar/>
        <BlogContent data={data}/>
    </div>
  )
}

export default page