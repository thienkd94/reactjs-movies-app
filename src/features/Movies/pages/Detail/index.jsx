import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MovieDetail from '../../../../components/MovieDetail';
import { useParams } from 'react-router';
import axiosClient from '../../../../api/axiosClient';

Detail.propTypes = {};

function Detail(props) {
  let { id, type } = useParams();

  const [result, setResult] = useState({});

  const fetchData = async () => {
    const data = await axiosClient.get(`movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`);

    // const video = await axiosClient.get(`movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}`);

    // console.log("DATA",data)
    // console.log("video",video)

    setResult(data)
  }

  useEffect(() => {
    // axiosClient.get(`movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`).then((res) => {
    //   setResult(res);
    // });
    fetchData();
  }, []);

  return (
    <div>
      <MovieDetail result={result} />
    </div>
  );
}

export default Detail;
