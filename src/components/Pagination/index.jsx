import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';
import queryString from 'query-string';
import { useHistory, useRouteMatch } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  ul: {
    '& .MuiPaginationItem-root': {
      color: '#C2CFE0',
    },
    '& .Mui-selected': {
      color: '#E29E21',
      border: '1px solid #E29E21'
    }
  },
}));


CustomPagination.propTypes = {
  setPage: PropTypes.func.isRequired,
};

function CustomPagination(props) {
  const history = useHistory();
  const match = useRouteMatch();
  const { setPage } = props;
  const classes = useStyles();

  const handlePageChange = (e, value) => {
    setPage(value);
    window.scroll(0, 0);
    const queryParams = {page: value}
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  return (
    <div className="pagination">
      <Pagination
        classes={{ ul: classes.ul }}
        count={10}
        variant="outlined"
        onChange={handlePageChange}
      />
    </div>
  );
}

export default CustomPagination;
