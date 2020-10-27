import { getDefaultNormalizer } from "@testing-library/react"
import React, { useState } from "react"
import Header from "./components/Header.js"
import { Box, Button, Switch, Paper, Typography } from "@material-ui/core/"
import NavBar from "./components/NavBar.js"
import Login from "./components/Login.js"
import FormComponent from "./components/FormComponent.js"
import { ThemeProvider, useTheme, createMuiTheme } from '@material-ui/core/styles';
import { light } from "@material-ui/core/styles/createPalette"


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
      showLoginPage:false
    }
  }
  setDarkMode(){
    this.setState({darkMode:!this.state.darkMode})
  }
  setShowLoginPage(){
    this.setState({showLoginPage:!this.state.showLoginPage})
  }
  render(){
    const theme = createMuiTheme({
        palette: {
          type: this.state.darkMode ? "dark" : "light",
        },
      })
    return (
        
        <ThemeProvider theme={theme}>
        <NavBar showLoginPage={this.state.showLoginPage} setShowLoginPage={this.setShowLoginPage}/>
        <Paper elevation={24} >
        {this.state.showLoginPage ? <Paper>login <Login /></Paper>: null}
        <Switch checked={this.state.darkMode} onChange={()=> this.setDarkMode()} />
        <Typography variant="h1">hey 1</Typography>
        <Button  onClick={()=>this.setShowLoginPage()} color="primary" variant="contained"> s</Button>
        <p>hey 2</p>
        <p>hey 3</p>
        <p>hey 4</p>
        <p>hey 5</p>
        
      
        </Paper>
        
        

        </ThemeProvider>
        
      
      
    )
  }
}

export default App
