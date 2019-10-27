import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

// Visual Items
import { AppBar, Typography, IconButton, Drawer, Toolbar, ListItemText, ListItemIcon, ListItem, List } from '@material-ui/core';
import { AccountCircle, Menu } from '@material-ui/icons';

import ConnectUnity from './connectUnity';



//////////////////////////////////////////////////// Class //////////////////////////////////////////////////
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  apptitle: {
    flexGrow: 1,
    textAlign: 'center'
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
  appbar: {
    background: 'linear-gradient(to right, #0086C9, #4BC9EC);'
  },
});


class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      is_open: false,
      currentPage: "EirbMon",
    };
  }

  navigateTo(path, currentPage) {
    this.props.history.push(path);
    this.setState({ currentPage: currentPage });
  }

  render() {
    const classes = this.props.classes;
    return (
      <div className="App">
        <Drawer open={this.state.is_open} onClose={() => this.setState({ is_open: false })}>
          <div tabIndex={0} role="button" onClick={() => this.setState({ is_open: false })} >
            <List component="nav" >
              <ListItem button onClick={() => { this.navigateTo('/connectUnity', "Jeux") }}>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText primary={'Jeux'} secondary={"Test Connexion Unity"} />
              </ListItem>
            </List>
          </div>
        </Drawer>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar className={classes.root} variant="dense">
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={() => this.setState({ is_open: true })}>
              <Menu />
            </IconButton>
            {this.state.currentPage}
            <Typography variant="h6" color="inherit" className={classes.apptitle}>
              Eirbmon
            </Typography>
          </Toolbar>
        </AppBar>

      </div>)
  }
}

function mapStateToProps(state) {
  return {};
}

export default withRouter(connect(mapStateToProps)(withStyles(styles)(AppComponent)));