import React, {useState} from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import Links from '../../components/Links';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
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
}));

function GridSquare(props) {
  const classes = useStyles();
  return (
    <div className={classes.gridSquare}>
      <div>{`${props.x},${props.y}`}</div>
      <div>{props.type}</div>
    </div>
  );
}

function Grid(props) {
  const classes = useStyles();
  const {height, width, moves} = props;
  return (
    <div className={classes.tileGrid}>
      {
        Array(height).fill(null).map((item, y) => (
          <div key={y} className={classes.gridRow}>
            {Array(width).fill(null).map((item, x) => {
              const movesAtXY = moves.filter((move) => move.x === x && move.y === y);
              const type = movesAtXY.length ? movesAtXY[0].type : null
              return <GridSquare key={x} x={x} y={y} type={type}/>
            })}
          </div>
        ))
      }
    </div>
  );
}

function TileCreator() {
  const classes = useStyles();
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
          }
        ],
      },
      // side 2
      {
        moves: [
          {
            x: 2,
            y: 3,
            type: 'm'
          }
        ],
      },
    ],
  }
  return (
    <div className={classes.root}>
      <h1>Tile Creator</h1>
      <div className={classes.tileContainer}>
        <div className={classes.tileLeft}>
          {/* <Grid height={tileData.height} width={tileData.width}/> */}
          <Grid moves={tileData.sides[side].moves} {...tileData}/>
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
      <Button 
        variant="contained" 
        color='primary' 
        onClick={flipTile}
      >
        Flip to side {1 - side + 1}
      </Button>
    </div>
  );
}

export default TileCreator;
