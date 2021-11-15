import { Card, CardContent, Grid } from "@material-ui/core";
import React from "react";

const PaymentTwo = () => {
  return (
    <Grid Container justifyContent="space-around">
      <form>
        <Grid item xs={12}>
          <Card style={{ background: "#002E6E", borderRadius: "1rem" }}>
            <CardContent>
              <h5 style={{ color: "#fff", textAlign: "center" }}>
                موجودی کیف پول
              </h5>
              <h1 style={{ color: "#FFCB05" }}>50,000,000 تومان</h1>
              <h4
                style={{
                  color: "#fff",
                  textAlign: "center",
                  marginTop: "2rem",
                }}
              >
                تاریخ آخرین شارژ:4تیر ماه 1400
              </h4>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}></Grid>
      </form>
    </Grid>
  );
};
export default PaymentTwo;
