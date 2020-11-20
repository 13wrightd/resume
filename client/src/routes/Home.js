import React from "react"
import { Paper, Button, Grid, Hidden, TextField, Typography, Box} from "@material-ui/core"

function Home(){
    return (
        <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                <Paper>
                    <Typography variant="h2">Home</Typography>
                    
                </Paper>
            </Grid>
            <Grid item xs={2}></Grid>
            
        </Grid>
    )
}
export default Home