import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import {
  makeStyles
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from 'react';
import { Switch, Route } from "react-router-dom";
import AddMovie from "./components/AddMovie";
import Watched from "./components/Watched";
import WatchList from "./components/WatchList";
import Box from "@material-ui/core/Box";


MovieFeature.propTypes = {

};

// const useStyles = makeStyles((theme) => ({
//   bgColor: {
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//   },
//   wrapPaper: {
//     display: "flex",
//     "& > *": {
//       margin: theme.spacing(1),
//       width: theme.spacing(16),
//       height: theme.spacing(16),
//     },
//   },
// }));

function MovieFeature(props) {
  // const classes = useStyles();
  return (
    <div>
      <Container maxWidth="md">
        <Box p="2rem">
          <Switch>
            <Route exact path="/">
              <WatchList />
            </Route>
            <Route path="/watched">
              <Watched />
            </Route>
            <Route path="/add">
              <AddMovie />
            </Route>
          </Switch>
        </Box>
      </Container>
    </div>
  );
}

export default MovieFeature;
