import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  container: {
    width: '60%',
    margin: '5rem auto',
  },
  cellHeader: {
    fontSize: 15,
    textTransform: 'uppercase',
  },
  cellContent: {
    fontSize: 13,
  },
});

export default function Index({ items }) {
  const headers = ['Time', 'Severity', 'Message'];
  const classes = useStyles();

  const DisplayCell = ({ classes, label }) => {
    return (
      <TableCell align="center" className={classes}>
        {label}
      </TableCell>
    );
  };

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} size="medium" aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((item, index) => (
              <DisplayCell
                classes={classes.cellHeader}
                label={item}
                key={index}
              />
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {items.map((row) => (
            <TableRow key={row.time}>
              <DisplayCell classes={classes.cellContent} label={row.time} />
              <DisplayCell classes={classes.cellContent} label={row.severity} />
              <DisplayCell classes={classes.cellContent} label={row.message} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
