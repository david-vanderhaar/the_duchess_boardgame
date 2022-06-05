import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
import {MOVE_TYPE_ENUM} from '../../constants/moveTypes';

function TileCreator() {
  const classes = useStyles();
  const [moveType, setMoveType] = React.useState('m');
  const [side, setSide] = React.useState(0);
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

  const [tile, setTile] = React.useState(tileData);
  const activeMoves = tile.sides[side].moves;

  const eraseMove = (x, y, newTileData) => {
    const filtered = newTileData.sides[side].moves.filter((move, i) => {
      return !(move.x === x && move.y === y)
    })
    newTileData.sides[side].moves = filtered

    setTile(newTileData);
  }

  const addMove = (x, y, newTileData) => {
    const newMove = { x, y, type: moveType }
    newTileData.sides[side].moves.push(newMove);
    console.log(newTileData.sides[side].moves);
    setTile(newTileData);
  }
  // const addMove = (x, y, newTileData) => {
  //   const newMove = { x, y, type: moveType }
  //   let moveFound = false;
  //   newTileData.sides[side].moves = newTileData.sides[side].moves.map((move, i) => {
  //     if (move.x === x && move.y === y) {
  //       moveFound = true;
  //       move.type = moveType;
  //     }
  //     return move;
  //   })

  //   if (!moveFound) {
  //     newTileData.sides[side].moves.push(newMove);
  //   }

  //   setTile(newTileData);
  // }

  const handleEditGridSquare = (x, y) => {
    let newTileData = cloneDeep(tile);
    if (moveType === MOVE_TYPE_ENUM.EMPTY) eraseMove(x, y, newTileData)
    else addMove(x, y, newTileData)
  };

  const tileComponentRef = React.useRef();
  const handleExportAsPng = () => exportAsPng(tileComponentRef)

  return (
    <div className={classes.root}>
      <div className={classes.paletteColumn}>
        <MovePalette selectedMoveType={moveType} setMoveType={setMoveType} />
      </div>
      <div className={classes.tileColumn}>
        <h1>Tile Creator</h1>
        <Button
          variant="contained"
          color='secondary'
          onClick={handleExportAsPng}
        >
          Export as PNG
        </Button>
        <div className={classes.tileSideIndicator}>
          <Typography style={{marginRight: 10}}>Side {side + 1}</Typography>
          <Button
            variant="contained"
            color='secondary'
            onClick={flipTile}
          >
            Flip
          </Button>
          </div>
        <EditableTile
          ref={tileComponentRef}
          onFlip={flipTile} 
          onEditGridSquare={handleEditGridSquare} 
          currentSide={side} 
          tile={tile} 
        />
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
