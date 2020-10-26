import React from "react"
import { Grid, Hidden, Typography, Box} from "@material-ui/core"

function Login(){
    return (
        <Grid container>
            <Hidden xsDown>
                <Grid item sm={1} md={2} >
                    left left left left left left left left left left left left left left 
                </Grid>
            </Hidden>
            <Grid item xs={12} sm={10} md={8}> <Typography color="secondary" >center center center center center center center center center center center center center center center center center center center center center centercenter center center center center center center center center center center</Typography></Grid>
            <Hidden xsDown><Grid  item sm={1} md={2}>right right right right right right right right right right right </Grid></Hidden>
        </Grid>
    )
}
export default Login