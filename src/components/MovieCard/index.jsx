import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_IMAGE_URL } from '../../config/main';
import './styles.scss';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
});

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

function MovieCard(props) {
  const classes = useStyles();
  const { movie } = props;

  return (
    <div className="card">
      <div className="card__img">
        <img src={BASE_IMAGE_URL + movie.poster_path} alt={movie.title} />
      </div>
      <div className="card__content">
        <div className="card__info">
          <span className="card__category">{movie.media_type}</span>
          <span className="card__date">{movie.release_date || movie.first_air_date}</span>
        </div>
        <div className="card__title">{movie.title || movie.name}</div>
      </div>
      <div className="card__overlay">
        {movie.media_type === 'movie' ? (
          <Link to={`movie/${movie.id}`}>Detail</Link>
        ) : (
          <Link to={`tv/${movie.id}`}>Detail</Link>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
