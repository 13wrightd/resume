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
import FormComponent from "./FormComponent.js"
import { BrowserRouter as Router, Switch as RouterSwitch, Route, Link } from "react-router-dom";

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
    // props.showNavBar(false)
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
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
            <MenuItem onClick={handleClose}><a target="_self" style={{ 'textDecoration': 'none', 'color': 'black' }} href="http://danielwright.tk/resume.pdf">Resume</a></MenuItem>
            <MenuItem component={Link} to="/projects" onClick={handleClose}>Projects</MenuItem>
            <MenuItem component={Link} to="/about" onClick={handleClose}>About</MenuItem>
            <MenuItem component={Link} to="/test" onClick={handleClose}>Test</MenuItem>
          </Menu>

          <Typography variant="h6" className={classes.title}>
            Daniel Wright {AppBar.height}
          </Typography>
          <Typography allign="right"> <ScreenSize /></Typography>
          <Button onClick={() => props.setShowLoginPage(!props.showLoginPage)} color="inherit">Login</Button>
          {/* {props.loggedIn ? <Button onClick={props.logOutFetch} color="inherit">log out</Button>:<FormComponent setLoggedIn={props.setLoggedIn}/>} */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default NavBar