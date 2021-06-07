import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import axiosClient from '../../../../api/axiosClient';
import MovieCard from '../../../../components/MovieCard';
import CustomPagination from '../../../../components/Pagination';
import './styles.scss';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  tv: {
    '& .MuiPaginationItem-root': {
      color: '#C2CFE0',
    },
  },
}));

TvSeriesPage.propTypes = {};

function TvSeriesPage(props) {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [tvs, setTvs] = useState([]);

  const fetchTvData = async () => {
    const tvs = await axiosClient.get(
      `discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );

    setTvs(tvs.results);
  };

  useEffect(() => {
    fetchTvData();
    // axiosClient.get(`movie/all/week?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`).then((res) => {
    //   setMovies(res.results);
    // });
  }, [page]);

  return (
    <div className="movie">
      <Typography classes={{ tv: classes.h4 }} variant="h4" align="center" gutterBottom className="movie__title">
        TV SERIES
      </Typography>
      <div className="movie__list">
        {tvs &&
          tvs.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
}

export default TvSeriesPage;
