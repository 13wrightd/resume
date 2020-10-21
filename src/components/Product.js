import React from "react"

function Product(props){
    return (
        <div>
            <h1>{props.name}</h1>
            <br></br>
            <h2>price: ${props.price}</h2>
            <br></br>
            <h3>description: {props.description}</h3>
            <br></br>
            <br></br>
        </div>
    )
}

export default Product