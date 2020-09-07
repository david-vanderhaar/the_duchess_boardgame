import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Game from './Game';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
}));

function Play() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <h1>Title</h1>
      <Game />
    </div>
  );
}

export default Play;
