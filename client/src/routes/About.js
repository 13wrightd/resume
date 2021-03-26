import React from "react"
import { Paper, Link, Button, Grid, Hidden, TextField, Typography, Box } from "@material-ui/core"

function About() {
    return (
        <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                <Paper>
                    <Typography variant="h2">About this Site</Typography>
                        This site is hosted on a kubernetes cluster, using a custom nodejs docker build.
                        the webapp uses the MERN stack: mongo, express, react, and node. It also uses material-ui as a css/react library.
                        <Link href="http://danielwright.tk/pods.php" > Click here to view status of the Kubernetes pods.
                    </Link>
                    <Typography variant="h2">About me</Typography>
                        I've built a variety of other applications ranging from hardware to software, and other webapps utilizing Node, Apache, Kubernetes, Docker, Express, MongoDB, DynamoDB, SQL, Angular, React, and web sockets.
                            
                </Paper>
            </Grid>
            <Grid item xs={2}></Grid>

        </Grid>
    )
}
export default About