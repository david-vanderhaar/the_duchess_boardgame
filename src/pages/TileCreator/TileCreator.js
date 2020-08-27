import React, {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import { Button, SvgIcon, Tooltip } from '@material-ui/core';
import {cloneDeep, get} from 'lodash';
import Chip from '@material-ui/core/Chip';
import MoveIconPath from '../../assets/icons/MoveIconPath';
import DreadIconPath from '../../assets/icons/DreadIconPath';
import StrikeIconPath from '../../assets/icons/StrikeIconPath';
import StartIconPath from '../../assets/icons/StartIconPath';
import CommandIconPath from '../../assets/icons/CommandIconPath';
import DefenseIconPath from '../../assets/icons/DefenseIconPath';
import SlideIconPath from '../../assets/icons/SlideIconPath';

const MOVE_TYPES = [
  {
    type: 's',
    name: 'Start',
    definition: "The tile must start on this side.",
    getIcon: () => <SvgIcon viewBox="0 0 512 512"><StartIconPath /></SvgIcon>,
  },
  {
    type: 'm',
    name: 'Move',
    definition: "This icon allows a Troop Tile to move to the indicated square if there is a clear and straight path to it from the starting square (the square the tile occupies on the gameboard). If there is a friendly or enemy Troop Tile in between the starting and target squares, then the move cannot be made. Likewise, the move cannot be made if there is a friendly Troop Tile in the target square. If there is an enemy in the target square, however, the move can be made and the player captures the enemy tile.",
    getIcon: () => <SvgIcon viewBox="0 0 512 512"><MoveIconPath /></SvgIcon>,
  },
  {
    type: 'jm',
    name: 'Jump Move',
    definition: "This icon allows a Troop Tile to move to the square shown, jumping over any Troop Tile (friend or enemy) along a shortest path from the starting square to the target square.If there is a friendly Troop Tile in the target square, the move cannot be made.If there is an enemy in the target square, the move can be made and the enemy tile is captured(see Capturing Tiles, p. 5).Nothing happens to the Troop Tiles that were jumped over.",
    getIcon: (theme) => <SvgIcon style={{ fill: theme.palette.common.white, stroke: theme.palette.primary.main, strokeWidth: 40 }} viewBox="0 0 512 512"><MoveIconPath /></SvgIcon>,
  },
  {
    type: 'dr',
    name: 'Dread',
    definition: "After any movement or placement of a new tile is completed or placement of a new tile, any tile (friendly or enemy) in a square covered by a Dread icon is frozen in place.The tile cannot be moved, captured, shifted by the Command ability, or use any ability, until the Dread icon is removed(i.e.at the start of the controlling player’s turn, the Dread icon is no longer covering the previously frozen tile).The Fort(and Camelot) Tile protects against the Dread icon; a tile in the Fort(and Camelot) cannot be frozen in place, while a tile with a Dread icon inside the Fort(and Camelot) cannot freeze any tile in place outside.Additionally, any tile acting as the Duke, as well as any tile with a Dread icon, is immune to the Dread icon.",
    getIcon: () => <SvgIcon viewBox="0 0 512 512"><DreadIconPath/></SvgIcon>,
  },
  {
    type: 'st',
    name: 'Strike',
    definition: "This icon allows a Troop Tile to capture from afar. Remove an enemy Troop Tile in one of the squares indicated by this icon (see Capturing Tiles, p. 5), but leave the Troop Tile in its original location; using this icon does not move the Troop Tile, but the Tile still flips.This icon has no effect on a friendly tile.",
    getIcon: (theme) => <SvgIcon style={{ fill: theme.palette.common.white, stroke: theme.palette.primary.main, strokeWidth: 40 }} viewBox="0 0 512 512"><StrikeIconPath /></SvgIcon>,
  },
  {
    type: 'sh',
    name: 'Shot',
    definition: "This is similar to the Strike icon. This icon allows a Troop Tile to capture from afar, but only if the Troop Tile has a clear path to the enemy Troop Tile.",
    getIcon: () => <SvgIcon viewBox="0 0 512 512"><StrikeIconPath /></SvgIcon>,
  },
  {
    type: 'sl_E',
    name: 'Slide',
    definition: "This icon allows a Troop Tile to move any number of squares in the direction shown, as long as it has a clear path.The Troop Tile may not jump over any pieces.If it ends its turn in an opponent’s square, the controlling player captures that piece(see Capturing Tiles, p. 5); it cannot end its movement in a square occupied by a friendly tile.",
    getIcon: () => <SvgIcon transform="rotate(0)" viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
  },
  {
    type: 'sl_SE',
    name: 'Slide',
    definition: "This icon allows a Troop Tile to move any number of squares in the direction shown, as long as it has a clear path.The Troop Tile may not jump over any pieces.If it ends its turn in an opponent’s square, the controlling player captures that piece(see Capturing Tiles, p. 5); it cannot end its movement in a square occupied by a friendly tile.",
    getIcon: () => <SvgIcon transform="rotate(45)" viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
  },
  {
    type: 'sl_S',
    name: 'Slide',
    definition: "This icon allows a Troop Tile to move any number of squares in the direction shown, as long as it has a clear path.The Troop Tile may not jump over any pieces.If it ends its turn in an opponent’s square, the controlling player captures that piece(see Capturing Tiles, p. 5); it cannot end its movement in a square occupied by a friendly tile.",
    getIcon: () => <SvgIcon transform="rotate(90)" viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
  },
  {
    type: 'sl_SW',
    name: 'Slide',
    definition: "This icon allows a Troop Tile to move any number of squares in the direction shown, as long as it has a clear path.The Troop Tile may not jump over any pieces.If it ends its turn in an opponent’s square, the controlling player captures that piece(see Capturing Tiles, p. 5); it cannot end its movement in a square occupied by a friendly tile.",
    getIcon: () => <SvgIcon transform="rotate(135)" viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
  },
  {
    type: 'sl_W',
    name: 'Slide',
    definition: "This icon allows a Troop Tile to move any number of squares in the direction shown, as long as it has a clear path.The Troop Tile may not jump over any pieces.If it ends its turn in an opponent’s square, the controlling player captures that piece(see Capturing Tiles, p. 5); it cannot end its movement in a square occupied by a friendly tile.",
    getIcon: () => <SvgIcon transform="rotate(180)" viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
  },
  {
    type: 'sl_NW',
    name: 'Slide',
    definition: "This icon allows a Troop Tile to move any number of squares in the direction shown, as long as it has a clear path.The Troop Tile may not jump over any pieces.If it ends its turn in an opponent’s square, the controlling player captures that piece(see Capturing Tiles, p. 5); it cannot end its movement in a square occupied by a friendly tile.",
    getIcon: () => <SvgIcon transform="rotate(225)" viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
  },
  {
    type: 'sl_N',
    name: 'Slide',
    definition: "This icon allows a Troop Tile to move any number of squares in the direction shown, as long as it has a clear path.The Troop Tile may not jump over any pieces.If it ends its turn in an opponent’s square, the controlling player captures that piece(see Capturing Tiles, p. 5); it cannot end its movement in a square occupied by a friendly tile.",
    getIcon: () => <SvgIcon transform="rotate(270)" viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
  },
  {
    type: 'sl_NE',
    name: 'Slide',
    definition: "This icon allows a Troop Tile to move any number of squares in the direction shown, as long as it has a clear path.The Troop Tile may not jump over any pieces.If it ends its turn in an opponent’s square, the controlling player captures that piece(see Capturing Tiles, p. 5); it cannot end its movement in a square occupied by a friendly tile.",
    getIcon: () => <SvgIcon transform="rotate(315)" viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
  },
  {
    type: 'jsl_E',
    name: 'Jump Slide',
    definition: "This icon follows the exact rules for Slide, with the following addition: this icon allows a Troop Tile to move in the direction of the Jump Slide icon and completely ignore any tile that might be adjacent, along the direction indicated. (This will not allow a tile to Jump Slide past the Mountain Tile.)",
    getIcon: (theme) => <SvgIcon transform="rotate(0)" style={{ fill: theme.palette.common.white, stroke: theme.palette.primary.main, strokeWidth: 40 }} viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
  },
  {
    type: 'jsl_SE',
    name: 'Jump Slide',
    definition: "This icon follows the exact rules for Slide, with the following addition: this icon allows a Troop Tile to move in the direction of the Jump Slide icon and completely ignore any tile that might be adjacent, along the direction indicated. (This will not allow a tile to Jump Slide past the Mountain Tile.)",
    getIcon: (theme) => <SvgIcon transform="rotate(45)" style={{ fill: theme.palette.common.white, stroke: theme.palette.primary.main, strokeWidth: 40 }} viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
  },
  {
    type: 'jsl_S',
    name: 'Jump Slide',
    definition: "This icon follows the exact rules for Slide, with the following addition: this icon allows a Troop Tile to move in the direction of the Jump Slide icon and completely ignore any tile that might be adjacent, along the direction indicated. (This will not allow a tile to Jump Slide past the Mountain Tile.)",
    getIcon: (theme) => <SvgIcon transform="rotate(90)" style={{ fill: theme.palette.common.white, stroke: theme.palette.primary.main, strokeWidth: 40 }} viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
  },
  {
    type: 'jsl_SW',
    name: 'Jump Slide',
    definition: "This icon follows the exact rules for Slide, with the following addition: this icon allows a Troop Tile to move in the direction of the Jump Slide icon and completely ignore any tile that might be adjacent, along the direction indicated. (This will not allow a tile to Jump Slide past the Mountain Tile.)",
    getIcon: (theme) => <SvgIcon transform="rotate(135)" style={{ fill: theme.palette.common.white, stroke: theme.palette.primary.main, strokeWidth: 40 }} viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
  },
  {
    type: 'jsl_W',
    name: 'Jump Slide',
    definition: "This icon follows the exact rules for Slide, with the following addition: this icon allows a Troop Tile to move in the direction of the Jump Slide icon and completely ignore any tile that might be adjacent, along the direction indicated. (This will not allow a tile to Jump Slide past the Mountain Tile.)",
    getIcon: (theme) => <SvgIcon transform="rotate(180)" style={{ fill: theme.palette.common.white, stroke: theme.palette.primary.main, strokeWidth: 40 }} viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
  },
  {
    type: 'jsl_NW',
    name: 'Jump Slide',
    definition: "This icon follows the exact rules for Slide, with the following addition: this icon allows a Troop Tile to move in the direction of the Jump Slide icon and completely ignore any tile that might be adjacent, along the direction indicated. (This will not allow a tile to Jump Slide past the Mountain Tile.)",
    getIcon: (theme) => <SvgIcon transform="rotate(225)" style={{ fill: theme.palette.common.white, stroke: theme.palette.primary.main, strokeWidth: 40 }} viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
  },
  {
    type: 'jsl_N',
    name: 'Jump Slide',
    definition: "This icon follows the exact rules for Slide, with the following addition: this icon allows a Troop Tile to move in the direction of the Jump Slide icon and completely ignore any tile that might be adjacent, along the direction indicated. (This will not allow a tile to Jump Slide past the Mountain Tile.)",
    getIcon: (theme) => <SvgIcon transform="rotate(270)" style={{ fill: theme.palette.common.white, stroke: theme.palette.primary.main, strokeWidth: 40 }} viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
  },
  {
    type: 'jsl_NE',
    name: 'Jump Slide',
    definition: "This icon follows the exact rules for Slide, with the following addition: this icon allows a Troop Tile to move in the direction of the Jump Slide icon and completely ignore any tile that might be adjacent, along the direction indicated. (This will not allow a tile to Jump Slide past the Mountain Tile.)",
    getIcon: (theme) => <SvgIcon transform="rotate(315)" style={{ fill: theme.palette.common.white, stroke: theme.palette.primary.main, strokeWidth: 40 }} viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
  },
  {
    type: 'c',
    name: 'Command',
    definition: "A Troop Tile with these symbols can move other Troop Tiles around it. Instead of moving this Troop Tile, the player moves one of the Troop Tiles he controls from any square indicated by one of these symbols to any other square indicated by one of these symbols; though this tile does not move, it still flips, as always.If the Troop Tile that was moved ends its turn in a square occupied by an enemy tile, capture that tile(see Capturing Tiles, at right); a tile cannot end its move in a square occupied by a friendly tile. The Mountain Tile(see p. 8) does not block Command movement in any way(a tile still cannot end its movement in a Mountain Tile).No other tiles block a Command move in any way; the moving tile simply can move from any square with the Command icon to any other square with the Command icon.",
    getIcon: () => <SvgIcon viewBox="0 0 512 512"><CommandIconPath /></SvgIcon>,
  },
  {
    type: 'd',
    name: 'Defense',
    definition: "A tile cannot capture a target tile if its straight move towards or into the target square would pass through a square with  a Defense icon as indicated on the target tile; even if the tile starts the turn adjacent to the target tile, if the square it starts  on indicates a Defense icon on that tile, the target cannot be captured.   If a move into a target square using a Jump icon can be achieved with a straight line move, then in the instance of a   Defense icon on the target tile potentially blocking that move, that straight line must be used and hence is blocked; i.e.you   cannot take a non- straight line to the target.However, if there is no straight line move to the target square, then the player   can use which ever path can move around the Defense icon.   The Strike icon follows the same rules as Jump / Jump Slide icon; i.e.if there is a straight line attack to the target hex,   that must be chosen and so if a Defense icon is along that path, it blocks the Strike icon.But if there is a non - straight path  to the target, than the Strike icon can be used to capture the target.   Note that Command can always move a tile and capture the target tile, regardless of Defense icons",
    getIcon: () => <SvgIcon viewBox="0 0 512 512"><DefenseIconPath /></SvgIcon>,
  },
];

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
  movePalette: {
    border: 'solid',
    borderRadius: 5,
    borderWidth: 1,
    display: 'flex',
    flexWrap: 'wrap',
    margin: 20,
    padding: 20,
  },
  movePaletteButton: {
    margin: 10,
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
              const editable = get(movesAtXY, '0.editable', true);
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
    <div className={classes.editableTileContainer}>
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

function MovePalette({selectedMoveType, setMoveType}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.movePalette}>
      {
        MOVE_TYPES.map((move, i) => {
          return (
            <Tooltip title={move.definition}>
              <div key={i} className={classes.movePaletteButton}>
                  <Chip 
                    variant={move.type === selectedMoveType ? 'default' : 'outlined'} 
                    color="primary" 
                    icon={move.getIcon(theme)} 
                    label={move.name}
                    onClick={() => setMoveType(move.type)}
                  />
              </div>
            </Tooltip>
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
