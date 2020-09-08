import React from 'react'; 
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MOVE_TYPES from '../constants/moveTypes';

const useStyles = makeStyles((theme) => ({
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
}));

function GridSquare({ onClick, type }) {
  const classes = useStyles();
  const theme = useTheme();

  const moveData = MOVE_TYPES.filter((move) => move.type === type);
  let renderIcon = () => null;
  if (moveData.length) renderIcon = () => moveData[0].getIcon(theme);
  return (
    <div onClick={onClick} className={classes.gridSquare}>
      {renderIcon()}
    </div>
  );
}

export default GridSquare;