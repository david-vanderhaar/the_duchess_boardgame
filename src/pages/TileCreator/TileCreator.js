import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import Links from '../../components/Links';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tileContainer: {
    border: 'solid',
    borderRadius: 10,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    height: 400,
    marginTop: 100,
    width: 400,
  },
  tileLeft: { 
    display: 'flex', 
    flex: 5,
    flexDirection: 'column',
  },
  tileRight: {
    display: 'flex', 
    flex: 1,
  },
  tileGrid: {
    border: 'solid',
    borderRadius: 5,
    borderWidth: 1,
    flex: 5,
    padding: 5,
  },
  tileName: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tileIcon: {
    border: 'solid',
    borderCollapse: 'collapse',
    borderRadius: 5,
    borderWidth: 1,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function TileCreator() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.tileContainer}>
        <div className={classes.tileLeft}>
          <div className={classes.tileGrid}>
            
          </div>
          <div className={classes.tileName}>
            <Typography className={classes.title}>
              Footman
            </Typography>
          </div>
        </div>
        <div className={classes.tileRight}>
          <div className={classes.tileIcon}>
            <BrightnessHighIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TileCreator;
