import PropTypes from "prop-types";
import React from "react";
import MovieForm from "../../components/MovieForm";

AddMovie.propTypes = {
  onSubmit: PropTypes.func,
};

function AddMovie(props) {
  const { onSubmit } = props;

  return (
    <div>
      <MovieForm onSubmit={onSubmit} />
    </div>
  );
}

export default AddMovie;
