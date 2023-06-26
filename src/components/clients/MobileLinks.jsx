import { Button, Menu, MenuItem } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import Link from 'next/link';

const Mobilelinks = [
    { id:1, title:'About', path:'#about'},
    { id:2, title:'Skills', path:'#skills'},
    { id:3, title:'Projects', path:'#projects'},
    { id:4, title:'Blog', path:'/blog'},
]

const MobileLinks = ({open, setOpen, handleClose, anchorElm, setAnchorElm}) => {
  return (
    <Menu
            anchorEl={anchorElm}
            open={open}
            onClose={handleClose}
            PaperProps={{style: {backgroundColor: "#202020", color: "#A9A9A9",},}}>
  
            
            {Mobilelinks.map((link)=>{
                return (
                    <Link key={link.id} href={link.path} style={{textDecoration:'none', color:'inherit', textTransform:'uppercase'}}>      
                        <MenuItem onClick={()=>handleClose()}>
                            {link.title}
                        </MenuItem>
                    </Link>
                )
            })}
        
            <Link href="#contact" style={{textDecoration:'none', color:'inherit'}}>
            <MenuItem  onClick={()=>handleClose()}>
              <Button variant="contained" endIcon={<EmojiPeopleIcon />}>
                SAY HELLO
              </Button>
            </MenuItem>
            </Link>
          </Menu>
  )
}

export default MobileLinks