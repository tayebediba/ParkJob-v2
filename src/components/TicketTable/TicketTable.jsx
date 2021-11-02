import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import {
  FiberManualRecordRounded,
} from "@material-ui/icons";
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

function TicketTable({ data }) {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table aria-label="caption table" className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontFamily: "Dana" }}>موضوع</TableCell>
            <TableCell style={{ fontFamily: "Dana" }} align="center">
              تاریخ
            </TableCell>
            <TableCell style={{ fontFamily: "Dana" }} align="center">
              وضعیت تیکت
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => {
            const subject = row.subject.substring(0, 15);
            const date = row.insertDate.substring(0, 10);
            return (
              <TableRow key={index + 1} className={classes.rows} hover>
                <TableCell style={{ fontFamily: "Dana" }} align="center">
                  {subject}...
                </TableCell>
                <TableCell>{date} </TableCell>
                <TableCell component="th" scope="row">
                  <div
                    className={`ticket ${
                      row.status === 1
                        ? "ticket-green"
                        : row.status === 2
                        ? " ticket-orange"
                        : "ticket-red"
                    } ticketBox`}
                  >
                    <FiberManualRecordRounded />
                    <span style={{fontSize:"0.7rem"}}>
                      {row.status === 1
                        ? "باز"
                        : row.status === 2
                        ? "در حال بررسی"
                        : "بسته"}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TicketTable;
