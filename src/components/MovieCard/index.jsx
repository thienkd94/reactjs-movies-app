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
  const { movie } = props;

  return (
    <div className="card">
      <Link to={movie.media_type === 'movie' ? `/movie/${movie.id}` : `/tv/${movie.id}`} className="card__link">
        <div className="card__img">
          <img
            src={movie.poster_path ? BASE_IMAGE_URL + movie.poster_path : 'https://www.movienewz.com/img/films/poster-holder.jpg'}
            alt={movie.title}
          />
        </div>
        <div className="card__content">
          <div className="card__info">
            <span className="card__category">{movie.media_type ? movie.media_type : 'TV'}</span>
            <span className="card__date">{movie.release_date || movie.first_air_date}</span>
          </div>
          <div className="card__title">{movie.title || movie.name}</div>
        </div>
        {/* <div className="card__overlay"></div> */}
      </Link>
    </div>
  );
}

export default MovieCard;
