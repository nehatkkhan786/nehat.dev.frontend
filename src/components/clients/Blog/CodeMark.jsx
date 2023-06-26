'use client'
import React, { useEffect } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { IconButton, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { useState } from 'react';

const CodeMark = ({children}) => {
    const [copied, setCopied] = useState(false)

    useEffect(()=>{
        const timr = setTimeout(()=>{
            setCopied(false)
        }, 500);
        return () => clearTimeout(timr)
    },[copied])

  return (
    <div className='code'>
        <CopyToClipboard text={children} onCopy={()=>setCopied(true)}>
            <IconButton className='copy-icon'>
                {copied ? <FileCopyIcon sx={{color:'#A9A9A9'}}/> : <ContentCopyIcon sx={{color:'#A9A9A9'}}/>}
            </IconButton>
        </CopyToClipboard>
        <SyntaxHighlighter style={materialDark} language="javascript">
            {children}
        </SyntaxHighlighter>
    </div>
  )
}

export default CodeMark