import  React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@material-ui/core';

export default function FormDialog({open,handleClose,data,onChange,handleFormSubmit}) {
  const {id,name,email,phone,age,dob}=data

  return (
    <div>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        {id?"Edit user":"Create new user"} 
        </DialogTitle>
        <DialogContent>
          <from>
            <TextField id='name' value={data.name} onChange={e=>onChange(e)} placeholder='Enter your neme' label='Name' variant='outlined' margin='dense' fullWidth />

            <TextField id='email'value={email} onChange={e=>onChange(e)} placeholder='Enter your email' label='Email' variant='outlined' margin='dense' fullWidth />

            <TextField id='phone'value={phone}  onChange={e=>onChange(e)} placeholder='Enter your phone number' label='Phone' variant='outlined' margin='dense' fullWidth />

            <TextField id='age' value={age} onChange={e=>onChange(e)} placeholder='Enter your age' label='Age' variant='outlined' margin='dense' fullWidth />

            <TextField id='dob'value={dob}  onChange={e=>onChange(e)} placeholder='Enter Date of brith' label='Date of birth' variant='outlined' margin='dense' fullWidth />
          </from>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">cancle</Button>
          <Button color='primary'onClick={()=>handleFormSubmit()} variant='outlined'>
          {id?"Edit":"Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}