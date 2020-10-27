import React from "react"

class MemeGenerator extends React.Component {
    constructor(){
        super()
        this.state = {
            topText:"",
            bottomText:"",
            randomImage:"http://i.imgflip.com/1bij.jpg",
            allMemeImages:[]
        }
        this.handleChange =this.handleChange.bind(this)
        this.randomizeImage = this.randomizeImage.bind(this)
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({allMemeImages:memes})
    
            })
        console.log(Math.random())
    }
    handleChange(event){
        
        this.setState({[event.target.name]:event.target.value})
    }
    randomizeImage(event){
        event.preventDefault()
        let image = this.state.allMemeImages[Object.keys(this.state.allMemeImages)[Math.floor(Math.random()*Object.keys(this.state.allMemeImages).length)]]
        console.log(image)
        this.setState({randomImage:image.url})
    }
    render(){
        return(
            <div>
                <form onSubmit={this.randomizeImage} className="meme-form">
                    <input onChange={this.handleChange} type="text" placeholder="top text" name="topText" value={this.state.topText}/>
                    <input onChange={this.handleChange} type="text" placeholder="bottom text" name="bottomText" value={this.state.bottomText}/>
                    {
                        /**
                         * Create 2 input fields, one for the topText and one for the bottomText
                         * Remember that these will be "controlled forms", so make sure to add
                         * all the attributes you'll need for that to work
                         */
                    }    
                
                    <button >Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
    
    
}

export default MemeGenerator