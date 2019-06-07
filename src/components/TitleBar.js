import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const style = (theme) =>({
  root: {},
});

const TitleBar = (props)=>{
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar style={{ justifyContent: 'center' }}>
          <Typography variant="h6" color="inherit">
              {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    );
  }

  export default withStyles(style)(TitleBar)
