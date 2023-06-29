
'use client'

import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Python from '../../assets/skills-icons/python.png'
import Javascript from'../../assets/skills-icons/js.png'
import HTML5 from '../../assets/skills-icons/html5.png'
import CSS from '../../assets/skills-icons/css.png'
import Linux from '../../assets/skills-icons/linux.png'
import ReactIcon from '../../assets/skills-icons/react.png'
import Django from '../../assets/skills-icons/django.png'
import Wordpress from '../../assets/skills-icons/wordpress.png'
import Image from "next/image";


const skill = [
  {id:1, name:'Html', icon:HTML5},
  {id:2, name:'css', icon:CSS},
  {id:4, name:'Python', icon:Python},
  {id:8, name:'Django', icon:Django },
  {id:3, name:'Javasccript', icon:Javascript},
  {id:5, name:'React', icon:ReactIcon},
  {id:7, name:'Wordpress', icon:Wordpress },
  {id:6, name:'Linux', icon:Linux },
]


const Skills = () => {
  return (
    <Box  sx={{ height: "100svh", scrollSnapAlign: "center" }} >
      <Container  sx={{ height: "100%", width: "100%" }}>
      <Typography sx={{fontSize:{xs:20, md:24}, paddingTop:2, textAlign:'center', textDecoration:'underline', textTransform:'uppercase'}}>Skills</Typography>
      <Box sx={{ height:'100%', width:'100%', display:'flex',  justifyContent:'center', alignItems:'center',}}>
        <Grid container spacing={3} sx={{placeContent:'center'}} >
          {skill?.map((item)=>{
            return (
              <Grid item key={item.id} >
                <Box sx={{padding:2, border:'2px solid transparent', borderImage:'linear-gradient(to bottom right, #E95420, transparent 50%) 1',}}>
                  <Box sx={{width:{xs:50, md:100, lg:120}, height:{xs:50, md:100, lg:120}}}> 
                    <Image src={item.icon} style={{objectFit:'cover', width:'100%', height:'100%'}} alt='item.name'/>
                  </Box>
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Box>
      </Container>
    </Box>
  );
};

export default Skills;
