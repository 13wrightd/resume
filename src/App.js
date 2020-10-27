import { getDefaultNormalizer } from "@testing-library/react"
import React, { useState } from "react"
import Header from "./components/Header.js"
import { Box, Button, Switch, Paper, Typography } from "@material-ui/core/"
import NavBar from "./components/NavBar.js"
import Login from "./components/Login.js"
import FormComponent from "./components/FormComponent.js"
import { ThemeProvider, useTheme, createMuiTheme } from '@material-ui/core/styles';
import { light } from "@material-ui/core/styles/createPalette"


function App(){
  const [darkMode, setDarkMode] = useState(false)
  const [showLoginPage, setShowLoginPage] = useState(true)
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  })
  return (
    
      <ThemeProvider theme={theme}>
      <NavBar showLoginPage={showLoginPage} setShowLoginPage={setShowLoginPage}/>
      <Paper elevation={24} >
      {showLoginPage ? <Paper><Login /></Paper>: null}
      <Switch checked={darkMode} onChange={()=> setDarkMode(!darkMode)} />
      <Typography variant="h1">hey 1</Typography>
      <Button  onClick={()=>setShowLoginPage(!showLoginPage)} color="primary" variant="contained"> s</Button>
      <p>hey 2</p>
      <p>hey 3</p>
      <p>hey 4</p>
      <p>hey 5</p>
      
     
      </Paper>
      
      

      </ThemeProvider>
      
    
    
  )
}

export default App
