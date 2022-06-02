import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import Home from './pages/Home/Home';
import Play from './pages/Play/Play';
import TileCreator from './pages/TileCreator/TileCreator';
import BagBuilder from './pages/BagBuilder/BagBuilder';
import TopNav from './components/TopNav';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
}

export default () => (
  <Router basename='/the_duchess_boardgame'>
    <TopNav />
    <Route
      render={({ location }) => (
        <AnimatePresence exitBeforeEnter initial={true}>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={
              () => (
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                >
                  <Home />
                </motion.div>
                )
            } />
            <Route path="/play" component={
              () => (
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                >
                  <Play />
                </motion.div>
                )
            } />
            <Route path="/create" component={
              () => (
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                >
                  <TileCreator />
                </motion.div>
                )
            } />
            <Route path="/build" component={
              () => (
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                >
                  <BagBuilder />
                </motion.div>
                )
            } />
          </Switch>
        </AnimatePresence>
      )}
    />
  </Router>
)
