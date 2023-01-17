import React from 'react';
import {SvgIcon} from '@material-ui/core'
import MoveIconPath from '../assets/icons/MoveIconPath';
import DreadIconPath from '../assets/icons/DreadIconPath';
import StrikeIconPath from '../assets/icons/StrikeIconPath';
import StartIconPath from '../assets/icons/StartIconPath';
import CommandIconPath from '../assets/icons/CommandIconPath';
import CommandIconV2Path from '../assets/icons/CommandIconPath_v2';
import DefenseIconPath from '../assets/icons/DefenseIconPath';
import SlideIconPath from '../assets/icons/SlideIconPath';

export const MOVE_TYPE_ENUM = {
  FRONT: 's',
  BACK: 's2',
  SOFT_MOVE: 'sm',
  SOFT_JUMP: 'sj',
  MOVE: 'm',
  JUMP_MOVE: 'jm',
  DREAD: 'dr',
  STRIKE: 'st',
  SHOT: 'sh',
  SLIDE_E: 'sl_E',
  SLIDE_SE: 'sl_SE',
  SLIDE_S: 'sl_S',
  SLIDE_SW: 'sl_SW',
  SLIDE_W: 'sl_W',
  SLIDE_NW: 'sl_NW',
  SLIDE_N: 'sl_N',
  SLIDE_NE: 'sl_NE',
  JUMP_SLIDE_E: 'jsl_E',
  JUMP_SLIDE_SE: 'jsl_SE',
  JUMP_SLIDE_S: 'jsl_S',
  JUMP_SLIDE_SW: 'jsl_SW',
  JUMP_SLIDE_W: 'jsl_W',
  JUMP_SLIDE_NW: 'jsl_NW',
  JUMP_SLIDE_N: 'jsl_N',
  JUMP_SLIDE_NE: 'jsl_NE',
  COMMAND: 'c',
  DEFENSE: 'd',
  EMPTY: 'empty',
}

const MOVE_TYPES = [
  {
    type: MOVE_TYPE_ENUM.EMPTY,
    name: 'Empty',
    definition: "Clear this space",
    getIcon: (theme) => <SvgIcon style={{ fill: theme.palette.common.white, stroke: theme.palette.primary.main, strokeWidth: 40 }} viewBox="0 0 512 512"><DefenseIconPath /></SvgIcon>,
  },
  {
    type: MOVE_TYPE_ENUM.FRONT,
    name: 'Front',
    definition: "The tile must start on this side.",
    getIcon: () => <SvgIcon viewBox="0 0 512 512"><StartIconPath /></SvgIcon>,
  },
  {
    type: MOVE_TYPE_ENUM.BACK,
    name: 'Back',
    definition: "The tile must start on the other side.",
    getIcon: (theme) => <SvgIcon style={{ fill: theme.palette.common.white, stroke: theme.palette.primary.main, strokeWidth: 40 }} viewBox="0 0 512 512"><StartIconPath /></SvgIcon>,
  },
  {
    type: MOVE_TYPE_ENUM.MOVE,
    name: 'Move',
    definition: "This icon allows a Troop Tile to move to the indicated square if there is a clear and straight path to it from the starting square (the square the tile occupies on the gameboard). If there is a friendly or enemy Troop Tile in between the starting and target squares, then the move cannot be made. Likewise, the move cannot be made if there is a friendly Troop Tile in the target square. If there is an enemy in the target square, however, the move can be made and the player captures the enemy tile.",
    getIcon: () => <SvgIcon viewBox="0 0 512 512"><MoveIconPath /></SvgIcon>,
  },
  {
    type: MOVE_TYPE_ENUM.SOFT_MOVE,
    name: 'Soft Move',
    definition: "This icon allows a Troop Tile to move to the indicated square if there is a clear and straight path to it from the starting square (the square the tile occupies on the gameboard). If there is a friendly or enemy Troop Tile in between the starting and target squares, then the move cannot be made. Likewise, the move cannot be made if there is a friendly Troop Tile in the target square.",
    getIcon: () => <SvgIcon viewBox="0 0 512 512"><circle cx="256" cy="256" r="100" /></SvgIcon>,
  },
  {
    type: MOVE_TYPE_ENUM.JUMP_MOVE,
    name: 'Jump Move',
    definition: "This icon allows a Troop Tile to move to the square shown, jumping over any Troop Tile (friend or enemy) along a shortest path from the starting square to the target square.If there is a friendly Troop Tile in the target square, the move cannot be made.If there is an enemy in the target square, the move can be made and the enemy tile is captured(see Capturing Tiles, p. 5).Nothing happens to the Troop Tiles that were jumped over.",
    getIcon: (theme) => <SvgIcon style={{ fill: theme.palette.common.white, stroke: theme.palette.primary.main, strokeWidth: 40 }} viewBox="0 0 512 512"><MoveIconPath /></SvgIcon>,
  },
  {
    type: MOVE_TYPE_ENUM.SOFT_JUMP,
    name: 'Soft Jump',
    definition: "This icon allows a Troop Tile to move to the square shown, jumping over any Troop Tile (friend or enemy) along a shortest path from the starting square to the target square.If there is a friendly Troop Tile in the target square, the move cannot be made.If there is an enemy in the target square, the move can be made. Nothing happens to the Troop Tiles that were jumped over.",
    getIcon: (theme) => <SvgIcon style={{ fill: theme.palette.common.white, stroke: theme.palette.primary.main, strokeWidth: 40 }} viewBox="0 0 512 512"><circle cx="256" cy="256" r="100" /></SvgIcon>,
  },
  {
    type: MOVE_TYPE_ENUM.DREAD,
    name: 'Dread',
    definition: "After any movement or placement of a new tile is completed or placement of a new tile, any tile (friendly or enemy) in a square covered by a Dread icon is frozen in place.The tile cannot be moved, captured, shifted by the Command ability, or use any ability, until the Dread icon is removed(i.e.at the start of the controlling player’s turn, the Dread icon is no longer covering the previously frozen tile).The Fort(and Camelot) Tile protects against the Dread icon; a tile in the Fort(and Camelot) cannot be frozen in place, while a tile with a Dread icon inside the Fort(and Camelot) cannot freeze any tile in place outside.Additionally, any tile acting as the Duke, as well as any tile with a Dread icon, is immune to the Dread icon.",
    getIcon: () => <SvgIcon viewBox="0 0 512 512"><DreadIconPath /></SvgIcon>,
  },
  {
    type: MOVE_TYPE_ENUM.STRIKE,
    name: 'Strike',
    definition: "This icon allows a Troop Tile to capture from afar. Remove an enemy Troop Tile in one of the squares indicated by this icon (see Capturing Tiles, p. 5), but leave the Troop Tile in its original location; using this icon does not move the Troop Tile, but the Tile still flips.This icon has no effect on a friendly tile.",
    getIcon: (theme) => <SvgIcon style={{ fill: theme.palette.common.white, stroke: theme.palette.primary.main, strokeWidth: 40 }} viewBox="0 0 512 512"><StrikeIconPath /></SvgIcon>,
  },
  {
    type: MOVE_TYPE_ENUM.SHOT,
    name: 'Shot',
    definition: "This is similar to the Strike icon. This icon allows a Troop Tile to capture from afar, but only if the Troop Tile has a clear path to the enemy Troop Tile.",
    getIcon: () => <SvgIcon viewBox="0 0 512 512"><StrikeIconPath /></SvgIcon>,
  },
  {
    type: MOVE_TYPE_ENUM.SLIDE_E,
    name: 'Slide',
    definition: "This icon allows a Troop Tile to move any number of squares in the direction shown, as long as it has a clear path.The Troop Tile may not jump over any pieces.If it ends its turn in an opponent’s square, the controlling player captures that piece(see Capturing Tiles, p. 5); it cannot end its movement in a square occupied by a friendly tile.",
    getIcon: () => <SvgIcon transform="rotate(0)" viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
  },
  {
    type: MOVE_TYPE_ENUM.SLIDE_SE,
    name: 'Slide',
    definition: "This icon allows a Troop Tile to move any number of squares in the direction shown, as long as it has a clear path.The Troop Tile may not jump over any pieces.If it ends its turn in an opponent’s square, the controlling player captures that piece(see Capturing Tiles, p. 5); it cannot end its movement in a square occupied by a friendly tile.",
    getIcon: () => <SvgIcon transform="rotate(45)" viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
    parent: MOVE_TYPE_ENUM.SLIDE_E,
  },
  {
    type: MOVE_TYPE_ENUM.SLIDE_S,
    name: 'Slide',
    definition: "This icon allows a Troop Tile to move any number of squares in the direction shown, as long as it has a clear path.The Troop Tile may not jump over any pieces.If it ends its turn in an opponent’s square, the controlling player captures that piece(see Capturing Tiles, p. 5); it cannot end its movement in a square occupied by a friendly tile.",
    getIcon: () => <SvgIcon transform="rotate(90)" viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
    parent: MOVE_TYPE_ENUM.SLIDE_E,
  },
  {
    type: MOVE_TYPE_ENUM.SLIDE_SW,
    name: 'Slide',
    definition: "This icon allows a Troop Tile to move any number of squares in the direction shown, as long as it has a clear path.The Troop Tile may not jump over any pieces.If it ends its turn in an opponent’s square, the controlling player captures that piece(see Capturing Tiles, p. 5); it cannot end its movement in a square occupied by a friendly tile.",
    getIcon: () => <SvgIcon transform="rotate(135)" viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
    parent: MOVE_TYPE_ENUM.SLIDE_E,
  },
  {
    type: MOVE_TYPE_ENUM.SLIDE_W,
    name: 'Slide',
    definition: "This icon allows a Troop Tile to move any number of squares in the direction shown, as long as it has a clear path.The Troop Tile may not jump over any pieces.If it ends its turn in an opponent’s square, the controlling player captures that piece(see Capturing Tiles, p. 5); it cannot end its movement in a square occupied by a friendly tile.",
    getIcon: () => <SvgIcon transform="rotate(180)" viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
    parent: MOVE_TYPE_ENUM.SLIDE_E,
  },
  {
    type: MOVE_TYPE_ENUM.SLIDE_NW,
    name: 'Slide',
    definition: "This icon allows a Troop Tile to move any number of squares in the direction shown, as long as it has a clear path.The Troop Tile may not jump over any pieces.If it ends its turn in an opponent’s square, the controlling player captures that piece(see Capturing Tiles, p. 5); it cannot end its movement in a square occupied by a friendly tile.",
    getIcon: () => <SvgIcon transform="rotate(225)" viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
    parent: MOVE_TYPE_ENUM.SLIDE_E,
  },
  {
    type: MOVE_TYPE_ENUM.SLIDE_N,
    name: 'Slide',
    definition: "This icon allows a Troop Tile to move any number of squares in the direction shown, as long as it has a clear path.The Troop Tile may not jump over any pieces.If it ends its turn in an opponent’s square, the controlling player captures that piece(see Capturing Tiles, p. 5); it cannot end its movement in a square occupied by a friendly tile.",
    getIcon: () => <SvgIcon transform="rotate(270)" viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
    parent: MOVE_TYPE_ENUM.SLIDE_E,
  },
  {
    type: MOVE_TYPE_ENUM.SLIDE_NE,
    name: 'Slide',
    definition: "This icon allows a Troop Tile to move any number of squares in the direction shown, as long as it has a clear path.The Troop Tile may not jump over any pieces.If it ends its turn in an opponent’s square, the controlling player captures that piece(see Capturing Tiles, p. 5); it cannot end its movement in a square occupied by a friendly tile.",
    getIcon: () => <SvgIcon transform="rotate(315)" viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
    parent: MOVE_TYPE_ENUM.SLIDE_E,
  },
  {
    type: MOVE_TYPE_ENUM.JUMP_SLIDE_E,
    name: 'Jump Slide',
    definition: "This icon follows the exact rules for Slide, with the following addition: this icon allows a Troop Tile to move in the direction of the Jump Slide icon and completely ignore any tile that might be adjacent, along the direction indicated. (This will not allow a tile to Jump Slide past the Mountain Tile.)",
    getIcon: (theme) => <SvgIcon transform="rotate(0)" style={{ fill: theme.palette.common.white, stroke: theme.palette.primary.main, strokeWidth: 40 }} viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
  },
  {
    type: MOVE_TYPE_ENUM.JUMP_SLIDE_SE,
    name: 'Jump Slide',
    definition: "This icon follows the exact rules for Slide, with the following addition: this icon allows a Troop Tile to move in the direction of the Jump Slide icon and completely ignore any tile that might be adjacent, along the direction indicated. (This will not allow a tile to Jump Slide past the Mountain Tile.)",
    getIcon: (theme) => <SvgIcon transform="rotate(45)" style={{ fill: theme.palette.common.white, stroke: theme.palette.primary.main, strokeWidth: 40 }} viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
    parent: MOVE_TYPE_ENUM.JUMP_SLIDE_E,
  },
  {
    type: MOVE_TYPE_ENUM.JUMP_SLIDE_S,
    name: 'Jump Slide',
    definition: "This icon follows the exact rules for Slide, with the following addition: this icon allows a Troop Tile to move in the direction of the Jump Slide icon and completely ignore any tile that might be adjacent, along the direction indicated. (This will not allow a tile to Jump Slide past the Mountain Tile.)",
    getIcon: (theme) => <SvgIcon transform="rotate(90)" style={{ fill: theme.palette.common.white, stroke: theme.palette.primary.main, strokeWidth: 40 }} viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
    parent: MOVE_TYPE_ENUM.JUMP_SLIDE_E,
  },
  {
    type: MOVE_TYPE_ENUM.JUMP_SLIDE_SW,
    name: 'Jump Slide',
    definition: "This icon follows the exact rules for Slide, with the following addition: this icon allows a Troop Tile to move in the direction of the Jump Slide icon and completely ignore any tile that might be adjacent, along the direction indicated. (This will not allow a tile to Jump Slide past the Mountain Tile.)",
    getIcon: (theme) => <SvgIcon transform="rotate(135)" style={{ fill: theme.palette.common.white, stroke: theme.palette.primary.main, strokeWidth: 40 }} viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
    parent: MOVE_TYPE_ENUM.JUMP_SLIDE_E,
  },
  {
    type: MOVE_TYPE_ENUM.JUMP_SLIDE_W,
    name: 'Jump Slide',
    definition: "This icon follows the exact rules for Slide, with the following addition: this icon allows a Troop Tile to move in the direction of the Jump Slide icon and completely ignore any tile that might be adjacent, along the direction indicated. (This will not allow a tile to Jump Slide past the Mountain Tile.)",
    getIcon: (theme) => <SvgIcon transform="rotate(180)" style={{ fill: theme.palette.common.white, stroke: theme.palette.primary.main, strokeWidth: 40 }} viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
    parent: MOVE_TYPE_ENUM.JUMP_SLIDE_E,
  },
  {
    type: MOVE_TYPE_ENUM.JUMP_SLIDE_NW,
    name: 'Jump Slide',
    definition: "This icon follows the exact rules for Slide, with the following addition: this icon allows a Troop Tile to move in the direction of the Jump Slide icon and completely ignore any tile that might be adjacent, along the direction indicated. (This will not allow a tile to Jump Slide past the Mountain Tile.)",
    getIcon: (theme) => <SvgIcon transform="rotate(225)" style={{ fill: theme.palette.common.white, stroke: theme.palette.primary.main, strokeWidth: 40 }} viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
    parent: MOVE_TYPE_ENUM.JUMP_SLIDE_E,
  },
  {
    type: MOVE_TYPE_ENUM.JUMP_SLIDE_N,
    name: 'Jump Slide',
    definition: "This icon follows the exact rules for Slide, with the following addition: this icon allows a Troop Tile to move in the direction of the Jump Slide icon and completely ignore any tile that might be adjacent, along the direction indicated. (This will not allow a tile to Jump Slide past the Mountain Tile.)",
    getIcon: (theme) => <SvgIcon transform="rotate(270)" style={{ fill: theme.palette.common.white, stroke: theme.palette.primary.main, strokeWidth: 40 }} viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
    parent: MOVE_TYPE_ENUM.JUMP_SLIDE_E,
  },
  {
    type: MOVE_TYPE_ENUM.JUMP_SLIDE_NE,
    name: 'Jump Slide',
    definition: "This icon follows the exact rules for Slide, with the following addition: this icon allows a Troop Tile to move in the direction of the Jump Slide icon and completely ignore any tile that might be adjacent, along the direction indicated. (This will not allow a tile to Jump Slide past the Mountain Tile.)",
    getIcon: (theme) => <SvgIcon transform="rotate(315)" style={{ fill: theme.palette.common.white, stroke: theme.palette.primary.main, strokeWidth: 40 }} viewBox="0 0 512 512"><SlideIconPath /></SvgIcon>,
    parent: MOVE_TYPE_ENUM.JUMP_SLIDE_E,
  },
  {
    type: MOVE_TYPE_ENUM.COMMAND,
    name: 'Command',
    definition: "A Troop Tile with these symbols can move other Troop Tiles around it. Instead of moving this Troop Tile, the player moves one of the Troop Tiles he controls from any square indicated by one of these symbols to any other square indicated by one of these symbols; though this tile does not move, it still flips, as always.If the Troop Tile that was moved ends its turn in a square occupied by an enemy tile, capture that tile(see Capturing Tiles, at right); a tile cannot end its move in a square occupied by a friendly tile. The Mountain Tile(see p. 8) does not block Command movement in any way(a tile still cannot end its movement in a Mountain Tile).No other tiles block a Command move in any way; the moving tile simply can move from any square with the Command icon to any other square with the Command icon.",
    getIcon: (theme, options = {style: {}}) => {
      const {style} = options
      return (<SvgIcon style={style} viewBox="0 0 512 512"><CommandIconV2Path /></SvgIcon>)
    },
    // getIcon: () => <SvgIcon viewBox="0 0 512 512"><CommandIconPath /></SvgIcon>,
    // getIcon: (theme) => <SvgIcon style={{ fill: theme.palette.common.white, stroke: theme.palette.primary.main, strokeWidth: 40 }} viewBox="0 0 512 512"><DefenseIconPath /></SvgIcon>,
  },
  {
    type: MOVE_TYPE_ENUM.DEFENSE,
    name: 'Defense',
    definition: "A tile cannot capture a target tile if its straight move towards or into the target square would pass through a square with  a Defense icon as indicated on the target tile; even if the tile starts the turn adjacent to the target tile, if the square it starts  on indicates a Defense icon on that tile, the target cannot be captured.   If a move into a target square using a Jump icon can be achieved with a straight line move, then in the instance of a   Defense icon on the target tile potentially blocking that move, that straight line must be used and hence is blocked; i.e.you   cannot take a non- straight line to the target.However, if there is no straight line move to the target square, then the player   can use which ever path can move around the Defense icon.   The Strike icon follows the same rules as Jump / Jump Slide icon; i.e.if there is a straight line attack to the target hex,   that must be chosen and so if a Defense icon is along that path, it blocks the Strike icon.But if there is a non - straight path  to the target, than the Strike icon can be used to capture the target.   Note that Command can always move a tile and capture the target tile, regardless of Defense icons",
    getIcon: () => <SvgIcon viewBox="0 0 512 512"><DefenseIconPath /></SvgIcon>,
  },
];

export default MOVE_TYPES;
