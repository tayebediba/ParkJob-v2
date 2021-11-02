import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import authLayoutImg from "../../../assets/img/In the office-rafiki.svg";
import "./authLayout.css";

const AuthLayout = ({ children }) => {
  return (
    <Grid container item xs={12} direction="row" className="containerLogin">
      <Grid className="card" item md={6} xs={12}>
        {children}
      </Grid>

      <Grid item md={6} xs={12} className="imageBox">
        <Link className="btn-Back" to="/">
          بازگشت به صفحه اصلی
        </Link>
        <img className="img" src={authLayoutImg} alt="poonisha" />
      </Grid>
    </Grid>
  );
};
export default AuthLayout;
