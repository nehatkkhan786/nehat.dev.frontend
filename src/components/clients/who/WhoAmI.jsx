'use client'

import { Box, Container, Typography } from "@mui/material"
import My3dCanvas from "./3dCanvas"
import { useInView } from 'react-intersection-observer';

const WhoAmI = () => {
  const {ref, inView} = useInView();
  return (
    <Box sx={{ height: "100svh", scrollSnapAlign: "center" }} >
    <Container maxWidth="lg" sx={{ height: "100%" }}>
      <Typography sx={{fontSize:{xs:20, md:24}, paddingTop:2, textAlign:'center', textDecoration:'underline', textTransform:'uppercase'}}>Who AM I</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "space-around", md: "space-between", lg:'space-between' },
          alignItems: "center",
          height: "100%",
          gap:{xs:1},
          flexDirection: { xs: "column", md: "row" },
          overflow: "hidden"
        }}
      >
        {/* For About Me Image */}
        <Box
          sx={{
            width: { xs: "100%",  },
            height: { xs: 250, md: '100%', lg: '100%' }, 
          }}
          ref={ref}
        
        >
            <My3dCanvas/>
        </Box>
        {/* For About Me Content */}
        <Box sx={{ width: { xs: "100%" } }}>
          <Typography
            sx={{ textAlign: "justify", pb:{xs:8, md:0, lg:0}, fontSize: { xs: 16, md: 18 } }}
          >
            I am a technology enthusiast with a passion for building beautiful
            and functional websites. With a background in network engineering
            and ethical hacking, I bring a unique perspective to the world of
            web development. My expertise in HTML, CSS, Django, Python, React,
            and JavaScript allows me to create visually stunning and secure
            websites that perform seamlessly. I have a strong desire to learn
            and stay on top of the latest technologies and industry trends. My
            goal is to use my skills to help others achieve their online
            objectives and bring their vision to life.
          </Typography>
        </Box>
      </Box>
    </Container>
  </Box>
  )
}

export default WhoAmI