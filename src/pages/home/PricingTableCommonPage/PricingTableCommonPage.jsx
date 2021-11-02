import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Grid,
  Paper,
} from "@material-ui/core";
import React from "react";
import classes from "./pricingTableCommonPage.module.css";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Layout from "../../../Layout/Layout";
import { Link } from "react-router-dom";
import panel1 from "../../../assets/Icons/home/panel1.svg";
import panel4 from "../../../assets/Icons/home/panel4.svg";
import panel2 from "../../../assets/Icons/home/panel2.svg";
import panel3 from "../../../assets/Icons/home/panel3.svg";
const PricingTableCommonPage = () => {
  return (
    <Layout>
      <Paper elevation={3} className={classes.urlPage}>
        پارک جاب/ طرح های عضویت
      </Paper>
      <Grid container className={classes.containerBox}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              paddingBottom: "2rem",
              margin: "1rem",
              textAlign: "center",
              height: "3rem",
              fontWeight: "bold",
            }}
          >
            <p>
              اعضای معمولی می توانند در مسابقات شرکت کنند و 5 پیشنهاد برای پروژه
              ها ار سال کنند.
            </p>
            <p>برای استفاده از امکانات بیشتر عضویت خود را ارتقا دهید.</p>
          </div>
          <ButtonGroup disableElevation variant="contained">
            <Button className={classes.MonthlyBtn}>ماهیانه</Button>
            <Button className={classes.AnnuallyBtn}>سالیانه</Button>
          </ButtonGroup>
        </div>
        <Grid container item xs={12} className={classes.cardBody}>
          <Card className={classes.PricingCards}>
            <div className={classes.cardHeader}>
              <img src={panel1} alt="panel1-svg" />
              <h2>عضویت معمولی</h2>
              <h2 className={classes.Price}>رایگان</h2>
            </div>

            <CardContent style={{ padding: "2rem", alignContent: "center" }}>
              <div className={classes.textContent}>
                <CheckCircleOutlineIcon />
                <p>دارا بودن پروفایل معمولی</p>
              </div>
              <div className={classes.textContent}>
                <CheckCircleOutlineIcon />
                <p>ارسال 5 پیشنهاد در ماه</p>
              </div>
              <Link
                style={{ textDecoration: "none", color: "#ecf1ff " }}
                to="/PricingTableHome"
              >
                <Button
                  className={classes.selectBtn}
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  انتخاب پلن
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className={classes.PricingCards}>
            <div className={classes.cardHeader}>
              <img src={panel2} alt="panel2-svg" />
              <h2>عضویت برنزی</h2>
              <h2 className={classes.Price}>350,000ریال</h2>
            </div>

            <CardContent style={{ padding: "2rem" }}>
              <div className={classes.textContent}>
                <CheckCircleOutlineIcon />
                <p>دریافت پروفایل حرفه ای</p>
              </div>
              <div className={classes.textContent}>
                <CheckCircleOutlineIcon />
                <p>دریافت نشان عضویت برنزی</p>
              </div>
              <div className={classes.textContent}>
                <CheckCircleOutlineIcon />
                <p>ارسال 60 پیشنهاد در ماه</p>
              </div>
              <Link
                style={{ textDecoration: "none", color: "#ecf1ff " }}
                to="/PricingTableHome"
              >
                <Button
                  className={classes.selectBtn}
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  انتخاب پلن
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className={classes.PricingCards}>
            <div className={classes.cardHeader}>
              <img src={panel3} alt="panel3-svg" />
              <h2>عضویت نقره ای</h2>
              <h2 className={classes.Price}>500,000ریال</h2>
            </div>

            <CardContent style={{ padding: "2rem" }}>
              <div className={classes.textContent}>
                <CheckCircleOutlineIcon />
                <p>دریافت پروفایل حرفه ای</p>
              </div>
              <div className={classes.textContent}>
                <CheckCircleOutlineIcon />
                <p>دریافت نشان عضویت نقره ای</p>
              </div>
              <div className={classes.textContent}>
                <CheckCircleOutlineIcon />
                <p>ارسال 120 پیشنهاد در ماه</p>
              </div>
              <Link
                style={{ textDecoration: "none", color: "#ecf1ff " }}
                to="/PricingTableHome"
              >
                <Button
                  className={classes.selectBtn}
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  انتخاب پلن
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className={classes.PricingCards}>
            <div className={classes.cardHeader}>
              <img src={panel4} alt="panel4-svg" />
              <h2>عضویت طلایی</h2>
              <h2 className={classes.Price}>700,000ریال</h2>
            </div>

            <CardContent style={{ padding: "2rem" }}>
              <div className={classes.textContent}>
                <CheckCircleOutlineIcon />
                <p>دریافت پروفایل حرفه ای</p>
              </div>
              <div className={classes.textContent}>
                <CheckCircleOutlineIcon />
                <p>دریافت نشان عضویت طلایی</p>
              </div>
              <div className={classes.textContent}>
                <CheckCircleOutlineIcon />
                <p>ارسال 240 پیشنهاد در ماه</p>
              </div>
              <Link
                style={{ textDecoration: "none", color: "#ecf1ff " }}
                to="/PricingTableHome"
              >
                <Button
                  className={classes.selectBtn}
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
    </Layout>
  );
};
export default PricingTableCommonPage;
