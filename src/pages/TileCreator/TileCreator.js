import React, {useState, useRef} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import { Button } from '@material-ui/core';
import {cloneDeep, get} from 'lodash';
import BasicGrid from '../../components/Grid';
import GridSquare from '../../components/GridSquare';
import Tile from '../../components/Tile';
import NonEditableTile from '../../components/NonEditableTile';
import EditableTile from '../../components/EditableTile';
import MovePalette from './MovePalette';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  paletteColumn: {
    flex: 1,
  },
  tileColumn: {
    display: 'flex',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  editableTileContainer: {
    display: 'flex',
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
  tileSideLabel: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 5,
    color: theme.palette.common.white,
    padding: 10,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));


function TileCreator() {
  const classes = useStyles();
  const [moveType, setMoveType] = useState('m');
  const [side, setSide] = useState(0);
  const flipTile = () => {
    setSide(1 - side)
  }
  
  const tileData = {
    name: 'Footman',
    icon: () => <BrightnessHighIcon />,
    height: 5,
    width: 5,
    sides: [
      // side 1
      {
        moves: [
          {
            x: 2,
            y: 1,
            type: 'm'
          },
          {
            x: 2,
            y: 2,
            type: 's',
            editable: false,
          },
        ],
      },
      // side 2
      {
        moves: [
          {
            x: 2,
            y: 3,
            type: 'm'
          },
          {
            x: 2,
            y: 2,
            type: 's',
            editable: false,
          },
        ],
      },
    ],
  }

  const [tile, setTile] = useState(tileData);
  const activeMoves = tile.sides[side].moves;

  const handleEditGridSquare = (x, y) => {
    let newTileData = cloneDeep(tile);
    const newMove = { x, y, type: moveType }
    let moveFound = false;
    newTileData.sides[side].moves = newTileData.sides[side].moves.map((move, i) => {
      if (move.x === x && move.y === y) {
        moveFound = true;
        move.type = moveType;
      }
      return move;
    })
    
    if (!moveFound) {
      newTileData.sides[side].moves.push(newMove);
    }
    setTile(newTileData);
  };

  return (
    <div className={classes.root}>
      <div className={classes.paletteColumn}>
        <MovePalette selectedMoveType={moveType} setMoveType={setMoveType} />
      </div>
      <div className={classes.tileColumn}>
        <h1>Tile Creator</h1>
        <EditableTile 
          onFlip={flipTile} 
          onEditGridSquare={handleEditGridSquare} 
          currentSide={side} 
          tile={tile} 
        />
        <NonEditableTile onFlip={flipTile} currentSide={side} tile={tile} />
      </div>
    </div>
  );
}

export default TileCreator;
