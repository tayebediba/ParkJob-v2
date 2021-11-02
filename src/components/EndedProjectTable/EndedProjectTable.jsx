import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@material-ui/core";
import { isEmpty } from "lodash-es";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import React, { useEffect, useState } from "react";
import http from "../../services/httpService";
import Avatar from "../../assets/img/avatar.jpg";
import { fetchUserProjectData } from "../../services/dashboard/dashboard";

const useStyles = makeStyles({
  table: {
    fontFamily: "Dana",
  },
  rows: {
    border: "none",
    cursor: "pointer",
  },
  freelancer: {
    display: "flex",
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
  },
});

function EndedProjectTable() {
  const classes = useStyles();
  const [Activitys, setActivitys] = useState([]);
  const [userProjectData, setUserProjectData] = useState([]);
  useEffect(() => {
    http.get("/Activity/ActivityList").then((res) => {
      console.log(res.data.value);
      setActivitys(res.data.value.offers);
    });
  }, []);

  // isEmpty()

  useEffect(() => {
    fetchUserProjectData().then((res) => {
      setUserProjectData(res);
    });
  }, []);

  console.log(userProjectData);

  return (
    <div>
      <TableContainer>
        <Table aria-label="caption table" className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontFamily: "Dana" }} align="left">
                عنوان پروژه
              </TableCell>
              <TableCell style={{ fontFamily: "Dana" }} align="center">
                تاریخ ثبت پروژه
              </TableCell>
              <TableCell style={{ fontFamily: "Dana" }} align="center">
                تاریخ تحویل پروژه
              </TableCell>
              <TableCell style={{ fontFamily: "Dana" }} align="center">
                فریلنسر
              </TableCell>
              <TableCell
                style={{ fontFamily: "Dana" }}
                align="center"
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tbody">
            {Activitys.map((item) => {
              const startTime = new Date(item.acceptDate)
                .toLocaleString("fa-IR")
                .substring(0, 9);
              const endTime = new Date(item.completeDate)
                .toLocaleString("fa-IR")
                .substring(0, 9);

              return (
                <TableRow key={item.id} className={classes.rows} hover>
                  <TableCell component="th" scope="row">
                    {item.title}
                  </TableCell>
                  <TableCell style={{ fontFamily: "Dana" }} align="center">
                    {startTime}
                  </TableCell>
                  <TableCell style={{ fontFamily: "Dana" }} align="center">
                    {endTime}
                  </TableCell>
                  <TableCell
                    style={{ fontFamily: "Dana" }}
                    align="center"
                    className={classes.freelancer}
                  >
                    <img
                      src={Avatar}
                      alt={item.freelancerName}
                      className="inProgressPic"
                    />{" "}
                    {item.freelancerName}
                  </TableCell>
                  <TableCell style={{ fontFamily: "Dana" }} align="center">
                    <Tooltip title="اطلاعات بیشتر" placement="top">
                      <ArrowBackIosIcon />
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default EndedProjectTable;
