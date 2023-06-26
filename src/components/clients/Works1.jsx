'use client'

import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Manxho from '../../assets/manxho.png'
import {motion, useAnimation} from 'framer-motion'
import WorkContentImage from '../WorkContentImage'
import { useInView } from 'react-intersection-observer'
import Work1ContentText from '../Work1/Work1ContentText'

const Works1 = () => {
  
  
  return (
    <Box sx={{height:'100svh', scrollSnapAlign:'center'}}>
      <Container maxWidth='lg' sx={{height:'100%'}}>
          <Typography sx={{textAlign:'center', fontSize:{xs:20, md:24}, paddingTop:2, textTransform:'uppercase', textDecoration:'underline', pt:2}}>Some of My Projects</Typography>
         <Box
          sx={{
            display: "flex",
            justifyContent: {xs: 'center', md: "space-around", lg:'space-around'  },
            height: "100%",
            gap: {xs:5},
            flexDirection: { xs: "column", md: "row" },
            alignItems: 'center',
          }}
        >

                 {/* Projects Image */}
                <WorkContentImage />
                {/* Project Content */}
                <Work1ContentText/>        
              
          </Box>
      </Container>
    </Box>
  )
}

export default Works1