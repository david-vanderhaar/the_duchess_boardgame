import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Grid from './Grid';
import GridSquare from './GridSquare';

const useStyles = makeStyles((theme) => ({
  tileColumn: {
    display: 'flex',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  tileContainer: {
    border: 'solid',
    borderRadius: 10,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    height: 400,
    margin: 25,
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
    display: 'flex',
    borderRadius: 5,
    flex: 5,
    flexDirection: 'column',
    padding: 5,
  },
  gridRow: {
    display: 'flex',
    flex: 1,
  },
  gridSquare: {
    borderRadius: 5,
    color: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    transition: '0.4s',
    height: '100%',
    width: '100%',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      stroke: theme.palette.common.white,
    },
  },
  tileName: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
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
  tileSideIndicator: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 5,
    color: theme.palette.common.white,
    padding: 10,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Tile = ({ onFlip, tileData, currentSide, renderGrid}) => {
  const classes = useStyles();

  return (
    <div className={classes.tileContainer}>
      <div className={classes.tileLeft}>
        <div className={classes.tileGrid}>
          {renderGrid()}
        </div>
        <div className={classes.tileName}>
          <Typography className={classes.title}>
            {tileData.name}
          </Typography>
          <div className={classes.tileSideIndicator}>
            <Typography style={{marginRight: 10}}>Side {currentSide + 1}</Typography>
            <Button
              variant="contained"
              color='secondary'
              onClick={onFlip}
            >
              Flip
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.tileRight}>
        <div className={classes.tileIcon}>
          {tileData.icon()}
        </div>
      </div>
    </div>
  );
}

export default Tile;