import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// function callApi(){
//   async () => {
//   const response = await fetch('/api/hello');
//   const body = await response.json();
//   if (response.status !== 200) throw Error(body.message);
  
//   return body;
// }}


export default function FormComponent() {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState('idle');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false)

  };
  useEffect(() => {
    const fetchData = async () => {
        setStatus('fetching');
        const response = await fetch(
            "/api/hello", 

            {
              method: "post",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            
              //make sure to serialize your JSON body
              body: JSON.stringify({
                name: "name",
                password: "myPassword"
              })
            }
        );
        const data = await response.json();
        // setData(data.hits);
        // setStatus('fetched');
        console.log(data)
    };

    fetchData();
}, [open]);
  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>
        Log In
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Log In</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your email and password.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email address"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
        {/* <div style={{flex: '1 0 0'}} > */}
            <Button  onClick={handleClose} color="primary">
                Cancel
            </Button>
            {/* </div> */}
            <Button onClick={handleClose} color="primary">
                Sign up
            </Button>
            <Button variant="contained" onClick={handleClose} color="primary">
                Log in
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}