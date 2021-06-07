import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { BASE_IMAGE_URL } from '../../config/main';
import './styles.scss';
import Button from '@material-ui/core/Button';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Dialog from '@material-ui/core/Dialog';
import { DialogActions, DialogContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

MovieDetail.propTypes = {
  movie: PropTypes.object.isRequired,
  video: PropTypes.object.isRequired,
};

function MovieDetail(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { movie, video } = props;

  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };


  return (
    <div className="detail">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <Image
              src={`${BASE_IMAGE_URL}${movie?.poster_path}`}
              animationDuration={500}
              // imageStyle={{ height: 'auto' }}
              aspectRatio={0.7}
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Typography variant="h4" gutterBottom>
              {movie.title || movie.name}
            </Typography>
            <Divider />
            <Grid>
            <Typography variant="body1" gutterBottom>
                {/* Genre: {movie?.genres.map(genre => {
                  return {genre.id}
              })} */}
            </Typography>
          </Grid>
            <Grid>
              <Typography variant="body1" gutterBottom>
                Runtime: {movie.runtime} minutes
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="body1" gutterBottom>
                Release date: {movie.release_date}
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="body1" gutterBottom>
                Overview: {movie.overview}
              </Typography>
            </Grid>
            <Grid>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                className={classes.button}
                startIcon={<PlayCircleOutlineIcon />}
                onClick={openDialog}
              >
                WATCH THE TRAILER
              </Button>
              <Dialog fullWidth={true} maxWidth="md" open={open} aria-labelledby="max-width-dialog-title">
                <DialogContent>
                  <iframe
                    width="100%"
                    height="500"
                    src={`https://www.youtube.com/embed/${video?.key}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </DialogContent>
                <DialogActions>
                  <Button onClick={closeDialog} color="primary">
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default MovieDetail;
