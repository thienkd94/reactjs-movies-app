import PropTypes from "prop-types";
import React from "react";
import MovieForm from "../../components/MovieForm";

AddMovie.propTypes = {
  onChange: PropTypes.func,
  results: PropTypes.array,
};

function AddMovie(props) {
  const { onChange, results } = props;

  console.log(results)

  return (
    <div>
      <MovieForm onChange={onChange} />
      <ul>

      </ul>
    </div>
  );
}

export default AddMovie;
