import {
  Backdrop,
  Button,
  Card,
  CardContent,
  Fade,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  Switch,
  TextField,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./pricingTable.css";

function PricingTable(props) {
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
    <div>
      <h3 style={{ paddingBottom: "2rem", margin: "0" }}>ارتقا عضویت</h3>

      <Grid container xs={12}>
        <Typography style={{ textAlign: "center", marginTop: "2rem" }}>
          موجودی حساب شما300,000ریال کمتر از مبلغ ارتقا حساب کاربری می باشد.
          <br />
          پس از واریز ,حساب کاربری شما ارتقا داده می شود.
        </Typography>
        <Grid container xs={12}>
          <Grid
            container
            item
            md={5}
            xs={12}
            style={{ margin: "1rem", padding: "2rem" }}
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
              to="/dashboard/MembershipUpgrade"
            >
              <Button variant="contained" className="back-btn">
                بازگشت
              </Button>
            </Link>
            <Button
              variant="contained"
              onClick={handleOpen}
              className="payment-btn"
            >
              پرداخت
            </Button>
          </div>
        </Grid>
      </Grid>
      <Modal
        aria-labelledby="freelancerRate-reportModal"
        aria-describedby="transition-modal-description"
        open={open}
        className="modalPay"
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="paperPay">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2 id="transition-modal-title">موجودی کافی نیست</h2>

              <Close
                onClick={handleOpen}
                style={{
                  position: "relative",
                  top: "0.7rem",
                  cursor: "pointer",
                }}
              />
            </div>
            <h3 id="transition-modal-title">موجودی کافی نیست</h3>
            {/* <div>
              <div style={{ position: "relative", top: "1.8rem" }}>
                {" "}
                <span className="spanUserName">نام کاربری</span>
              </div>
              <div className="divFormRoot">
                <div className="divForm">
                  <div>
                    <input type="password" value="0000000000" />
                  </div>
                  <div>
                    <FormControlLabel
                      control={
                        <Switch
                      
                          name="antoine"
                        />
                      }
                    />
                  </div>
                </div>
              </div>
            </div> */}

            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <Button
                onClick={handleClose}
                style={{ marginLeft: "1rem", top: "1rem" }}
                variant="contained"
                color="default"
              >
                انصراف
              </Button>
              <Button
                style={{ marginLeft: "1rem", top: "1rem" }}
                variant="contained"
                color="primary"
              >
                ذخیره
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default PricingTable;
