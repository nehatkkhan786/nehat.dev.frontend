'use client'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Moment from 'react-moment';
import 'moment-timezone';

const BlogCard = ({blog}) => {
  
  return (
   <Box key={blog?.id} sx={{display:'flex', flexDirection:'column', gap:2 ,padding:1, boxShadow:6, width:'100%',cursor:'pointer',}} >
    
      <Box sx={{justifyContent:'space-between', display:'flex', flexDirection:{xs:'column', md:'row'}}}>
          <Typography sx={{fontSize:{xs:16, md:18}, fontWeight:'bold'}}> {blog?.title}</Typography>
          <Typography sx={{fontSize:{xs:12}}}><Moment fromNow>{blog?.created_at}</Moment></Typography>
      </Box>
      <Box  sx={{display:'flex', justifyContent:'space-between'}} style={{textDecoration:'none'}}>
        <Typography>Django</Typography>
        <Link href={`/blog/${blog?.id}`} state={blog}>
            <Button size='small'>Read More</Button>
        </Link>
      </Box>
   </Box>
  )
}

export default BlogCard