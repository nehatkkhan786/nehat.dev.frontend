'use client'
import { Box, Container, Divider, Input, Tab, Tabs } from '@mui/material'
import React from 'react'

const BlogHeader = () => {
  return (
    
        <Container  sx={{display:'flex', justifyContent:'center', width:'100%', mt:4, pb:{xs:1, md:3}}}>
        
          {/* Blog Search */}

          <Box sx={{width:{xs:'100%', sm:'100%', md:400}, display:'flex', justifyContent:{xs:'center',}}}>
            <input placeholder='Search Blog' style={{width:'100%', outline:'none', padding:10, borderRadius:10, borderColor:'inherit', backgroundColor:'inherit', color:'inherit'}}/>
        </Box>      
        </Container>
        
    
  )
}

export default BlogHeader