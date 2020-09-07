import React, {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import { Button } from '@material-ui/core';
import {cloneDeep, get} from 'lodash';
import MOVE_TYPES from '../../constants/moveTypes';
import BasicGrid from '../../components/Grid';
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

function GridSquare({onEdit, x, y, editable, type}) {
  const classes = useStyles();
  const theme = useTheme();
  
  const moveData = MOVE_TYPES.filter((move) => move.type === type);
  let renderIcon = () => null;
  if (moveData.length) renderIcon = () => moveData[0].getIcon(theme);
  return (
    <div onClick={editable ? onEdit : () => null} className={classes.gridSquare}>
      {renderIcon()}
    </div>
  );
}

function EditableTile({onFlip, onSetTile, tileData, currentSide, selectedMoveType}) {
  const classes = useStyles();
  const { height, width, sides } = tileData;
  const moves = sides[currentSide].moves;
  const handleEditGridSquare = (x, y) => {
    let newTileData = cloneDeep(tileData);
    const newMove = { x, y, type: selectedMoveType }
    let moveFound = false;
    newTileData.sides[currentSide].moves = newTileData.sides[currentSide].moves.map((move, i) => {
      if (move.x === x && move.y === y) {
        moveFound = true;
        move.type = selectedMoveType;
      }
      return move;
    })
    if (!moveFound) {
      newTileData.sides[currentSide].moves.push(newMove);
    }
    onSetTile(newTileData);
  };

  return (
    <div className={classes.editableTileContainer}>
      <div className={classes.tileContainer}>
        <div className={classes.tileLeft}>
          <div className={classes.tileGrid}>
            <BasicGrid
              height={height}
              width={width}
              renderGridSpace={(x, y, theme) => {
                const movesAtXY = moves.filter((move) => move.x === x && move.y === y);
                const type = movesAtXY.length ? movesAtXY[0].type : null
                const editable = get(movesAtXY, '0.editable', true);
                const handleEdit = () => handleEditGridSquare(x, y);
                return <GridSquare onEdit={handleEdit} key={`${x}${y}`} editable={editable} x={x} y={y} type={type} />
              }}
              gridSpaceStyles={classes.GridSquare}
            />
          </div>
          <div className={classes.tileName}>
            <Typography className={classes.title}>
              {tileData.name}
            </Typography>
          </div>
        </div>
        <div className={classes.tileRight}>
          <div className={classes.tileIcon}>
            {tileData.icon()}
          </div>
        </div>
      </div>
      <div className={classes.tileSideLabel}>
        <Typography>Side {currentSide + 1}</Typography>
        <Button
          variant="contained"
          color='secondary'
          onClick={onFlip}
        >
          Flip
        </Button>
      </div>
    </div>
  );
}

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

  return (
    <div className={classes.root}>
      <div className={classes.paletteColumn}>
        <MovePalette selectedMoveType={moveType} setMoveType={setMoveType} />
      </div>
      <div className={classes.tileColumn}>
        <h1>Tile Creator</h1>
        <EditableTile onFlip={flipTile} onSetTile={setTile} tileData={tile} currentSide={side} selectedMoveType={moveType}/>
      </div>
    </div>
  );
}

export default TileCreator;
