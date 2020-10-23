import { getDefaultNormalizer } from "@testing-library/react"
import React from "react"
import Header from "./components/Header.js"
import MemeGenerator from "./components/MemeGenerator.js"


function App(){
  return (
    <div>
      <Header />
      <MemeGenerator />
    </div>
    
  )
}

export default App
