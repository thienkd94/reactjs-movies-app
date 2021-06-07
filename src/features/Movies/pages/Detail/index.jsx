import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axiosClient from '../../../../api/axiosClient';
import MovieDetail from '../../../../components/MovieDetail';

Detail.propTypes = {};

function Detail(props) {
  let { id, type } = useParams();

  const [movie, setMovie] = useState({});
  const [video, setVideo] = useState({});

  const fetchMovieDetail = async () => {
    const movie = await axiosClient.get(`movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`);

    setMovie(movie);
  };

  const fetchMovieVideo = async () => {
    const video = await axiosClient.get(`movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}`);

    setVideo(video.results[0]);
  };

  useEffect(() => {
    // axiosClient.get(`movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`).then((res) => {
    //   setMovie(res);
    // });
    fetchMovieDetail();
    fetchMovieVideo();
  }, [id]);

  //  useEffect(() => {
  //    axiosClient.get(`movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}`).then((res) => {
  //     setVideo(res?.results[0]);
  //    });
  //  }, [id]);

  return (
    <div>
      <MovieDetail movie={movie} video={video} />
    </div>
  );
}

export default Detail;
