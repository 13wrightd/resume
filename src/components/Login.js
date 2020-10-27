import React from "react"
import { Paper, Button, Grid, Hidden, TextField, Typography, Box} from "@material-ui/core"

function Login(){
    return (
        <Grid container >
            <Hidden xsDown>
                <Grid item sm={1} md={2} >
                    left left left left left left left left left left left left left left 
                </Grid>
            </Hidden>
            <Grid item xs={12} sm={10} md={8} >
                <Box p={3}>
                <form noValidate autoComplete="off">
                    <Grid direction="row" spacing={2} container>
                        <Grid xs={6} item>
                            <TextField fullWidth id="standard-basic" label="Email" required/>
                        </Grid>
                        <Grid xs={4} item>
                            <TextField type="password" fullWidth id="standard-basic" label="Password" required/>
                        </Grid>
                        <Grid xs={2} item>
                            <Button fullWidth variant="contained"> Submit </Button>
                        </Grid>
                    </Grid>
                </form>
                </Box>
            </Grid>
            
            <Hidden xsDown><Grid  item sm={1} md={2}>rigsht right right right right right right right right right right </Grid></Hidden>
        </Grid>
    )
}
export default Login