'use client'
import { Box, Button, Container, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import Markdown from 'markdown-to-jsx';
import CodeMark from './CodeMark'
import ParaMark from './ParaMark'
import Moment from 'react-moment';
import 'moment-timezone';

const BlogContent = ({data}) => {
  const router = useRouter()
  return (
    <Container maxWidth='md' sx={{display:'flex', flexDirection:'column', alignItems:'center',mt:4, pb:4}}>

        <Button sx={{alignSelf:'flex-start'}} onClick={()=>router.back()}>Back</Button>
      
        <Box sx={{display:'flex', gap:1}}>
            <Typography sx={{fontWeight:'light'}}><Moment fromNow>{data?.created_at}</Moment></Typography>
            <Typography sx={{fontWeight:'bold'}}>Django</Typography>
        </Box>
        <Typography sx={{fontSize:{xs:18, md:24, textAlign:'center'}, mt:1, fontWeight:'bold'}}>{data?.title}</Typography>
        <Container sx={{mt:4}}>
          <Markdown 
          options={{
            overrides:{
              code:{
                component:CodeMark
              }, 
              p :{
                component:'p', 
                props:{
                  style:{marginBottom:18}
                }
              },
              h3 :{
                component :'h3', 
                props:{
                  style:{marginBottom:4}
                }
              }, 
              ol:{
                component : 'ol', 
                props:{
                  style:{marginLeft:40}
                }
              } 

              
              
            }
          }}
          >{data?.body}
          </Markdown>
        </Container>
    </Container>
  )
}

export default BlogContent