'use client'

import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'



const CustomThemeProvider = (prop) => {
    const theme = createTheme({
        palette: {
            primary:{
                main:'#E95420',
            },
        }, 
        
    })
  return (
    <ThemeProvider theme={theme}>
        {prop.children}
    </ThemeProvider>
  )
}

export default CustomThemeProvider