import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useQuery } from '@apollo/client';
import { launchesQuery } from '../graphql-queries/queries';
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
  tableData: {
    marginBottom: '20px',
  },
});

export default function Launches() {
  const [launches, setLaunches] = useState([]);
  const { data, loading } = useQuery(launchesQuery);
  const classes = useStyles();

  useEffect(() => {
    if (data) {
      setLaunches(data.launchesPastResult.data);
    }
  }, [data]);
  console.log(launches);

  if (loading) {
    return <Loading />;
  }

  const columns = [
    {
      field: 'id',
      headerName: 'id',
      width: 100,
      hide: true,
    },
    {
      field: 'launch_date_utc',
      headerName: 'Launch Date',
      width: 300,
      valueFormatter: (params) => params.row?.launch_date_utc,
    },
    { field: 'mission_name', headerName: 'Mission Name', width: 300 },
    {
      field: 'launch_site',
      headerName: 'Launch Site',
      width: 300,
      valueFormatter: (params) => params.row?.launch_site?.site_name,
    },
    {
      field: 'rocket',
      headerName: 'Rocket',
      width: 200,
      valueFormatter: (params) => params.row?.rocket?.rocket_name,
    },
    {
      field: 'launch_success',
      headerName: 'Launch Success',
      width: 200,
      valueFormatter: (params) =>
        params.row?.launch_success ? 'Successful' : 'Unsuccessful',
    },
  ];

  return (
    <div className={classes.grid}>
      <Typography variant='h5' className={classes.title}>
        Launches Details
      </Typography>
      <DataGrid rows={launches} columns={columns} pageSize={10} autoHeight />
    </div>
  );
}
