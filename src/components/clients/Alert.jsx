import { Snackbar } from '@mui/material'
import React from 'react'
import MuiAlert from '@mui/material/Alert';


const CustomAlert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
const Alert = ({openAlert, setOpenAlert, autoHideDuration, message, type}) => {
  return (
    <Snackbar 
    open={openAlert}
    autoHideDuration={5000}
    onClose={()=>setOpenAlert(false)}
    >
    <CustomAlert onClose={()=>setOpenAlert(false)} severity={type}>
        {message}
    </CustomAlert>
    </Snackbar>
  )
}

export default Alert