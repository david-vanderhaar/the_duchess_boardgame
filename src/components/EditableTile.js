import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BasicGrid from './Grid';
import GridSquare from './GridSquare';
import Tile from './Tile';

const useStyles = makeStyles((theme) => ({
  gridSquare: {
    border: 'solid',
    borderWidth: 1,
    bordercolor: theme.palette.primary.main,
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

const EditableTile = ({onFlip, tile, currentSide, onEditGridSquare}) => {
  const classes = useStyles();
  const activeMoves = tile.sides[currentSide].moves;

  return (
    <Tile
      onFlip={onFlip}
      tileData={tile}
      currentSide={currentSide}
      renderGrid={() => {
        return (
          <BasicGrid
            height={tile.height}
            width={tile.width}
            renderGridSpace={(x, y, theme) => {
              const movesAtXY = activeMoves.filter((move) => move.x === x && move.y === y);
              const type = movesAtXY.length ? movesAtXY[0].type : null
              const handleClick = () => onEditGridSquare(x, y);
              return <GridSquare key={`${x}${y}`} onClick={handleClick} type={type} gridSquareClass={classes.gridSquare}/>
            }}
          />
        )
      }}
    />
  )
  }

export default EditableTile;