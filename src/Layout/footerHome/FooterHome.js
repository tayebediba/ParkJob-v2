import React from "react";
import logos from "./../../assets/Icons/dashboardIcon/logos.svg";
import classes from "./footerHome.module.css";
import { Link } from "react-router-dom";
import call from "../../assets/Icons/home/call.svg";
import email from "../../assets/Icons/home/email.svg";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TelegramIcon from "@material-ui/icons/Telegram";
import { IconButton } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const FooterHome = () => {
  return (
    <footer>
      <div className={classes.footerBox}>
        <div className={`${classes.col} ${classes.col1}`}>
          <div className={classes.logoBox}>
            <img src={logos} alt="parkJob-logo" />
          </div>
          <p className={classes.para}>
            ما رابط تقاضا و اجرا هستیم.هرکاری که بتوان در بستر اینترنت انجامش
            داد.در پارک جاب کارفرماها درخواست خود را به صورت عمومی یا خصوصی مطرح
            می کنند تا توسط فریلنسرها انجام شود.
          </p>
        </div>
        <div className={`${classes.col} ${classes.col2}`}>
          <Link to="/dashboard/bills">پروژه ها</Link>
          <Link to="/QuestionsLayout">سوالات متداول</Link>
          <Link to="/TermsAndConditions">قوانین و مقررات</Link>
        </div>
        <div className={`${classes.col} ${classes.col3}`}>
          <h3>تماس با ما</h3>
          <div className={classes.colItem}>
            <img src={call} alt="call-logo" />
            <span>083-78784545</span>
          </div>
          <div className={classes.colItem}>
            <img src={email} alt="email-logo" />
            <span>parkjob_Jahad@gmail.com</span>
          </div>
        </div>
        <div className={`${classes.col} ${classes.col4}`}>
          <h3>با ما همراه باشید</h3>
          <div className={classes.logos}>
            <IconButton
              size="small"
              style={{ color: "#002e6e", background: "#fff" }}
            >
              <LinkedInIcon fontSize="large" style={{ padding: ".2rem" }} />
            </IconButton>

            <IconButton
              size="small"
              style={{ color: "#002e6e", background: "#fff" }}
            >
              <TwitterIcon fontSize="large" style={{ padding: ".2rem" }} />
            </IconButton>
            <IconButton
              size="small"
              style={{ color: "#002e6e", background: "#fff" }}
            >
              <WhatsAppIcon fontSize="large" style={{ padding: ".2rem" }} />
            </IconButton>
            <IconButton
              size="small"
              style={{ color: "#002e6e", background: "#fff" }}
            >
              <TelegramIcon fontSize="large" style={{ padding: ".2rem" }} />
            </IconButton>
          </div>
        </div>
      </div>
      <div className={classes.footerDown}>
        <h5>
          تمامی حقوق مادی و معنوی این سایت متعلق به مجموعه جهاددانشگاهی کرمانشاه
          می باشد.
        </h5>
      </div>
    </footer>
  );
};

export default FooterHome;
