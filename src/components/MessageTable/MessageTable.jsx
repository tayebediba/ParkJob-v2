import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  table: {
    fontFamily: "Dana",
  },
  rows: {
    border: "none",
    cursor: "pointer",
  },
});

function MessageTable({ data }) {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table aria-label="caption table" className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontFamily: "Dana" }}>فرستنده</TableCell>
            <TableCell style={{ fontFamily: "Dana" }} align="center">
              موضوع
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => {
              const message = row.messageSummary.substring(0,20)
            return (
              <TableRow key={index + 1} className={classes.rows} hover>
                <TableCell component="th" scope="row">
                  <img src={row.avatarPath} alt="PIC" /> {row.sender}
                </TableCell>
                <TableCell style={{ fontFamily: "Dana" }} align="center">
                  {message}...
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MessageTable;
