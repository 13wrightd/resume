import React from "react"
import { Paper, Button, Grid, Hidden, TextField, Typography, Box} from "@material-ui/core"
import Project from "../components/Project.js"
import image from "../images/contemplative-reptile.jpg"
import fractal from "../images/fractal.gif"
import flappy from "../images/flappy.gif"
import tetris from "../images/tetris.gif"
import LoLN from "../images/LoLN.gif"
import projection from "../images/projection.gif"
function Projects(){
    //const projectData = [["Project 1",image], ["Project 2",image]]
    const projectData = [
        ["Flappy Bird",flappy,"Flappy bird"], 
        ["3D Projections",projection,"description"], 
        ["Tetris",tetris,"Tetris with pygame"],
        ["Law of Large Numbers",LoLN,"The Law of Large Numbers is a statistical concept that.... This is a simulation that uses a pseudo-random number generator to demonstrate that a coin toss if repeated enough times tends to converge to 50% heads, the theoretical probability.",],
        ["Project 5",image,"Methods are commonly divided into linear and non-linear approaches.[1] Approaches can also be divided into feature selection and feature extraction.[2] Dimensionality reduction can be used for noise reduction, data visualization, cluster analysis, or as an intermediate step to facilitate other analyses."],
        ["Project 6",image,"Feature selection approaches try to find a subset of the input variables (also called features or attributes). "],
        ["Project 7",image,"The three strategies are: the filter strategy (e.g. information gain), the wrapper strategy (e.g. search guided by accuracy), and the embedded strategy (selected features add or are removed while building the model based on prediction errors)."],
        ["Project 8",image,"Data analysis such as regression or classification can be done in the reduced space more accurately than in the original space"]
    ]
    const projectComponents = projectData.map(item=>{
        return(
            <Grid item> <Box p={0.5} pb={2}><Project title={item[0]} url={item[1]} description={item[2]}/></Box></Grid>
            
        )
    })
    return (<Paper>
        <Grid container>
            <Grid item xs={1}></Grid>
            <Grid container justify="center" alignItems="center" item xs={10}>
                    {projectComponents}
                
            </Grid>
            <Grid item xs={5}></Grid>
            
        </Grid>
        </Paper>
    )
}
export default Projects