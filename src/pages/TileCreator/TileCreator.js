import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import { Button } from '@material-ui/core';
import {cloneDeep, get} from 'lodash';
import { exportAsPng } from '../../components/Exporter';
import BasicGrid from '../../components/Grid';
import GridSquare from '../../components/GridSquare';
import Tile from '../../components/Tile';
import NonEditableTile from '../../components/NonEditableTile';
import EditableTile from '../../components/EditableTile';
import MovePalette from './MovePalette';
import MOVE_TYPES, {MOVE_TYPE_ENUM} from '../../constants/moveTypes';

const defaultTileData = {
  name: 'Name',
  icon: () => <BrightnessHighIcon />,
  height: 5,
  width: 5,
  sides: [
    // side 1
    {
      moves: [
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
          y: 2,
          type: 's2',
          editable: false,
        },
      ],
    },
  ],
}

const movesContainCommandMove = (moves) => moves.filter((move) => move.type === MOVE_TYPE_ENUM.COMMAND).length > 0
const filterMovesByXY = (moves, x ,y) => moves.filter((move) => move.x === x && move.y === y)
const filterByCommandMove = (moves) => moves.filter((move) => move.type === MOVE_TYPE_ENUM.COMMAND)

function TileCreator() {
  const classes = useStyles();
  const [moveType, setMoveType] = React.useState('m');
  
  const tileData = {...defaultTileData}

  const [tile, setTile] = React.useState(tileData);

  const resetTileData = () => {
    setTile(defaultTileData)
  }

  const eraseMove = (x, y, newTileData, side) => {
    const filtered = newTileData.sides[side].moves.filter((move, i) => {
      return !(move.x === x && move.y === y)
    })
    newTileData.sides[side].moves = filtered

    setTile(newTileData);
  }

  const addMove = (x, y, newTileData, side) => {
    const newMove = { x, y, type: moveType }
    const movesAtXY = filterMovesByXY(newTileData.sides[side].moves, x, y)


    if (
      movesAtXY.length === 0
        || (moveType === MOVE_TYPE_ENUM.COMMAND && !movesContainCommandMove(movesAtXY))
        || (moveType !== MOVE_TYPE_ENUM.COMMAND && movesAtXY.length === 1 && movesContainCommandMove(movesAtXY))
      ) {
      pushMove(newTileData, side, newMove)
    } else if (moveType !== MOVE_TYPE_ENUM.COMMAND && movesAtXY.length >= 1) {
      replaceMove(newTileData, side, newMove)
    }

    setTile(newTileData);
  }

  const pushMove = (newTileData, side, newMove) => {
    newTileData.sides[side].moves.push(newMove);
  }

  const replaceMove = (newTileData, side, newMove) => {
    const movesAtXY = filterMovesByXY(newTileData.sides[side].moves, newMove.x, newMove.y)
    newTileData.sides[side].moves = [
      newMove,
      ...newTileData.sides[side].moves.filter(
        (move) => {
          if (move.x === newMove.x && move.y === newMove.y) {
            return move.type === MOVE_TYPE_ENUM.COMMAND
          }
          return true
        }
      )
    ]
    
  }

  const handleEditGridSquare = (x, y, currentSide) => {
    let newTileData = cloneDeep(tile);
    if (moveType === MOVE_TYPE_ENUM.EMPTY) eraseMove(x, y, newTileData, currentSide)
    else addMove(x, y, newTileData, currentSide)
  };

  const handleEditTileName = (event) => {
    let newTileData = cloneDeep(tile);
    newTileData.name = event.target.value
    setTile(newTileData)
  }

  const tileComponentRef = React.useRef();
  const handleExportAsPng = () => exportAsPng(tileComponentRef)

  return (
    <div className={classes.root}>
      <div className={classes.paletteColumn}>
        <MovePalette selectedMoveType={moveType} setMoveType={setMoveType} />
      </div>
      <div className={classes.tileColumn}>
        <h1>Tile Creator</h1>
        <OutlinedInput style={{marginBottom: 10}} placeholder={tileData.name} onChange={handleEditTileName} />
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <Button
            variant="contained"
            color='secondary'
            onClick={handleExportAsPng}
          >
            Export as PNG
          </Button>
          <Button
            variant="contained"
            color='secondary'
            onClick={resetTileData}
          >
            Reset
          </Button>
        </div>
        <div ref={tileComponentRef}>
          <EditableTile
            // onFlip={flipTile} 
            onEditGridSquare={(x, y) => handleEditGridSquare(x, y, 0)} 
            currentSide={0} 
            tile={tile}
          />
          <EditableTile
            // onFlip={flipTile} 
            onEditGridSquare={(x, y) => handleEditGridSquare(x, y, 1)} 
            currentSide={1}
            tile={tile}
          />
        </div>
      </div>
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap-reverse',
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
    flex: 5,
    flexDirection: 'column',
  },
  gridRow: {
    display: 'flex',
    flex: 1,
  },
  tileName: {
    height: '22mm',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tileSideIndicator: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: 10,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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
  tileSideLabel: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: 10,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

export default TileCreator;
