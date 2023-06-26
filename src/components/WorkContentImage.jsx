'use client'

import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Manxho from '../assets/manxho.png'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { Box } from '@mui/material'

const WorkContentImage = () => {
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
    <Box sx={{width:{xs:200, md:'100%', lg:'100%'}}} ref={ref} >
    <motion.div
    animate={animation}
    >
        <Image src={Manxho} layout='responsive' alt='Manxho Project Image'/>
    </motion.div>
    </Box>
  )
}

export default WorkContentImage