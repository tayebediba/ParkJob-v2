import React, { useEffect, useState } from "react";
import { Avatar, Button, Grid, Paper, Typography } from "@material-ui/core";
import Layout from "../../Layout/Layout";
import classes from "./home.module.css";
import home from "../../assets/img/home.svg";
import arrow from "../../assets/Icons/home/arrow.svg";
import pro from "../../assets/Icons/home/pro.svg";
import select from "../../assets/Icons/home/select.svg";
import pro2 from "../../assets/Icons/home/pro2.svg";
import pro3 from "../../assets/Icons/home/pro3.svg";
import avatar2 from "../../assets/Icons/home/avatar2.svg";
import picMan1 from "../../assets/img/picMan1.jpg";
import picMan2 from "../../assets/img/picMan2.jpg";
import picMan3 from "../../assets/img/picMan3.jpg";
import picMan4 from "../../assets/img/picMan4.jpg";
import picMan5 from "../../assets/img/picMan5.jpg";
import Graphics from "../../assets/Icons/home/Graphics.svg";
import content from "../../assets/Icons/home/content.svg";
import Type from "../../assets/Icons/home/type.svg";
import chart from "../../assets/Icons/home/chart.svg";
import anime from "../../assets/Icons/home/anime.svg";
import WebDesign from "../../assets/Icons/home/Web-design.svg";
import Programming from "../../assets/Icons/home/Programming.svg";
import Business from "../../assets/Icons/home/Business.svg";
import TopFreelancersCard from "../../components/TopFreelancers/TopFreelancersCard";
import { Link } from "react-router-dom";
import { getPortfoliosList, getTopFreelancers } from "../../services/home/home";

const Home = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [getTopFreelancer, setgetTopFreelancers] = useState([]);
  const [serverError, setServerError] = useState(false);
  const [serverError2, setServerError2] = useState(false);
  useEffect(() => {
    getTopFreelancers().then((res) => {
      if (res.status === 200) {
        console.log(res, "111");
        setgetTopFreelancers(res.data.value);
      } else {
        setServerError(true);
      }
    });
    getPortfoliosList().then((res) => {
      if (res.status === 200) {
        setPortfolio(res.data.value);
      } else {
        setServerError2(true);
      }
    });
  }, []);
  console.log(!getTopFreelancer.length);
  console.log(portfolio);
  console.log(getTopFreelancer);
  return (
    <Layout>
      <div className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}>
              <div className={classes.item1}>
                <h2>پروژه های خود را به افراد حرفه ای بسپارید</h2>
                <p style={{ paddingTop: "1rem" }}>
                  با ثبت پروژه ای خود در پارک جاب میتوانید مطمئن باشید که پروژه
                  شما به بهترین نحو و با کیفیت ترین حالت ممکن اجرا خواهد شد. در
                  پارک جاب بهترین فریلنسرهااز سراسر کشور حضور دارند.{" "}
                </p>
                <a style={{ textDecoration: "none" }} href="#more">
                  {" "}
                  <span>
                    بیشتر بدانید
                    <img src={arrow} alt="arrow" />
                  </span>
                </a>
              </div>
              <div className={classes.picHeader}>
                <img src={home} alt="pic" />
              </div>
            </Paper>
          </Grid>
          <Grid item className={classes.titleBox} xs={12}>
            <h6 className={classes.title}>نحوه ثبت پروژه</h6>
            <h3>ما چگونه کار میکنیم</h3>
          </Grid>

          <Grid item container xs={12}>
            <Paper elevation={0} className={classes.cardBox}>
              <Grid item xs={12} sm={3}>
                <Paper elevation={0} className={classes.card}>
                  <Avatar className={classes.avatar} src={pro} alt="pro-svg" />
                  <h3>ثبت پروژه</h3>
                  <p>
                    در این مرحله شما جزئیات و خواسته های خود از پروزه را به طور
                    کامل شرح می دهید تا فریلنسرهایی که توانایی انجام پروژه را
                    دارند متوجه خواسته شما شوند.
                  </p>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper elevation={0} className={classes.card}>
                  <Avatar
                    className={classes.avatar}
                    src={select}
                    alt="select-svg"
                  />
                  <h3>انتخاب فریلنسر</h3>
                  <p>
                    در مرحله بعد پس از ثبت پروژه شما و نمایش آن در سایت
                    پیشنهاداتی از سمت فریلنسرها دریافت خواهید کرد که با توجه به
                    رزومه و شرایط مورد نظر خود می توانید با یک فریلنسر همکاری
                    کنید.
                  </p>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper elevation={0} className={classes.card}>
                  <Avatar
                    className={classes.avatar}
                    src={pro2}
                    alt="pro2-svg"
                  />
                  <h3>همکاری با فریلنسر ها</h3>
                  <p>
                    پس از قبول پیشنهاد مورد نظر شما و فریلنسر می توانید به تعامل
                    با هم بپردازید و از طریق چت متنی مراحل پروژه را تا رسیدن به
                    نتیحه دلخواه پیش ببرید.
                  </p>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper elevation={0} className={classes.card}>
                  <Avatar
                    className={classes.avatar}
                    src={pro3}
                    alt="pro3-svg"
                  />
                  <h3>تحویل پروژه</h3>
                  <p>
                    پس از پایان مراحل پروژه در صورتی که کارفرما از نتیجه کار
                    راضی باشد می تواند مبلغ پروژه را تسویه کند در غیراینصورت تا
                    توافق کامل طرفین همکاری ادامه دارد.
                  </p>
                </Paper>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid item className={classes.titleBox2} xs={12}>
          <h6 className={classes.title}>نتیجه اعتماد شما</h6>
          <h3>برخی از نمومه کارفریلنسرها</h3>
        </Grid>

        <Grid container className={classes.cardBoxImg}>
          {console.log(portfolio.status)}
          {serverError ? (
            <span style={{ textAlign: "center" }}>موردی یافت نشد</span>
          ) : !portfolio.length ? (
            <div>loading...</div>
          ) : (
            portfolio.slice(0, 8).map((item) => (
              <Grid
                justifyContent="center"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 300ms",
                }}
                item
                md={3}
                xs={12}
                key={Math.random() * 100000}
              >
                <img
                  className={classes.boxImg}
                  src={item.pictureUrl}
                  alt="frelancers"
                />
                <p className={classes.boxTitle}>{item.title}</p>
              </Grid>
            ))
          )}
        </Grid>

        <Grid container xs={12} className="top-freelancers">
          <Grid item className={classes.titleBox3} xs={12}>
            <h6 className={classes.title}>منتخب های کارفرمایان</h6>
            <h3>فریلنسرهای برتر</h3>
          </Grid>
          <Grid container item className="box-topfreelancers">
            {serverError2 ? (
              <span style={{ textAlign: "center" }}>موردی یافت نشد</span>
            ) : !getTopFreelancer.length ? (
              <div>loading...</div>
            ) : (
              getTopFreelancer
                .slice(0, 5)
                .map((item) => <TopFreelancersCard data={item} key={item.id} />)
            )}
          </Grid>
        </Grid>

        <Grid container item xs={12}>
          <Grid item className={classes.titleBox2} xs={12}>
            <h6 className={classes.title}>دسته بندی مهارت ها</h6>
            <h3>کارهایی که در پارک جاب انجام می دهیم</h3>
          </Grid>
          <Grid container xs={12} className={classes.skillsClassification}>
            <Grid
              item
              xs={12}
              md={3}
              direction="column"
              className={classes.cardSkills}
            >
              <Grid item className={classes.imgSkills1}>
                <img src={Graphics} alt="Graphics-svg" />
              </Grid>
              <h3>طراحی و گرافیکی</h3>
              <div style={{ width: "100%", height: "3rem" }}>
                {" "}
                <Typography
                  color="textSecondary"
                  style={{ paddingTop: "1rem" }}
                >
                  سفارش طرح ها و ایده های خلاقانه برای کسب و کارتان...
                </Typography>
                <Link
                  to="/Category"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      marginTop: "2rem",
                      display: "none",
                      width: "100%",
                    }}
                  >
                    مشاهده جزیئات
                  </Button>
                </Link>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              direction="column"
              className={classes.cardSkills}
            >
              <Grid item className={classes.imgSkills2}>
                <img src={content} alt="content-svg" />
              </Grid>
              <h3>تولید محتوا</h3>
              <div style={{ width: "100%", height: "3rem" }}>
                <Typography
                  color="textSecondary"
                  style={{ paddingTop: "1rem" }}
                >
                  انجام انواع کارهای نوشتاری و تولید محتوای شبکه های اجتماعی
                </Typography>
                <Link
                  to="/Category"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      marginTop: "2rem",
                      display: "none",
                      width: "100%",
                    }}
                  >
                    مشاهده جزیئات
                  </Button>
                </Link>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              direction="column"
              className={classes.cardSkills}
            >
              <Grid item className={classes.imgSkills3}>
                <img src={Type} alt="Type-svg" />
              </Grid>
              <h3>ترجمه و تایپ</h3>
              <div style={{ width: "100%", height: "3rem" }}>
                <Typography
                  color="textSecondary"
                  style={{ paddingTop: "1rem" }}
                >
                  ترجمه انواع متون به زبان دلخواه و تایپ نوشته های شما...
                </Typography>
                <Link
                  to="/Category"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      marginTop: "2rem",
                      display: "none",
                      width: "100%",
                    }}
                  >
                    مشاهده جزیئات
                  </Button>
                </Link>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              direction="column"
              className={classes.cardSkills}
            >
              <Grid item className={classes.imgSkills4}>
                <img src={chart} alt="chart-svg" />
              </Grid>
              <h3>دیجیتال مارکتینگ سئو</h3>
              <div style={{ width: "100%", height: "3rem" }}>
                <Typography
                  color="textSecondary"
                  style={{ paddingTop: "1rem" }}
                >
                  بالا بردن بازدهی کسب و کارتان و بهینه سازی سایتتان
                </Typography>
                <Link
                  to="/Category"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      marginTop: "2rem",
                      display: "none",
                      width: "100%",
                    }}
                  >
                    مشاهده جزیئات
                  </Button>
                </Link>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              direction="column"
              className={classes.cardSkills}
            >
              <Grid item className={classes.imgSkills5}>
                <img src={anime} alt="anime-svg" />
              </Grid>
              <h3>عکس,انیمیشن و ویدئو</h3>
              <div style={{ width: "100%", height: "3rem" }}>
                <Typography
                  color="textSecondary"
                  style={{ paddingTop: "1rem" }}
                >
                  انجام پروژه های عکاسی ,فیلمبرداری ,ادیت عکس و فیلم...
                </Typography>
                <Link
                  to="/Category"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      marginTop: "2rem",
                      display: "none",
                      width: "100%",
                    }}
                  >
                    {" "}
                    مشاهده جزیئات
                  </Button>
                </Link>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              direction="column"
              className={classes.cardSkills}
            >
              <Grid item className={classes.imgSkills6}>
                <img src={WebDesign} alt="WebDesign-svg" />
              </Grid>
              <h3>طراحی سایت</h3>
              <div style={{ width: "100%", height: "3rem" }}>
                <Typography
                  color="textSecondary"
                  style={{ paddingTop: "1rem" }}
                >
                  ایجاد وب سایت برای معرفی کسب و کارتان در دنیای تجارت...
                </Typography>
                <Link
                  to="/Category"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      marginTop: "2rem",
                      display: "none",
                      width: "100%",
                    }}
                  >
                    {" "}
                    مشاهده جزیئات
                  </Button>
                </Link>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              direction="column"
              className={classes.cardSkills}
            >
              <Grid item className={classes.imgSkills7}>
                <img src={Programming} alt="Programming-svg" />
              </Grid>
              <h3>برنامه نویسی, نرم افزار</h3>
              <div style={{ width: "100%", height: "3rem" }}>
                <Typography
                  color="textSecondary"
                  style={{ paddingTop: "1rem" }}
                >
                  با طراحی نرم افزار ,تعامل مشتریان خود را با کسب و کارتان را
                  بالا ببرید
                </Typography>
                <Link
                  to="/Category"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      marginTop: "2rem",
                      display: "none",
                      width: "100%",
                    }}
                  >
                    {" "}
                    مشاهده جزیئات
                  </Button>
                </Link>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              direction="column"
              className={classes.cardSkills}
            >
              <Grid item className={classes.imgSkills8}>
                <img src={Business} alt="Business-svg" />
              </Grid>
              <h3>سایر کسب و کارها</h3>
              <div style={{ width: "100%", height: "3rem" }}>
                <Typography
                  color="textSecondary"
                  style={{ paddingTop: "1rem" }}
                >
                  انجام درخواست و فعالیت های مربوط به کسب و کارتان
                </Typography>
                <Link
                  to="/Category"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      marginTop: "2rem",
                      display: "none",
                      width: "100%",
                    }}
                  >
                    {" "}
                    مشاهده جزیئات
                  </Button>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.AttributesBox}>
          <div>
            <img src={avatar2} alt="avatar2-svg" />
          </div>
          <div id="more" className={classes.Attributes}>
            <h4>ویژگی های ما</h4>
            <h2>چرا به پارک جاب اعتماد می کنید</h2>
            <ul className={classes.AttributesList}>
              <li>
                پارک جاب با استفاده از سیستم مالی گروگذاری وجه امنیت مالی طرفین
                را تضمین میکند.
              </li>
              <li>
                سهولت در انتخاب فریلنسرها بر اساس آمارهای تحلیلی و میزان رضایت
                مشتریان قبلی
              </li>
              <li>
                مشاهده و تحلیل رتبه کارفرما و فریلنسر در پارک جاب براساس پروژه
                های قبلی و آمارها
              </li>
              <li>امکان انجام چند پروژه همزمان </li>
              <li>امکان ارزیابی کارفرما و فریلنسر بعد از اتمام پروژه</li>
              <li>پشتیبانی سریع و دایمی تیم پارک جاب</li>
            </ul>
            <Button siza="large" className={classes.btnList}>
              ایجاد پروژه
            </Button>
          </div>
        </div>

        <div className={classes.Comments}>
          <Grid item className={classes.titleBox} xs={12}>
            <h6 className={classes.title}>ما از دید مشتریان</h6>
            <h3>نظرات کاربران پارک جاب</h3>
          </Grid>
          <div className={classes.boxAvatar}>
            <Avatar className={classes.avatarPic} src={picMan3} alt="picMan3" />
            <Avatar className={classes.avatarPic} src={picMan2} alt="picMan2" />
            <Avatar
              className={`${classes.avatarPic} ${classes.avatarPicLarg}`}
              src={picMan1}
              alt="picMan1"
            />
            <Avatar className={classes.avatarPic} src={picMan4} alt="picMan4" />
            <Avatar className={classes.avatarPic} src={picMan5} alt="picMan5" />
          </div>
          <div className={classes.para}>
            <h3>علی محمدی</h3>
            <p>
              طرح نما به متنی آزمایشی و بی معنی در صنعت چاپ صفحه آرایی و طراحی
              گرافیک گفته می شود.طرح گرافیک از این متن به عنوان عنصری از ترکیب
              بندی برای پرکردن صفحه و آرایه اولیه شکل ظاهری و کلی طرح سفارش
              گرفته شده استفاده می نماید تا از نظر گرافیکی نشانگر چگونگی نوع و
              اندازه فونت و ظاهر متن باشد.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
