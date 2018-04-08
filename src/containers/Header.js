import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton/IconButton';
import Button from 'material-ui/Button/Button';
import withStyles from 'material-ui/styles/withStyles';
import MenuIcon from '@material-ui/icons/Menu';
import Icon from 'material-ui/Icon/Icon';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    
  },
  rightIcon: {
    fontSize: "1em",
    marginRight: "6px",
    marginTop: "-3px"
  }
};

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Amateur
            </Typography>
            <div>
              <Button color="inherit" className={classes.menuButton}>Login</Button>
              <Button color="inherit" className={classes.menuButton}>Home</Button>
              <Button color="inherit" className={classes.menuButton}>
                <Icon className={classes.rightIcon + " fa fa-edit fa-xs"} /> New Post
              </Button>
              <Button color="inherit" className={classes.menuButton}>Settings</Button>              
              <Button color="inherit" className={classes.menuButton}>{this.props.username}</Button>              
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}



export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));