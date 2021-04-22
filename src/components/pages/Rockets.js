import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useQuery } from '@apollo/client';
import { rocketsQuery } from '../graphql-queries/queries';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Loading from '../Loader';

const useStyles = makeStyles({
  root: {
    minWidth: '18rem',
  },
  grid: {
    height: 400,
    width: '100%',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    margin: '20px 0px',
  },
});

export default function Rockets() {
  const [rockets, setRockets] = useState([]);
  const { data, loading } = useQuery(rocketsQuery);
  const classes = useStyles();

  useEffect(() => {
    if (data) {
      setRockets(data.rockets);
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  const columns = [
    {
      field: 'id',
      headerName: 'id',
      hide: true,
    },
    { field: 'name', headerName: 'Name', width: 200 },
    {
      field: 'mass',
      headerName: 'Mass(kg)',
      width: 200,
      valueFormatter: (params) => params.row?.mass?.kg,
    },
    {
      field: 'cost_per_launch',
      headerName: 'Cost/Launch',
      width: 250,
    },
    { field: 'stages', headerName: 'Stages', width: 173 },
    {
      field: 'success_rate_pct',
      headerName: 'Success Rate',
      width: 250,
    },
    {
      field: 'active',
      headerName: 'Status',
      width: 250,
      valueFormatter: (params) => (params.row?.active ? 'active' : 'inactive'),
    },
  ];

  return (
    <div className={classes.grid}>
      <Typography variant='h5' className={classes.title}>
        Rocket Details
      </Typography>

      <DataGrid
        rows={rockets}
        columns={columns}
        className={classes.tableData}
      />
    </div>
  );
}
