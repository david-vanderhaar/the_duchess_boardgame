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
    border: 'solid',
    borderRadius: 5,
    borderWidth: 1,
    flex: 5,
    flexDirection: 'column',
    padding: 5,
  },
  gridRow: {
    display: 'flex',
    flex: 1,
  },
  gridSquare: {
    border: 'solid',
    borderRadius: 5,
    borderWidth: 1,
    color: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    transition: '0.4s',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      stroke: theme.palette.common.white,
    },
  },
}));

function Grid({ height, width, renderGridSpace, gridSpaceStyles = null }) {
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
                <div 
                  className={gridSpaceStyles ? null : classes.gridSquare}
                  style={gridSpaceStyles}
                >
                  {renderGridSpace(x, y, theme)}
                </div>
                // renderGridSpace(x, y, theme)
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