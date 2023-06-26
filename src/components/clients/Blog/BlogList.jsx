'use client'
import { Button, Container } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'


const BlogList = ({data}) => {
  const [blog, setBlog] = useState(data)
  const [page, setPage] = useState(2)
  const [isNext, setIsNext] = useState(true)

  const loadMoreData = async () =>{
    const response = await axios.get(`http://127.0.0.1:8000/api/getAllBlogs/?page=${page}`, { 
      headers:{
        'content-type': 'application/json'
      }
    }) 
    console.log(response)
    if(response?.request?.status === 200){
      setPage((prevPage)=>prevPage + 1)
      setBlog((prevBlog)=>[...prevBlog, ...response?.data?.results]) 
      if(response?.data?.next === null){
        setIsNext(false)
      }
    }
  }

  
  
  return (
    <Container maxWidth='md' sx={{display:'flex', width:'100%', flexDirection:'column', alignItems:'center', mt:5, gap:4, pb:4,}}>
      {blog?.map((item)=>{
        return (
            <BlogCard blog={item} key={item?.id} />
        )
      })}
      {isNext && (
        <Button onClick={loadMoreData} variant='contained'>LOAD MORE</Button>
      )}
    </Container>
  )
}

export default BlogList