import React from "react"
import Joke from "./components/Joke.js"
function App(){
  return (
    <div>
      <Joke question="Whats 9 + 10?" punchline="21."/>
      <Joke question="Why do we tell actors to break a leg?" punchline="Because every play has a cast."/>
      <Joke punchline="It's hard to explain puns to kleptopmaniacs because they always take things literally."/>
    </div>
  )
}

export default App