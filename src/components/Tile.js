import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Grid from './Grid';
import GridSquare from './GridSquare';
import TileRanker from '../util/tileRanker';

const Tile = React.forwardRef(({ onFlip, tileData, currentSide, renderGrid}, ref) => {
  const classes = useStyles();
  const score = TileRanker.getScore([tileData.sides[currentSide]])
  const total = TileRanker.getScore(tileData.sides)
  const side = currentSide ? 'back' : 'front'

  return (
    <div ref={ref} className={classes.tileContainer}>
      <div className={classes.tileLeft}>
        <div className={classes.tileGrid}>
          {renderGrid()}
        </div>
        <div className={classes.tileName}>
          <Typography className={classes.title}>
            {tileData.name} ({side})
          </Typography>
          <div>score: {score} of {total}</div>
        </div>
      </div>
      <div className={classes.tileRight}>
        <div className={classes.tileIcon}>
          {tileData.icon()}
        </div>
      </div>
    </div>
  );
})

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
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    height: 300,
    margin: 10,
    width: 300,
  },
  tileLeft: {
    display: 'flex',
    flex: 3,
    flexDirection: 'column',
  },
  tileRight: {
    display: 'flex',
    flex: 1,
  },
  tileGrid: {
    display: 'flex',
    flex: 3,
    flexDirection: 'column',
  },
  gridRow: {
    display: 'flex',
    flex: 1,
  },
  gridSquare: {
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
    borderWidth: 1,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default Tile;