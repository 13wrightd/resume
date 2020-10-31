import { getDefaultNormalizer } from "@testing-library/react"
import React, { useState } from "react"
import Header from "./components/Header.js"
import { Box, Button, Switch, Paper, Typography } from "@material-ui/core/"
import NavBar from "./components/NavBar.js"
import Login from "./components/Login.js"
import FormComponent from "./components/FormComponent.js"
import Test from "./components/Test.js"
import Test2 from "./components/Test2.js"
import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import { light } from "@material-ui/core/styles/createPalette"
// import createMuiTheme from '@material-ui/core/styles';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';



const cancelFetch = async () => {
  
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
        })
      }
  );
  const data = await response.json();
  // setData(data.hits);
  // setStatus('fetched');
  console.log(data)
};
class App extends React.Component{
  // const [darkMode, setDarkMode] = useState(false)
  // const [showLoginPage, setShowLoginPage] = useState(true)
  // const theme = createMuiTheme({
  //   palette: {
  //     type: darkMode ? "dark" : "light",
  //   },
  // })
  constructor(){
    super()
    this.state={
      darkMode:false,
      showLoginPage:false,
      response: '',
      post: '',
      responseToPost: '',
      loggedIn: false
    }
    this.setDarkMode = this.setDarkMode.bind(this)
    this.setShowLoginPage = this.setShowLoginPage.bind(this)
    this.logOutFetch = this.logOutFetch.bind(this)
    this.setLoggedIn = this.setLoggedIn.bind(this)
    this.checkLoggedInFetch = this.checkLoggedInFetch.bind(this)
    
  }
  checkLoggedInFetch = async () => {
    // setStatus('fetching');
    var response = await fetch(
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
          })
        }
    );
    
    const data = await response.json();
    //put checking here
    // setData(data.hits);
    // setStatus('fetched');
    console.log(data)
    if(data.message=="authentication successful"){
      this.setLoggedIn()
    }
    console.log(data)
  };
  logOutFetch = async () => {
    // setStatus('fetching');
    var response = await fetch(
        "/api/logout", 
  
        {
          credentials: 'include',
          method: "post",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        
          //make sure to serialize your JSON body
          body: JSON.stringify({
          })
        }
    );
    
    const data = await response.json();
    //put checking here
    this.setState((state)=>{
      console.log(state)
      return (
      {
        loggedIn:false
      })
    })
    // setData(data.hits);
    // setStatus('fetched');
    console.log(data)
  };
  setDarkMode(){
    this.setState((state)=>{
      console.log(state)
      return (
      {
        darkMode:!state.darkMode
      })
    }) 
  }
  setLoggedIn(){
    this.setState((state)=>{
      console.log(state)
      return (
      {
        loggedIn:true
      })
    })
  }
  setShowLoginPage(){
    this.setState((state)=> {return ({showLoginPage:!state.showLoginPage})})
  }
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err,"error error!"));
      this.checkLoggedInFetch()
  }
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  }
  render(){
    console.log(this.state.response)
    const theme = createMuiTheme({
        palette: {
          type: this.state.darkMode ? "dark" : "light",
        },
      })
    return (
        
        <ThemeProvider theme={theme}>
        <NavBar setLoggedIn={this.setLoggedIn} loggedIn={this.state.loggedIn} logOutFetch={this.logOutFetch} showLoginPage={this.state.showLoginPage} setShowLoginPage={this.setShowLoginPage}/>
        <Paper elevation={24} >
        {this.state.showLoginPage ? <Paper>login <Login /></Paper>: null}
        <Switch checked={this.state.darkMode} onChange={this.setDarkMode} />
        <Typography variant="h1">hey 1</Typography>
        <Button  onClick={this.setShowLoginPage} color="primary" variant="contained"> s</Button>
        <Button  onClick={cancelFetch} color="primary" variant="contained"> Protected </Button>
        
        <p>hey 2</p>
        <p>hey 3</p>
        <p>hey 4</p>
        <p>hey 5</p>
        <Test/>
        <Test2/>    
        </Paper>
        </ThemeProvider>
    )
  }
}

export default App
