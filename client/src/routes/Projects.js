import React from "react"
import { Paper, Button, Grid, Hidden, TextField, Typography, Box} from "@material-ui/core"
import Project from "../components/Project.js"
import image from "../images/contemplative-reptile.jpg"
import fractal from "../images/fractal.gif"
function Projects(){
    //const projectData = [["Project 1",image], ["Project 2",image]]
    const projectData = [
        ["Project 1",image,"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"], 
        ["Project 2",fractal,"description"], 
        ["Project 3",image,"Dimensionality reduction, or dimension reduction, is the transformation of data from a high-dimensional space into a low-dimensional space so that the low-dimensional representation retains some meaningful properties of the original data, ideally close to its intrinsic dimension."],
        ["Project 4",image,"Working in high-dimensional spaces can be undesirable for many reasons; raw data are often sparse as a consequence of the curse of dimensionality, and analyzing the data is usually computationally intractable. Dimensionality reduction is common in fields that deal with large numbers of observations and/or large numbers of variables, such as signal processing, speech recognition, neuroinformatics, and bioinformatics.[1]",],
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