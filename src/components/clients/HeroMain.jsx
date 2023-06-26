'use Client'

import { Avatar, Box, Container, IconButton, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import SouthIcon from '@mui/icons-material/South';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from "framer-motion";
import Profile from '../../assets/profile.png'
import Image from "next/image";

const HeroMain = () => {
  return (
    <Container maxWidth='md' sx={{height:'100%'}}>
    <Box sx={{display:'flex', flexDirection:'column',  alignItems:'center',  justifyContent:'center', mt:4,  width:'100%',}}>
      {/* Main Image */}
      <motion.div 
      initial={{ x: '100vw'}}
      animate={{ x: 0 }}
      transition={{ type:'spring', duration:2, bounce:0.2 }}
      >

        {/* <Avatar  src={Profile} sx={{width:{xs:180, sm:180, md:250, lg:250}, height:'auto',boxShadow: 20,  border: "0.5px  solid gray", borderRadius:10 }} /> */}
        <Box sx={{width:{xs:180, sm:180, md:250, lg:250}, height:'auto',boxShadow: 20,  border: "0.5px  solid gray", borderRadius:10 }} >
              <Image src={Profile}layout='responsive' alt='My Image'/>
        </Box>
      </motion.div>
      < motion.div
       initial={{ x: '-100vw'}}
       animate={{ x: 0 }}
       transition={{ type:'spring', duration:1.5, bounce:0.2 }}
      >
      <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', mt:2}}>
          <Typography sx={{fontSize:{xs:20, sm:18, md:20, lg:20}}}> Salam 👋 </Typography>
          <Typography sx={{fontSize:{xs:18, sm:22, md:24, lg:24}}}>My name is Nehat</Typography>
          <Typography sx={{fontSize:{xs:16, sm:20, md:26, lg:26}, mt:1, textTransform:'uppercase'}}>Developer | Tech Savy | Father</Typography>
      </Box>
      </motion.div>

      {/* socia Links */}
      <motion.div
        initial={{ y: '100vh'}}
        animate={{ y: 0 }}
        transition={{ type:'spring', duration:3, bounce:0.2 }}
      >
          <Box sx={{display:'flex', gap:3, mt:2}}>
              <GitHubIcon onClick={()=>window.location = 'https://github.com/nehatkkhan786'}  sx={{fontSize:{xs:26, md:28},':hover':{color:'#E95420'}}}/>
              <TwitterIcon onClick={()=>window.location = 'https://twitter.com/nehatkhan82'}  sx={{fontSize:{xs:26, md:28},':hover':{color:'#E95420'}}}/>
              <InstagramIcon onClick={()=>window.location = 'https://www.instagram.com/nehat_khan/'} sx={{fontSize:{xs:26, md:28},':hover':{color:'#E95420'}}} />
              <RedditIcon onClick={()=>window.location = 'https://www.reddit.com/user/Nehatkhan786'} sx={{fontSize:{xs:26, md:28},':hover':{color:'#E95420'}}} />
          </Box>
      </motion.div>
     
        <IconButton  className='animeIcon' sx={{mt:{xs:8, md:8, lg:8}}}>
            <SouthIcon color='primary' sx={{ fontSize:{xs:40, md:50}}}/>
        </IconButton>
      
    </Box>
  </Container>
  )
}

export default HeroMain