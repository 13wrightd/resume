import React from "react"

function Joke(props){
    return (
        <div>
            
            <h1 style={{display:props.question ? "block" : "None "}}>Question: {props.question}</h1>
            <br></br>
            Punchline: {props.punchLine}
            <br></br>
            <br></br>
        </div>
    )
}
export default Joke