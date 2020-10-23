import React from "react"

class Product extends React.Component{
    constructor(){
        super()
        this.state = {
            name:"Daniel Wright"
        }
    }
    render(){
        return (
            <div>
                <h1>{this.state.name}</h1>
                <br></br>
                <h2>price: ${this.props.price}</h2>
               
                <h3>desciption: {this.props.description}</h3>
                <br></br>

            </div>
        )
    }
}

export default Product