import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import React from "react";
import { Route, Switch } from "react-router-dom";
import AddMovie from "./pages/AddMovie";
import Watched from "./pages/Watched";
import WatchList from "./pages/WatchList";

MovieFeature.propTypes = {};


function MovieFeature(props) {

  const handleMovieFormSubmit = (value) => {
    console.log("MOVIE HOME: ", value);
  };

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
              <AddMovie onSubmit={handleMovieFormSubmit} />
            </Route>
          </Switch>
        </Box>
      </Container>
    </div>
  );
}

export default MovieFeature;
