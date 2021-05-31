import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import axiosClient from '../../../../api/axiosClient';
import MovieCard from '../../../../components/MovieCard';
import CustomPagination from '../../../../components/Pagination';
import './styles.scss';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  trending: {
    '& .MuiPaginationItem-root': {
      color: '#C2CFE0',
    },

  },
}));

TrendingPage.propTypes = {};

function TrendingPage(props) {
  const classes = useStyles();
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axiosClient.get(`trending/all/week?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`).then((res) => {
      setMovies(res.results);
    });
  }, [page]);

  return (
    <div className="trending">
      <Typography classes={{ trending: classes.h4 }} variant="h4" align="center" gutterBottom className="trending__title">
        TRENDING
      </Typography>
      <div className="trending__list">
        {movies &&
          movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
}

export default TrendingPage;
