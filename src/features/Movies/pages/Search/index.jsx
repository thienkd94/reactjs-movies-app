import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

SearchPage.propTypes = {};

function SearchPage(props) {
  const [keyword, setKeyword] = useState('');

  const handleInputChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <div>
      <TextField onChange={(e) => handleInputChange(e)} fullWidth label="Search" variant="outlined" />
    </div>
  );
}

export default SearchPage;
