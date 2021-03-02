import React from "react"
import { Paper, Button, Grid, Hidden, TextField, Typography, Box } from "@material-ui/core"
import { withStyles } from '@material-ui/styles';
import pdfFile from "../WrightDanielResume.pdf"
const styles = (theme) => ({
    toolbar: theme.mixins.Toolbar,

});

function Resume(props) {
    const { classes } = props;
    console.log(classes.toolbar)
    // props.showNavBar(false)
    return (
        <div style={{ height: '100vh' }}>
            <embed src={pdfFile} type="application/pdf" width="100%" height="100%" />
            {/* <Grid container style={{height:"100%"}}>
            
            <Grid item xs={2}></Grid>
            <Grid item xs={8} style={{height:"100%"}}>
            <embed src={pdfFile} type="application/pdf" width="100%" height="100vh" />
                <Paper>
                    <Typography variant="h2"> Resume </Typography>
                    my resume
                    
                </Paper>
            </Grid>
            <Grid item xs={2}></Grid>
            
        </Grid> */}
        </div>
    )
}
export default withStyles(styles)(Resume);
// export default Resume
