import React from 'react'; 
import {SvgIcon} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MOVE_TYPES, { MOVE_TYPE_ENUM } from '../constants/moveTypes';

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

function GridSquare({ onClick, type, types, gridSquareClass = false }) {
  const classes = useStyles();
  const theme = useTheme();
  if (!gridSquareClass) gridSquareClass = classes.gridSquare
  const moveData = MOVE_TYPES.filter((move) => types.includes(move.type));
  let renderIcon = () => null;
  const fullWidthStyle = {width: '100%', height: '100%'};
  const defaultWidthStyle = {width: '75%', height: '75%'}
  // if (moveData.length) renderIcon = () => moveData[0].getIcon(theme);
  // WIP: Command Icon
  const icons = moveData.map((item) => {
    let style = (moveData.length > 1 && item.type === MOVE_TYPE_ENUM.COMMAND) ? {position: 'absolute', top: 0, left: 0} : {}
    return item.getIcon(theme, {style})
  })
  if (moveData.length) renderIcon = () => (
    <div style={{position: 'relative'}}>
      {icons.map(
        (icon, i) => <span key={i}>{icon}</span>
      )}
    </div>
  );

  return (
    <div onClick={onClick} className={gridSquareClass}>
      {renderIcon()}
    </div>
  );
}

export default GridSquare;