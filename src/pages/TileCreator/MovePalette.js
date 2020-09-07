import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Tooltip, Collapse } from '@material-ui/core';
import { get, has, findIndex } from 'lodash';
import Chip from '@material-ui/core/Chip';
import MOVE_TYPES from '../../constants/moveTypes';

const useStyles = makeStyles((theme) => ({
  movePalette: {
    border: 'solid',
    borderRadius: 5,
    borderWidth: 1,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: 20,
    padding: 20,
  },
  movePaletteButton: {
    margin: 10,
  },
}));

export default function MovePalette({ selectedMoveType, setMoveType }) {
  const classes = useStyles();
  const theme = useTheme();
  const parentMoves = MOVE_TYPES.filter((move) => !has(move, 'parent', false));
  const isCollapsed = (moveType, childMoves) => (selectedMoveType === moveType) || findIndex(childMoves, { type: selectedMoveType }) > -1;
  return (
    <div className={classes.movePalette}>
      {
        parentMoves.map((move, i) => {
          const childMoves = MOVE_TYPES.filter((item) => get(item, 'parent', false) === move.type);
          return (
            <div key={i} className={classes.movePaletteButton}>
              <Tooltip title={move.definition}>
                <Chip
                  variant={move.type === selectedMoveType ? 'default' : 'outlined'}
                  color="primary"
                  icon={move.getIcon(theme)}
                  label={move.name}
                  onClick={() => setMoveType(move.type)}
                />
              </Tooltip>
              <Collapse in={isCollapsed(move.type, childMoves)}>
                <div>
                  {
                    childMoves.map((childMove, i) => {
                      return (
                        <div key={i} className={classes.movePaletteButton}>
                          <Chip
                            variant={childMove.type === selectedMoveType ? 'default' : 'outlined'}
                            color="primary"
                            icon={childMove.getIcon(theme)}
                            label={childMove.name}
                            onClick={() => setMoveType(childMove.type)}
                          />
                        </div>
                      )
                    })
                  }
                </div>
              </Collapse>
            </div>
          )
        })
      }
    </div>
  )
}