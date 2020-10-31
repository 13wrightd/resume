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

export default function FormComponent(props) {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState('idle');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('')
  const [loggedIn, setLoggedIn] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleChange = (event) => {
    console.log(event.target.value)
    if(event.target.name=="email"){
      setEmail(event.target.value)
    }
    else if(event.target.name=="password"){
      setPassword(event.target.value)
    }
    

  }
  const handleClose = (event) => {
    console.log("event")
    //setName(event.currentTarget.name)
    console.log(event.currentTarget.name)
    if(event.currentTarget.name=="signup"){
        console.log("signup fetch")
        signUpFetch()
    }
    else if(event.currentTarget.name=="login"){
      console.log("login fetch")
      logInFetch()
    }
    else if(event.currentTarget.name=="cancel"){
      console.log("cancel fetch")
      cancelFetch()
    }
    
    setOpen(false)
    

  }
  const signUpFetch = async () => {
    setStatus('fetching');
    const response = await fetch(
      "/api/signup", 
      {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        //make sure to serialize your JSON body
        body: JSON.stringify({
          email: email,
          password: password
        })
      }
    )
    const data = await response.json();
    // setData(data.hits);
    // setStatus('fetched');
    console.log(data)
  }

const cancelFetch = async () => {
  setStatus('fetching');
  const response = await fetch(
      "/api/private", 

      {
        credentials: 'include',
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      
        //make sure to serialize your JSON body
        body: JSON.stringify({
          email: email,
          password: password
        })
      }
  );
  const data = await response.json();
  // setData(data.hits);
  // setStatus('fetched');
  
  console.log(data)
};

const logInFetch = async () => {
  setStatus('fetching');
  const response = await fetch(
      "/api/login", 

      {
        credentials: 'include',
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      
        //make sure to serialize your JSON body
        body: JSON.stringify({
          email: email,
          password: password
        })
      }
  );
  const data = await response.json();
  // setData(data.hits);
  // setStatus('fetched');
  props.setLoggedIn()
  console.log(data)
};
//   useEffect(() => {
    

//     fetchData();
// }, []);
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
            name="email"
            label="Email Address"
            type="email"
            onChange={handleChange}
            value={email}
            fullWidth
          />
          <TextField
            
            margin="dense"
            id="password"
            name="password"
            label="Password"
            type="password"
            onChange={handleChange}
            value={password}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
        {/* <div style={{flex: '1 0 0'}} > */}
            <Button name="cancel" onClick={handleClose} color="primary">
                Cancel
            </Button>
            {/* </div> */}
            <Button name="signup" onClick={handleClose} color="primary">
                Sign up
            </Button>
            <Button  name="login" variant="contained" onClick={handleClose} color="primary">
                Log in
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}