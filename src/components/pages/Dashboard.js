import React, { useState, useEffect } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Card from '../Card';
import { useQuery } from '@apollo/client';

import { companyQuery } from '../graphql-queries/queries';
import Loading from '../Loader';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: 'red',
    marginTop: theme.spacing(2),
    color: 'white',
    textAlign: 'center',
    height: theme.spacing(4),
  },
  cardData: {
    margin: 'auto',
  },
  card: {
    marginTop: '20px',
  },
}));

const Dashboard = () => {
  const [companyData, setCompanyData] = useState([]);
  const { data, loading } = useQuery(companyQuery);

  useEffect(() => {
    if (data) {
      setCompanyData(data.company);
    }
  }, [data]);

  const { name, summary, ceo, headquarters, employees } = companyData;
  const classes = useStyles();

  if (loading) {
    return <Loading />;
  }

  return (
    <Grid container spacing={4} className={classes.card}>
      <Grid item sm={12} md={10} className={classes.cardData}>
        <Card
          name={name}
          summary={summary}
          ceo={ceo}
          employees={employees}
          headquarters={headquarters}
        />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
