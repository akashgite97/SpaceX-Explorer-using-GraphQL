import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  notfound: {
    marginTop: '20px',
    textAlign: 'center',
  },
});

const PageNotFound = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant='h4' className={classes.notfound}>
        404 Page Not Found
      </Typography>
    </div>
  );
};

export default PageNotFound;
