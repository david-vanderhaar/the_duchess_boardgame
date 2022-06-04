import React from 'react'; 
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MOVE_TYPES from '../constants/moveTypes';

const useStyles = makeStyles((theme) => ({
  gridSquare: {
    border: 'solid',
    borderWidth: 1,
    bordercolor: theme.palette.primary.main,
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

function GridSquare({ onClick, type, gridSquareClass = false }) {
  const classes = useStyles();
  const theme = useTheme();
  if (!gridSquareClass) gridSquareClass = classes.gridSquare
  const moveData = MOVE_TYPES.filter((move) => move.type === type);
  let renderIcon = () => null;
  if (moveData.length) renderIcon = () => moveData[0].getIcon(theme);

  return (
    <div onClick={onClick} className={gridSquareClass}>
      {renderIcon()}
    </div>
  );
}

export default GridSquare;