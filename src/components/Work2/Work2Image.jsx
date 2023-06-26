'use client'

import { Box } from '@mui/material'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Vecreation from '../../assets/vecreation.png'
import {motion} from 'framer-motion'


const Work2Image = () => {
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
  return (
    <Box sx={{width:{xs:300, md:'100%', lg:'100%'}}} ref={ref} >
       <motion.div animate={animation}>
            <Image src={Vecreation} layout='responsive' alt='Vecreation Project Image'/>
       </motion.div>
  </Box>
  )
}

export default Work2Image