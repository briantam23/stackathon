import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { element } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from './AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'tan'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

class ClippedDrawer extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(route) {
    console.log(route, map)
    const map = document.createElement('map');
    const mapParent = document.getElementById('map-parent'); 
    if(route === '/') {        
        mapParent.appendChild(map);   
    }
    else mapParent.removeChild();
  }
  render() {
    const { classes } = this.props;
    const { handleClick } = this;
    return (
        <div className={classes.root}>
        <CssBaseline />
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
            paper: classes.drawerPaper,
            }}
        >
            <div className={classes.toolbar} />
            <List>
                <ListItem button key='Home' >
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <Link to='/'>
                        <ListItemText primary='Home' onClick={ () => handleClick('/') }/>
                    </Link>
                </ListItem>
                <ListItem button key='Detailed Legend' >
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <Link to='/detailed-legend'>
                        <ListItemText primary='Detailed Legend' onClick={ () => handleClick('/detailed-legend') }/>
                    </Link>
                </ListItem>
            </List>
        </Drawer>
        </div>
    )
  }
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);