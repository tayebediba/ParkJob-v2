import {
  LinearProgress,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import React, { useEffect, useState } from "react";
import http from '../../services/httpService'
import Avatar from "../../assets/img/avatar.jpg";
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
    justifyContent: "dlex-start",
    alignContent: "center",
    alignItems: "center",
  },
});

function InProgress() {
  const [Activitys , setActivitys] = useState([])
  useEffect(()=>{
    http.get('/Activity/ActivityList')
    .then(res=>{
      console.log(res.data.value);
      setActivitys(res.data.value.offers);
    })
  },[])
  const classes = useStyles();

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
                فریلنسر
              </TableCell>
              <TableCell style={{ fontFamily: "Dana" }} align="center">
                تاریخ تحویل پروژه
              </TableCell>
              <TableCell style={{ fontFamily: "Dana" }} align="center">
                میزان پیشرفت
              </TableCell>
              <TableCell
                style={{ fontFamily: "Dana" }}
                align="center"
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tbody">
            {Activitys.map((item) => {
              const TimeDelivery = new Date(item.deliveryTime).toLocaleString("fa-IR").substring(0,9)
              return (
                <TableRow key={item.id} className={classes.rows} hover>
                  <TableCell component="th" scope="row">
                    {item.title}
                  </TableCell>
                  <TableCell
                    style={{ fontFamily: "Dana" }}
                    align="center"
                    className={classes.freelancer}
                  >
                    <img
                      src={Avatar}
                      alt={item.freelancer}
                      className="inProgressPic"
                    />
                    {item.freelancerName}
                  </TableCell>
                  <TableCell style={{ fontFamily: "Dana" }} align="center">
                    {TimeDelivery}
                  </TableCell>
                  <TableCell style={{ fontFamily: "Dana" }} align="center">
                    <span style={{ width: "20%" }}>٪{item.Progressbar} </span>
                    <span style={{ width: "80%" }} className="progresBar">
                      <LinearProgress
                        color="secondary"
                        variant="buffer"
                        value={item.Progressbar}  
                      />
                    </span>
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

export default InProgress;
