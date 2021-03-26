import React from "react"
import { Paper, Button, Grid, Hidden, TextField, Typography, Box } from "@material-ui/core"
import Project from "../components/Project.js"
import image from "../images/contemplative-reptile.jpg"
import fractal from "../images/fractal.gif"
import flappy from "../images/flappy.gif"
import tetris from "../images/tetris.gif"
import LoLN from "../images/LoLN.gif"
import projection from "../images/projection.gif"
import textify from "../images/textify.gif"
function Projects() {
    //const projectData = [["Project 1",image], ["Project 2",image]]
    const projectData = [
        ["Flappy Bird", flappy, "Flappy Bird, a recreation of popular iPhone app."],
        ["3D Projections", projection, "A 3D rendering program that uses projections and a virtual camera to draw 3-dimensional objects."],
        ["Tetris", tetris, "A remake of the game Tetris with "],
        ["Law of Large Numbers", LoLN, "The Law of Large Numbers is the statistical concept that as more trials take place, the experimental results should get closer to the theoretical probabilities. This is a simulation that uses a pseudo-random number generator to demonstrate that a coin toss if repeated enough times tends to converge to 50% heads, the theoretical probability.",],
        ["Textify", textify, "Textify is a web app designed to help users create playlists, share them, chat with others, and even listen to the playlists together in a synchronized way across as many users needed. Node, Express, Angular, MongoDB, and Socket.IO was used to create this application along with the Youtube API for retrieving videos."]
    ]
    const projectComponents = projectData.map(item => {
        return (
            <Grid item> <Box p={0.5} pb={2}><Project title={item[0]} url={item[1]} description={item[2]} /></Box></Grid>

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