import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Route, Switch } from "react-router-dom";
import AddMovie from "./pages/AddMovie";
import Watched from "./pages/Watched";
import WatchList from "./pages/WatchList";
import axios from "axios";

MovieFeature.propTypes = {};


function MovieFeature(props) {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);

  const handleMovieFormChange = (value) => {
    console.log(value.keyword)
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=b3c1945e566d304541e10715aa84c29b&query=kombat`
      )
      .then((res) => {
        setResults(res.data.result);
      });
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
              <AddMovie onChange={handleMovieFormChange} results={results}/>
            </Route>
          </Switch>
        </Box>
      </Container>
    </div>
  );
}

export default MovieFeature;
