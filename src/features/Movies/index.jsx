import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import TrendingPage from './pages/Trending';
import MoviesPage from './pages/Movies';
import TvSeriesPage from './pages/TvSeries';
import SearchPage from './pages/Search';
import Container from '@material-ui/core/Container';
import './styles.scss';
import Detail from './pages/Detail';

MovieFeature.propTypes = {};

function MovieFeature(props) {
  return (
    <div>
      <Container maxWidth="lg">
        <Switch>
          <Route exact path="/" component={TrendingPage} />
          <Route path="/movies" component={MoviesPage} />
          <Route path="/tv-series" component={TvSeriesPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/:type/:id" component={Detail} />
        </Switch>
      </Container>
    </div>
  );
}

export default MovieFeature;
