import React, { useState } from 'react';
import MovieFeature from './features/Movies';
import Navigation from './components/Navigation';

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
      <MovieFeature />
      <Navigation />
    </div>
  );
}

export default App;
