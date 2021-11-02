import React from "react";
import classes from "./newprojecttable.module.css";
import {
  makeStyles,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    fontFamily: "Dana",
  },
  rows: {
    border: "none",
    cursor: "pointer",
  },
});

function NewProjectTable({ data }) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableCell}>
      <Table
        className={classes.tableCell}
        aria-label="caption table"
        className={classes.table}
      >
        <TableHead>
          <TableRow>
            <TableCell style={{ fontFamily: "Dana" }}>موضوع</TableCell>
            <TableCell
              id={classes.textTable}
              style={{ fontFamily: "Dana" }}
              align="center"
            >
              دسته بندی
            </TableCell>
            <TableCell
              id={classes.textTable}
              style={{ fontFamily: "Dana" }}
              align="center"
            >
              بودچه پروژه (ریال)
            </TableCell>
            <TableCell
              id={classes.textTable}
              style={{ fontFamily: "Dana" }}
              align="center"
            >
              مدت ارسال پیشنهاد
            </TableCell>
            <TableCell
              id={classes.textTable}
              style={{ fontFamily: "Dana" }}
              align="center"
            >
              پیشنهادهای ثبت شده
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index + 1} className={classes.rows} hover>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell style={{ fontFamily: "Dana" }} align="center">
                {row.categoryTitle}
              </TableCell>
              <TableCell style={{ fontFamily: "Dana" }} align="center">
                {row.budjectStart}
              </TableCell>
              <TableCell style={{ fontFamily: "Dana" }} align="center">
                {row.budjectEnd}
              </TableCell>
              <TableCell style={{ fontFamily: "Dana" }} align="center">
                {row.offersCount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default NewProjectTable;
