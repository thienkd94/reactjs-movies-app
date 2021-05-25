import React, { useState } from 'react';
import MovieFeature from './features/Movies';
import Header from './components/Header';
import { Route, Switch } from "react-router-dom";
import WatchList from './features/Movies/pages/WatchList'
import Watched from './features/Movies/pages/Watched'

function App() {

  //   const [movies, setMovies] = useState([]);

  //   useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.themoviedb.org/3/search/movie?api_key=b3c1945e566d304541e10715aa84c29b&language=vi-VN&page=1&include_adult=false&query=star"
  //     )
  //     .then(function (response) {
  //       setMovies(response.data.results)
  //       console.log(response.data.results);
  //     });
  // }, []);

  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          {/* <WatchList /> */}
          <MovieFeature />
        </Route>
        <Route path="/watched">
          <Watched />
        </Route>
        {/* <Route path="/add">
              <AddMovie onChange={handleMovieFormChange} results={results}/>
            </Route> */}
      </Switch>
    </div>
  );
}

export default App;
