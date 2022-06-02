import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AddBoxIcon from '@material-ui/icons/AddBox';
import LocalMallIcon from '@material-ui/icons/LocalMall';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));



export default function ButtonAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const preventDefault = (event) => event.preventDefault();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={!open ? classes.menuButton : classes.hide}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link href="/the_duchess_boardgame" color="inherit" underline='none'>
              The Duchess
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link href="/the_duchess_boardgame" color="inherit" underline='none' >
            <ListItem button>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItem>
          </Link>
          <Link href="/the_duchess_boardgame/#/play" color="inherit" underline='none' >
            <ListItem button>
              <ListItemIcon><SportsEsportsIcon /></ListItemIcon>
              <ListItemText primary={'Play'} />
            </ListItem>
          </Link>
          <Link href="/the_duchess_boardgame/#/create" color="inherit" underline='none' >
            <ListItem button>
              <ListItemIcon><AddBoxIcon /></ListItemIcon>
              <ListItemText primary={'Tile Creator'} />
            </ListItem>
          </Link>
          <Link href="/the_duchess_boardgame/#/build" color="inherit" underline='none' >
            <ListItem button>
              <ListItemIcon><LocalMallIcon /></ListItemIcon>
              <ListItemText primary={'Bag Builder'} />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
}