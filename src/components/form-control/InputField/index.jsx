import React from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";

InpuField.propTypes = {};

function InpuField(props) {
  return (
    <div>
      <TextField fullWidth label="Search for a movie" variant="outlined" />
    </div>
  );
}

export default InpuField;
