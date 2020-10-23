import { getDefaultNormalizer } from "@testing-library/react"
import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName:"",
            lastName:"",
            age:"0",
            gender:"female",
            diet:{
              "eggs":false,
              "milk":false,
              "peanut butter": false
            }
        }
       this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        console.log("handleChange", event.target.value)
        this.setState(prev=> {
          if(event.target.name === "gender"){
            if(event.target.value === "male"){
              return ({
                ...prev,
                [event.target.name]:"male"
              })
            }
            else{
              return ({
                ...prev,
                [event.target.name]:"female"
              })
            }
          }
          else if(event.target.name === "diet"){
            return ({
              ...prev,
              "diet":{
                ...prev.diet,
                [event.target.value]:!prev.diet[event.target.value]
              }
            })
          }
          else{
            return ({
              ...prev,
              [event.target.name]:event.target.value
            }
          )}
        })
    }
    render() {
        let first=true
        const dietComponents = Object.keys(this.state.diet).map((key,object)=>{
          console.log(object,key)
          
          if(this.state.diet[key]){
            if(first){
              first=false
              return(
                key
              )
            }
            else{
              return(
                ", " + key
              )
            }
          }
        })
        return (
            <main>
                <form>
                    <input onChange={this.handleChange} name="firstName" value={this.state.firstName} placeholder="First Names" /><br />
                    <input onChange={this.handleChange} name="lastName" value={this.state.lastName} placeholder="Last Name" /><br />
                    <input onChange={this.handleChange} name="age" value={this.state.age} placeholder="Age" /><br />
                    
                    <input onChange={this.handleChange} type="radio" name="gender" checked={this.state.gender === "male"} value="male"/> male
                    <input onChange={this.handleChange} type="radio" name="gender" checked={this.state.gender === "female"} value="female"/> female
                    <br />
                    
                    {/* Create select box for location here */}
                    dietary restrictions:
                    <br />
                    
                    <input onChange={this.handleChange} name="diet" value="eggs" type="checkbox" checked={this.state.diet["eggs"]} /> eggs
                    <input onChange={this.handleChange} name="diet" value="milk" type="checkbox" checked={this.state.diet["milk"]} /> milk
                    <input onChange={this.handleChange} name="diet" value="peanut butter" type="checkbox" checked={this.state.diet["peanut butter"]} /> peanut butter
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName + " " + this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {/* Destination here */}</p>
                <p>
                    Your dietary restrictions: 
                    {dietComponents}
                </p>
            </main>
        )
    }
}

export default App
