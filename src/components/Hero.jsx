'use client'

import { Box } from "@mui/material"
import HeroMain from "./clients/HeroMain"
import Navbar from "./clients/Navbar"



const Hero = () => {
  return (
    <Box sx={{height:'100svh', scrollSnapAlign:'center'}}>
        <Navbar/>
        <HeroMain/>
    </Box>
  )
}

export default Hero