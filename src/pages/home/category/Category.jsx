import React, { useEffect } from "react";
import classes from "./category.module.css";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import pic1 from "../../../assets/img/home/Rectangle 18.jpg";
import pic2 from "../../../assets/img/home/2.jpg";
import pic3 from "../../../assets/img/home/3.jpg";
import pic4 from "../../../assets/img/home/4.jpg";
import pic5 from "../../../assets/img/home/5.jpg";
import pic6 from "../../../assets/img/home/6.jpg";
import { Grade, AccessTime, Sms, AttachMoney } from "@material-ui/icons";
import avatar1 from "../../../assets/img/home/avatar1.jpg";
import { Rating } from "@material-ui/lab";
import { Link } from "react-router-dom";
import a from "../../../assets/Icons/home/a.svg";
import aa from "../../../assets/Icons/home/aa.svg";
import Layout from "../../../Layout/Layout";
import { scrollHandler } from "../../../helper/general";

const Category = () => {
  useEffect(() => {
    scrollHandler(0, 0);
  }, []);
  return (
    <Layout>
      <Paper elevation={3} className={classes.urlPage}>
        پارک جاب/ طراحی و گرافیک
      </Paper>
      <div>
        <Grid container xs={12} className={classes.workSamples}>
          <div className={classes.title}>
            <div className={classes.line}></div>
            <h2>برخی نمونه کار فریلنسرها</h2>
            <div className={classes.line}></div>
          </div>

          <Grid
            container
            item
            xs={12}
            md={12}
            className={classes.workSamplesCards}
          >
            <Grid item container xs={12} md={8} lg={8} direction="row">
              <Card xs={2} className={classes.cardSampele}>
                <img src={pic1} alt="pic" />
                <CardContent>
                  <p>طراحی پوسترمسابقات کشوری</p>
                  <div style={{ display: "flex", color: "#909599" }}>
                    <span style={{ paddingTop: ".25rem" }}>250</span>
                    <Grade color="action" />
                  </div>
                </CardContent>
              </Card>
              <Card xs={2} className={classes.cardSampele}>
                <img src={pic2} alt="pic" />
                <CardContent>
                  <p>طراحی پوسترمسابقات کشوری</p>
                  <div style={{ display: "flex", color: "#909599" }}>
                    <span style={{ paddingTop: ".25rem" }}>250</span>
                    <Grade color="action" />
                  </div>
                </CardContent>
              </Card>
              <Card xs={2} className={classes.cardSampele}>
                <img src={pic3} alt="pic" />
                <CardContent>
                  <p>طراحی پوسترمسابقات کشوری</p>
                  <div style={{ display: "flex", color: "#909599" }}>
                    <span style={{ paddingTop: ".25rem" }}>250</span>
                    <Grade color="action" />
                  </div>
                </CardContent>
              </Card>

              <Card xs={2} className={classes.cardSampele}>
                <img src={pic6} alt="pic" />
                <CardContent>
                  <p>طراحی پوسترمسابقات کشوری</p>
                  <div style={{ display: "flex", color: "#909599" }}>
                    <span style={{ paddingTop: ".25rem" }}>250</span>
                    <Grade color="action" />
                  </div>
                </CardContent>
              </Card>
              <Card
                xs={2}
                className={classes.cardSampele}
                // id={classes.cardSampele5}
              >
                <img src={pic5} alt="pic" className={classes.pic5} />
                <CardContent>
                  <p>طراحی پوسترمسابقات کشوری</p>
                  <div style={{ display: "flex", color: "#909599" }}>
                    <span style={{ paddingTop: ".25rem" }}>250</span>
                    <Grade color="action" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={4} md={4} lg={4} className={classes.cardSampeleGrid}>
              <Card
                xs={4}
                className={classes.cardSampele}
                id={classes.cardSampele4}
              >
                <img src={pic4} xs={12} className={classes.pic4} alt="pic" />
                <CardContent>
                  <p>طراحی پوسترمسابقات کشوری</p>
                  <div style={{ display: "flex", color: "#909599" }}>
                    <span style={{ paddingTop: ".25rem" }}>250</span>
                    <Grade color="action" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.divBtnSample}>
          <Button className={classes.btnSampele}>ایجاد پروژه</Button>
        </div>
      </div>
      <Grid container xs={12} className={classes.topDesigners}>
        <div className={classes.title}>
          <div className={classes.line}></div>
          <h2>برترین طراحان</h2>
          <div className={classes.line}></div>
        </div>

        <Grid container item className={classes.cardTopDesigners}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <Card className={classes.cardDesigner} key={item}>
              <Avatar
                alt="Remy Sharp"
                src={avatar1}
                className={classes.large}
              />
              <Typography> ali-mo</Typography>
              <Rating
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
                readOnly
              />
            </Card>
          ))}
        </Grid>
        <div className={classes.linkBtn}>
          <Link to="#"> مشاهده همه طراحان</Link>
          <img src={a} />
        </div>
      </Grid>
      <Grid container xs={12} className={classes.sampleProjects}>
        <div className={classes.title}>
          <div className={classes.line}></div>
          <h2>نمونه پروژه های طراحی و گرافیک</h2>
          <div className={classes.line}></div>
        </div>
        <Grid item container xs={12} className={classes.boxCard}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <Grid item xs={12} key={item}>
              <Card className={classes.cardSampleProject}>
                <CardContent style={{ padding: "1rem" }}>
                  <h3>طراحی بنرهای تبلیغاتی</h3>
                  <Typography id={classes.paragraph}>
                    طرح نما به متنی آزمایشی و بی معنی در صنعت چاپ , صفحه آرایی و
                    طراحی گرافیک گفته میشود. طراح گرافیک از این متن به عنوان
                    عنصری از ترکیب بندی برای پر کردن صفحه آرایه شکل ...
                  </Typography>
                  <div className={classes.boxHeader}>
                    <div className={classes.viewSvg}>
                      <AttachMoney color="action" />
                      <span>50,000,000</span>
                    </div>
                    <div className={classes.viewSvg}>
                      <AccessTime color="action" />
                      <span>5روز و 7 ساعت</span>
                    </div>
                    <div className={classes.viewSvg}>
                      <Sms color="action" />
                      <span>15 پیشنهاد</span>
                    </div>
                    <div className={classes.viewProject}>
                      <Link to="/viewProject">مشاهده پروژه</Link>
                      <img src={aa} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div className={classes.linkBtn}>
          <Link to="#"> مشاهده لیست پروژه ها</Link>
          <img src={a} />
        </div>
      </Grid>
    </Layout>
  );
};
export default Category;
