import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // height: 600,
    // width: 600,
    height: '100%',
    width: '100%',
  },
  tileGrid: {
    display: 'flex',
    // border: 'solid',
    borderWidth: 1,
    flex: 5,
    flexDirection: 'column',
  },
  gridRow: {
    display: 'flex',
    flex: 1,
  },
}));

function Grid({ height, width, renderGridSpace }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <div className={classes.tileGrid}>
        {
          Array(height).fill(null).map((item, y) => (
            <div key={y} className={classes.gridRow}>
              {Array(width).fill(null).map((item, x) => {
                return (
                renderGridSpace(x, y, theme)
                )
              })}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Grid;