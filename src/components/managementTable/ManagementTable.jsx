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
import {EditOutlined, DeleteOutlineOutlined} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import http from '../../services/httpService'

const useStyles = makeStyles({
  table: {
    fontFamily: "Dana",
  },
  rows: {
    border: "none",
    cursor: "pointer",
  },
});

function ManagementTable() {
  const [Activitys , setActivitys] = useState([])
  useEffect(()=>{
    http.get('/Activity/ActivityList')
    .then(res=>{
      console.log(res.data.value);
      setActivitys(res.data.value.projects);
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
                بودجه پیشنهادی(ریال)
              </TableCell>
              <TableCell style={{ fontFamily: "Dana" }} align="center">
                مدت ارسال پیشنهاد
              </TableCell>
              <TableCell style={{ fontFamily: "Dana" }} align="center">
                پیشنهاد های ثبت شده
              </TableCell>
              <TableCell
                style={{ fontFamily: "Dana" }}
                align="center"
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tbody">
            {Activitys.map((item) => {
              const TimeGetOffer = new Date(item.canGetOffer).toLocaleString("fa-IR").substring(0,9)
              console.log(TimeGetOffer)
              return (
                <TableRow key={item.offerId} className={classes.rows} hover>
                  <TableCell component="th" scope="row">
                    {item.title}
                  </TableCell>
                  <TableCell style={{ fontFamily: "Dana" }} align="center">
                    {item.price}
                  </TableCell>
                  <TableCell style={{ fontFamily: "Dana" }} align="center">
                  {TimeGetOffer}
                  </TableCell>
                  <TableCell style={{ fontFamily: "Dana" }} align="center">
                    {item.offersCount}
                  </TableCell>
                  <TableCell style={{ fontFamily: "Dana" }} align="center">
                    <Tooltip title="ویرایش" placement="top">
                      <EditOutlined />
                    </Tooltip>{" "}
                    <Tooltip title="حذف" placement="top">
                      <DeleteOutlineOutlined />
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

export default ManagementTable;
