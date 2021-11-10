import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";

const PaymentOne = () => {
  return (
    <Grid container direction="column" alignContent="center">
      <Grid item>
        <Typography style={{ textAlign: "center" }}>
          <p>
            لطفا شماره شبا متعلق به حساب خودتان را وارد کنید.اگر این نکته را در
            نظر نگیرید
          </p>
          <p> ممکن است پارک جاب حساب کاربری شمارا مسدود کند.</p>
        </Typography>
      </Grid>
      <Grid item>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            height: "20rem",
          }}
        >
          <TextField
            style={{ direction: "ltr", width: "100%" }}
            id="outlined-start-adornment"
            defaultValue="IR "
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            style={{ width: "8rem", alignSelf: "center", margin: "1rem" }}
          >
            ذخیره
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};
export default PaymentOne;
