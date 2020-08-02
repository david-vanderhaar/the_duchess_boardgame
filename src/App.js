import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import Home from './pages/Home';
import Play from './pages/Play';
import TileCreator from './pages/TileCreator';
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
  <Router>
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
          </Switch>
        </AnimatePresence>
      )}
    />
  </Router>
)
