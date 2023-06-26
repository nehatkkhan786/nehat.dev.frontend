'use client'

    import {
        Box,
        Button,
        Container,
        IconButton,
        Menu,
        MenuItem,
        Typography,
    } from "@mui/material";
    import React, { useRef, useState } from "react";
    import Logo1 from "../../assets/white_transparent.webp";
    import MenuOpenIcon from "@mui/icons-material/MenuOpen";
    import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
    import CloseIcon from "@mui/icons-material/Close";
    import Image from "next/image";
    import NavLinks from "./NavLinks";
    import MobileLinks from "./MobileLinks";
import { useRouter } from "next/navigation";
import Link from "next/link";
 

  
  
  const Navbar = () => {
    const [anchorElm, setAnchorElm] = useState(null);
    const [open, setOpen] = useState(false);
    const router = useRouter()
  
    const handleClose = () => {
      setAnchorElm(null);
      setOpen(false);
    };
  
    const handleClick = (e) => {
      setAnchorElm(e.currentTarget);
      setOpen(true);
    };
    const scrollToAbout = ()=>{
  
    }
  
    return (
      <Container maxWidth="xl">
        <Box sx={{display: "flex",justifyContent: "space-between",paddingTop: 2,alignItems: "center",}}>
          {/* Logo */}
           <Box onClick={()=>router.back()} sx={{width: { xs: 150, sm: 150, md: 200, lg: 200 }, height: { xs: 60, sm: 60, md: 80, lg: 80 },cursor: "pointer",}}>
                    <Image  src={Logo1} layout='responsive' alt="Logo" priority={true}/>
            </Box>

  
          {/* Links */}
          <Box sx={{display: { xs: "none", sm: "none", md: "flex", lg: "flex" }, gap: 3,alignItems: "center",}}>
            <NavLinks/>
             <Button size="medium"variant="contained"endIcon={<EmojiPeopleIcon />}sx={{ml: 4,display: { xs: "none", sm: "none", md: "flex", lg: "flex" },}}>
              <Link
              href='#contact'
              style={{color:'inherit', textDecoration:'none'}}
              scroll={false}
              >
                Say Hello
              </Link>
                
              </Button>
          </Box>

  
          {/* Hamburger Menu For Mobile Screen */}
          <IconButton id="basic-menu"onClick={handleClick}sx={{ display: { xs: "flex", sm: "flex", md: "none", lg: "none" } }}>
            {open ? (<CloseIcon sx={{ color: "#A9A9A9", fontSize: 34 }} />) : (<MenuOpenIcon sx={{ color: "#A9A9A9", fontSize: 34 }} />)}
          </IconButton>

            {/* Mobile Links */}
          <MobileLinks  open={open} setOpen={setOpen} handleClose={handleClose} anchorElm={anchorElm} setAnchorElm={setAnchorElm}/>
        </Box>
      </Container>
    );
  };
  
  export default Navbar;
  