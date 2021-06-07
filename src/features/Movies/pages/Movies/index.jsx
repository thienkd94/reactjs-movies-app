import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import axiosClient from '../../../../api/axiosClient';
import MovieCard from '../../../../components/MovieCard';
import CustomPagination from '../../../../components/Pagination';
import './styles.scss';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  movie: {
    '& .MuiPaginationItem-root': {
      color: '#C2CFE0',
    },
  },
}));

MoviePage.propTypes = {};

function MoviePage(props) {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const fetchMoviesData = async () => {
    const movies = await axiosClient.get(
      `discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);

    setMovies(movies.results)
  }

  useEffect(() => {
    fetchMoviesData();
    // axiosClient.get(`movie/all/week?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`).then((res) => {
    //   setMovies(res.results);
    // });
  }, [page]);

  return (
    <div className="movie">
      <Typography
        classes={{ movie: classes.h4 }}
        variant="h4"
        align="center"
        gutterBottom
        className="movie__title"
      >
        MOVIES
      </Typography>
      <div className="movie__list">
        {movies &&
          movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
}

export default MoviePage;
