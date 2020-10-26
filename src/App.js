import { getDefaultNormalizer } from "@testing-library/react"
import React, { useState } from "react"
import Header from "./components/Header.js"
import { Button, Switch, Paper, Typography } from "@material-ui/core/"
import NavBar from "./components/NavBar.js"
import Login from "./components/Login.js"
import { ThemeProvider, useTheme, createMuiTheme } from '@material-ui/core/styles';
import { light } from "@material-ui/core/styles/createPalette"


function App(){
  const [darkMode, setDarkMode] = useState(false)
  const [showLoginPage, setShowLoginPage] = useState(false)
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  })
  return (
    
      <ThemeProvider theme={theme}>
      <NavBar showLoginPage={showLoginPage} setShowLoginPage={setShowLoginPage}/>
      <Paper elevation={24} >
      <Switch checked={darkMode} onChange={()=> setDarkMode(!darkMode)} />
      <Typography variant="h1">hey 1</Typography>
      <Button  color="primary" variant="contained"> s</Button>
      <p>hey 2</p>
      <p>hey 3</p>
      <p>hey 4</p>
      <p>hey 5</p>
      <p>hey 6</p>
      <p>hey 7</p>
      <p>hey 8</p>
      <p>hey 9</p>
      <p>hey 10</p>
      </Paper>
      {showLoginPage ? <Login />: null}
      

      </ThemeProvider>
      
    
    
  )
}

export default App
