import React from "react"

class MemeGenerator extends React.Component {
    constructor(){
        super()
        this.state = {
            meme:"this is a meme"
        }
    }

    render(){
        return(
            <h1> meme </h1>
        )
    }
    
    
}

export default MemeGenerator