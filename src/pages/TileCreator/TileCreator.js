import React, {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import { Button } from '@material-ui/core';
import {cloneDeep} from 'lodash';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';

const MOVE_TYPES = [
  {
    type: 'm',
    getIcon: () => <FaceIcon />,
  },
  {
    type: 'jm',
    getIcon: () => <ChangeHistoryIcon />,
  },
  {
    type: 'sl',
    getIcon: () => <FaceIcon />,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  paletteColumn: {

  },
  tileColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    transition: '0.4s',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white
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
  tileBottomLabel: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: 10,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  movePalette: {
    border: 'solid',
    borderRadius: 5,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
  },
  movePaletteButton: {
    margin: 10,
  },
}));

function GridSquare({onEdit, x, y, editable, type}) {
  const classes = useStyles();
  const moveData = MOVE_TYPES.filter((move) => move.type === type);
  let renderIcon = () => null;
  if (moveData.length) renderIcon = moveData[0].getIcon;
  return (
    <div onClick={editable ? onEdit : () => null} className={classes.gridSquare}>
      <div>{type}</div>
      {renderIcon()}
    </div>
  );
}

function Grid({ onSetTile, tileData, currentSide, selectedMoveType }) {
  const classes = useStyles();
  const {height, width, sides} = tileData;
  const moves = sides[currentSide].moves;
  const handleEditGridSquare = (x, y) => {
    let newTileData = cloneDeep(tileData);
    const newMove = {x, y, type: selectedMoveType}
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
    <div className={classes.tileGrid}>
      {
        Array(height).fill(null).map((item, y) => (
          <div key={y} className={classes.gridRow}>
            {Array(width).fill(null).map((item, x) => {
              const movesAtXY = moves.filter((move) => move.x === x && move.y === y);
              const type = movesAtXY.length ? movesAtXY[0].type : null
              const editable = movesAtXY.length ? movesAtXY[0].editable : true
              const handleEdit = () => handleEditGridSquare(x, y);
              return <GridSquare onEdit={handleEdit} key={`${x}${y}`} editable={editable} x={x} y={y} type={type}/>
            })}
          </div>
        ))
      }
    </div>
  );
}

function EditableTile({onFlip, onSetTile, tileData, currentSide, selectedMoveType}) {
  const classes = useStyles();

  return (
    <div className={classes.tileContainer}>
      <div className={classes.tileLeft}>
        <Grid onSetTile={onSetTile} tileData={tileData} currentSide={currentSide} selectedMoveType={selectedMoveType}/>
        <div className={classes.tileName}>
          <Typography className={classes.title}>
            Footman
            </Typography>
        </div>
      </div>
      <div className={classes.tileRight}>
        <div className={classes.tileIcon}>
          <BrightnessHighIcon />
        </div>
      </div>
      <div className={classes.tileBottomLabel}>
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

function MovePalette({selectedMoveType, setMoveType}) {
  const classes = useStyles();

  return (
    <div className={classes.movePalette}>
      {
        MOVE_TYPES.map((move, i) => {
          return (
            <div key={i} className={classes.movePaletteButton}>
              <Chip 
                variant={move.type === selectedMoveType ? 'default' : 'outlined'} 
                color="primary" 
                icon={move.getIcon()} 
                label={move.type}
                onClick={() => setMoveType(move.type)}
              />
            </div>
          )
        })
      }
    </div>
  )
}

function TileCreator() {
  const classes = useStyles();
  const [moveType, setMoveType] = useState('m');
  const [side, setSide] = useState(0);
  const flipTile = () => {
    setSide(1 - side)
  }
  
  const tileData = {
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
            type: '*',
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
            type: '*',
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
