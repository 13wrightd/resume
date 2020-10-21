import React from "react"
import productData from "./data/vschoolProducts.js"
import Product from "./components/Product.js"
function App(){
  const productComponents = productData.map(function(product){
    return (
      <Product key={product.key} name={product.name} price={product.price} description={product.description}/>
    )
  })
  
  
  return (
    <div>
      {productComponents}
    </div>
  )
}

export default App
