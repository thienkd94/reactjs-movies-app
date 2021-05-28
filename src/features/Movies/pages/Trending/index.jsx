import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axiosClient from '../../../../api/axiosClient';
import MovieCard from '../../../../components/MovieCard';
import { Typography } from '@material-ui/core';
import './styles.scss'

TrendingPage.propTypes = {};

function TrendingPage(props) {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    axiosClient.get(`trending/all/week?api_key=${process.env.REACT_APP_TMDB_KEY}`).then((res) => {
      setContents(res.results);
      console.log(res.results)
    });
  }, []);

  return (
    <div className="trending">
      <Typography variant="h4" align="center" color="primary" gutterBottom>
        TRENDING
      </Typography>
      <div className="trending__list">
        {contents &&
          contents.map((item) => {
            return <MovieCard movie={item} />;
          })}
      </div>
    </div>
  );
}

export default TrendingPage;
