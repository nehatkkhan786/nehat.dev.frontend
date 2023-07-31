'use client'


import { Box, Button, CircularProgress, Container, FormControl, Input, InputBase, InputLabel, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import axios from 'axios'
import Alert from './Alert';
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {motion} from 'framer-motion'
import { useForm } from "react-hook-form"
 

const Contact = () => {
  

  const {
    register,
    handleSubmit,
    reset,

  } = useForm()

  const [loading, setLoading] = useState(false)

  const [openAlert, setOpenAlert]= useState(false)

  const {ref, inView} = useInView();
  const animation = useAnimation();

  useEffect(()=>{
    if(inView){
        animation.start({
            x :0, 
            transition :{
                type :'spring', duration:1, bounce:0.2
            }
        })
    }

    if(!inView) {
        animation.start({
            x: '-100vw'
        })
    }
}, [inView])

  const EMAIJS_KEY ='sNS2irfWKG9TMAbhK'

  const sendMail = async(data)=>{
    setLoading(true)
    try {
      
     const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {'service_id':"service_xirh7yp","template_id":"template_axqq62o", "user_id":`${EMAIJS_KEY}`, "template_params":{
      "from_name":data.name,
      "message":data.message,
      "user_email":data.email,
      "reply_to":data.email
     }}, {
      headers:{
        'content-type':'application/json'
      }
     })
     if(response.request.status === 200){
      reset()
      setOpenAlert(true)
     }
     console.log(response.request.status)
     setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <Box sx={{height:'100svh', scrollSnapAlign:'center'}} >
      <Container maxWidth='sm' sx={{height:'100%',}} ref={ref} >   
        <Box component='form' onSubmit={handleSubmit(sendMail)} sx={{ height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:3}}>
          <Typography sx={{textAlign:'center', fontSize:24, fontWeight:'bold'}}>LETS CONNECT</Typography>
             <TextField
             label='Name'
             name='name'
             fullWidth
             variant='filled'
             required
            InputLabelProps={{sx: {color:'#A9A9A9'} }}
            inputProps={{sx:{color:'#A9A9A9'}}}
            {...register('name', {required:true, maxLength:20})}
          
             />

            <TextField
             label='Email'
             name='email'
             type='email'
             fullWidth
             variant='filled'
             required
             InputLabelProps={{sx: {color:'#A9A9A9'} }}
             inputProps={{sx:{color:'#A9A9A9'}}}
             {...register('email', {required:true},  { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
             />
             <TextField
             multiline
             fullWidth
             name='message'
             label='Message'
             variant='filled'
             required
             rows={5}
             InputLabelProps={{sx: {color:'#A9A9A9'} }}
             inputProps={{sx:{color:'#A9A9A9'}}}
             {...register('message', {required:true,})}
             />
             
             {loading ?  <CircularProgress/> : <Button fullWidth variant='outlined' type='submit'>Send</Button> }
             
             <Box sx={{display:'flex', alignItems:'center', gap:2}}>
                <EmailIcon/> 
                <Typography sx={{fontSize:{xs:16, md:18}}}><a style={{textDecoration:'none', color:'#A9A9A9'}} href='mailto:connect@nehat.dev'>connect@nehat.dev</a></Typography>
             </Box>
        </Box>
        
      </Container>
      <Alert openAlert={openAlert} setOpenAlert={setOpenAlert} message='Message Send Successfully' type='success'/>
    </Box>
  )
}

export default Contact
