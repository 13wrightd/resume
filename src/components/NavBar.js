import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ScreenSize from "./ScreenSize.js"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));



function NavBar(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
      <div className={classes.root}>
        <AppBar  position="static">
          <Toolbar>
            <IconButton edge="start" onClick={handleClick} className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Menu 
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Resume</MenuItem>
                <MenuItem onClick={handleClose}>Projects</MenuItem>
                <MenuItem onClick={handleClose}>About</MenuItem>
            </Menu>
                    
            <Typography variant="h6" className={classes.title}>
              Daniel Wright
            </Typography>
            <Typography allign="right"> <ScreenSize/></Typography>
            <Button onClick={()=>props.setShowLoginPage(!props.showLoginPage)} color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
export default NavBar