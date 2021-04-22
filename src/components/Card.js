import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Link from '@material-ui/core/Link';

import { Typography, List, ListItem, Divider } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: '18rem',
  },
  btn: {
    marginLeft: '20px',
    marginBottom: '20px',
    textDecoration: 'none',
    backgroundColor: '#3F51B5',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
  },
});

export default function SimpleCard({
  name,
  summary,
  ceo,
  headquarters,
  employees,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <List
          component='nav'
          className={classes.root}
          aria-label='mailbox folders'
        >
          <ListItem button>
            <Typography variant='subtitle1'>Name : {name}</Typography>
          </ListItem>
          <Divider />

          <ListItem button divider>
            <Typography variant='subtitle1'>Summary : {summary}</Typography>
          </ListItem>

          <ListItem button>
            <Typography variant='subtitle1'>CEO : {ceo} </Typography>
          </ListItem>

          <Divider light />
          <ListItem button>
            <Typography variant='subtitle1'>
              Headquarters : {headquarters?.city}
            </Typography>
          </ListItem>
          <Divider light />
          <ListItem button>
            <Typography variant='subtitle1'>Employees : {employees}</Typography>
          </ListItem>
          <Divider light />
        </List>
      </CardContent>
      <CardActions>
        <Link
          href='https://www.spacex.com/'
          target='_blank'
          className={classes.btn}
        >
          SpaceX Website
        </Link>
      </CardActions>
    </Card>
  );
}
