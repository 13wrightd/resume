import React from "react"
import Joke from "./components/Joke.js"
import jokesData from "./data/jokesData.js"
function App(){
  var jokesComponents = jokesData.map(function(joke){
    return(<Joke key = {joke.id} question={joke.question} punchLine={joke.punchLine}/>)
  })
  return (
    <div>
      {jokesComponents}
    </div>
  )
}

export default App