'use client'
import { Box, Button, Typography } from '@mui/material'
import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'

const Work1ContentText = () => {
  const {ref, inView} = useInView();
  const textanimation = useAnimation();


  useEffect(()=>{
      console.log('its running')
      if(inView){
        textanimation.start({
              x :0, 
              transition :{
                  type :'spring', duration:1, 
              }
          })
      }

      if(!inView) {
        textanimation.start({
             x : 200
          })
      }
          console.log('use in view', inView)

  }, [inView])
  return (
    <div
    ref={ref}
    >
        <motion.div
       
        
        >

            <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around', gap:2,  }} >
                  <Typography sx={{fontSize:{xs:26, md:34}, textAlign:'center'}}>Manxho</Typography>
                          <Typography sx={{ textAlign: "justify", fontSize: { xs: 16, md: 18 } }}>
                          Manxho is a rural startup. A small business. Born during the difficult phase of Covid 19 in 2020. bring a unique perspective to the world of
                                web development.Manxho is based in Khowang, our village-town, and the prime focus is in growing with the community in Assam.
                        </Typography>
                  <Button onClick={()=>window.location='https://shop.manxho.co.in'} variant='outlined' size='small'  >View Now</Button>
          </Box>
        </motion.div>
    </div>
  )
}

export default Work1ContentText