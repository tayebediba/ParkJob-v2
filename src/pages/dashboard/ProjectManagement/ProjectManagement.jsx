import {
  Button,
  Paper,
  Input,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React, { useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { scrollHandler } from "../../../helper/general";
import manageProjectRouts from "../../../Routes/ManageProjectRouts";
import "./style.css";

const ProjectManagement = (props) => {
  useEffect(() => {
    scrollHandler(0, 0);
  }, []);
  return (
    <div>
      <h3 style={{ paddingBottom: "2rem", margin: "0" }}>مدیریت پروژه ها</h3>
      <div style={{ width: "100%", marginTop: 20 }}>
        <Paper
          style={{
            padding: 25,
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div>
            <Link to={props.match.url + ""} style={{ textDecoration: "none" }}>
              <Button
                style={{ padding: "10px 25px" }}
                className="activeManagementBtn"
              >
                پیشنهاد های فعال
              </Button>
            </Link>
            <Link
              to={props.match.url + "/inprogress"}
              style={{ textDecoration: "none" }}
            >
              <Button style={{ padding: "10px 25px" }} className="">
                در حال اجرا
              </Button>
            </Link>
            <Link
              to={props.match.url + "/ended"}
              style={{ textDecoration: "none" }}
            >
              <Button style={{ padding: "10px 25px" }} className="">
                پایان یافته
              </Button>
            </Link>
          </div>
          <div>
            <Input
              className="input_style"
              required
              disableUnderline={true}
              placeholder="جستجوی عنوان ..."
              style={{ height: "2.5rem", backgroundColor: "#F0F1F3" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <Search color="primary" />
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div style={{ width: "100%" }} id="divTable">
            {manageProjectRouts.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.path}
                  exact={item.exact}
                  render={(props) => <item.Component {...props} />}
                />
              );
            })}
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default ProjectManagement;
