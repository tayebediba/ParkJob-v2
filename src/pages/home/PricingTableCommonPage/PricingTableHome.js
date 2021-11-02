import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import Layout from "../../../Layout/Layout";
import "./pricingTableHome.css";

const PricingTableHome = (props) => {
  const [payment, setPayment] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setPayment(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Layout>
      <Paper elevation={3} className="urlPage">
        پارک جاب/ طرح های عضویت / ارتقا عضویت
      </Paper>
      <Grid container md={12} xs={12}>
        <Paper style={{ borderRadius: "1rem", margin: "1rem", width: "100%" }}>
          <Typography style={{ textAlign: "center", marginTop: "2rem" }}>
            موجودی حساب شما300,000ریال کمتر از مبلغ ارتقا حساب کاربری می باشد.
            <br />
            پس از واریز ,حساب کاربری شما ارتقا داده می شود.
          </Typography>
          <Grid container xs={12}>
            <Grid
              container
              item
              xs={12}
              md={5}
              style={{ margin: "2rem", padding: "2rem" }}
            >
              {" "}
              <form
                className="form-pricing"
                noValidate
                autoComplete="off"
                style={{ display: "flex" }}
              >
                <TextField
                  id="outlined-basic"
                  label="کد تخفیف"
                  variant="outlined"
                  style={{ width: "70%" }}
                />
                <Button
                  className="actions-btn"
                  variant="contained"
                  color="primary"
                  disableElevation
                  type="submit"
                >
                  اعمال کد
                </Button>
              </form>
              <FormControl className="form-control">
                <InputLabel id="demo-controlled-open-select-label">
                  درگاه پرداخت
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={payment}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>صادرات</MenuItem>
                  <MenuItem value={2}>تجارت</MenuItem>
                  <MenuItem value={3}>ملت</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid container item md={6} xs={12}>
              <Card className="payment-report">
                <CardContent>
                  <h3>گزارش پرداخت</h3>
                  <div className="balance">
                    <span style={{ color: "#909599" }}>موجودی حساب</span>
                    <span>200,000ریال</span>
                  </div>
                  <div className="balance">
                    <span style={{ color: "#909599" }}>پلن نقره ای</span>
                    <span>500,000ریال</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "1rem",
                    }}
                  >
                    <h2>مبلغ قابل پرداخت</h2>{" "}
                    <span style={{ fontWeight: "bold", paddingTop: "1.5rem" }}>
                      300,000ریال
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <div className="box-btn">
              {" "}
              <Link
                style={{ textDecoration: "none", color: "#000 " }}
                to="/PricingTableCommonPage"
              >
                <Button variant="contained" className="back-btn">
                  بازگشت
                </Button>
              </Link>
              <Button variant="contained" className="payment-btn">
                پرداخت
              </Button>
            </div>
          </Grid>
        </Paper>
      </Grid>
    </Layout>
  );
};

export default PricingTableHome;
