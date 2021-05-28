import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { BASE_IMAGE_URL } from '../../config/main';

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
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image={BASE_IMAGE_URL + movie.poster_path}
          title={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h5">
            {movie.title || movie.name}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
            except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography variant="overline">{movie.media_type}</Typography>
        <Typography variant="overline">{movie.release_date}</Typography>
      </CardActions>
    </Card>
  );
}

export default MovieCard;
