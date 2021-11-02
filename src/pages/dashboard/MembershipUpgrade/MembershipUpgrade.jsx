import React from "react";
import "./membershipUpgrade.css";
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Grid,
  Paper,
} from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { Link } from "react-router-dom";
function MembershipUpgrade(props) {
  return (
    <div>
      <h3 style={{ paddingBottom: "2rem", margin: "0" }}>ارتقا عضویت</h3>

      <Grid container xs={12} style={{ textAlign: "center", maxWidth: "100%" }}>
        <Grid item xs={12} direction="column" alignItems="center">
          <div
            style={{
              paddingBottom: "2rem",
              textAlign: "center",
              height: "3rem",
            }}
          >
            <h4>
              اعضای معمولی می توانند در مسابقات شرکت کنند و 5 پیشنهاد برای پروژه
              ها ار سال کنند. <br />
              برای استفاده از امکانات بیشتر عضویت خود را ارتقا دهید.
            </h4>
          </div>
          <ButtonGroup
            disableElevation
            variant="contained"
            style={{ marginTop: "2rem" }}
          >
            <Button className="Monthly-btn">ماهیانه</Button>
            <Button className="Annually-btn">سالیانه</Button>
          </ButtonGroup>
        </Grid>
        <Grid container className="card-body">
          <Card className="Pricing-cards">
            <div className="card-header">
              <h2>عضویت برنزی</h2>
              <h2 className="Price">350,000ریال</h2>
            </div>

            <CardContent style={{ padding: "2rem" }}>
              <div className="text-content">
                <CheckCircleOutlineIcon />
                <p>دریافت پروفایل حرفه ای</p>
              </div>
              <div className="text-content">
                <CheckCircleOutlineIcon />
                <p>دریافت نشان عضویت برنزی</p>
              </div>
              <div className="text-content">
                <CheckCircleOutlineIcon />
                <p>ارسال 60 پیشنهاد در ماه</p>
              </div>{" "}
              <Link
                style={{ textDecoration: "none", color: "#ecf1ff " }}
                to="/dashboard/PricingTable"
              >
                <Button
                  className="select-btn"
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  انتخاب پلن
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="Pricing-cards">
            <div className="card-header">
              <h2>عضویت نقره ای</h2>
              <h2 className="Price">500,000ریال</h2>
            </div>

            <CardContent style={{ padding: "2rem" }}>
              <div className="text-content">
                <CheckCircleOutlineIcon />
                <p>دریافت پروفایل حرفه ای</p>
              </div>
              <div className="text-content">
                <CheckCircleOutlineIcon />
                <p>دریافت نشان عضویت نقره ای</p>
              </div>
              <div className="text-content">
                <CheckCircleOutlineIcon />
                <p>ارسال 120 پیشنهاد در ماه</p>
              </div>{" "}
              <Link
                style={{ textDecoration: "none", color: "#ecf1ff " }}
                to="/dashboard/PricingTable"
              >
                <Button
                  className="select-btn"
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  انتخاب پلن
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="Pricing-cards">
            <div className="card-header">
              <h2>عضویت طلایی</h2>
              <h2 className="Price">700,000ریال</h2>
            </div>

            <CardContent style={{ padding: "2rem" }}>
              <div className="text-content">
                <CheckCircleOutlineIcon />
                <p>دریافت پروفایل حرفه ای</p>
              </div>
              <div className="text-content">
                <CheckCircleOutlineIcon />
                <p>دریافت نشان عضویت طلایی</p>
              </div>
              <div className="text-content">
                <CheckCircleOutlineIcon />
                <p>ارسال 240 پیشنهاد در ماه</p>
              </div>{" "}
              <Link
                style={{ textDecoration: "none", color: "#ecf1ff " }}
                to="/dashboard/PricingTable"
              >
                <Button
                  className="select-btn"
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  انتخاب پلن
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default MembershipUpgrade;
