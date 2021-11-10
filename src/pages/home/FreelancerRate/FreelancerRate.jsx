import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Fade,
  Grid,
  IconButton,
  Modal,
  Paper,
  Typography,
  Backdrop,
  TextField,
  Menu,
  MenuItem,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Layout from "../../../Layout/Layout";
import classes from "./freelancerRate.module.css";
import FreelancerTab from "./freelancerTab/FreelancerTab";
import FreelancersCard from "../Freelancers/FreelancersCard";
import { Autocomplete, Rating } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { Close, ErrorOutline } from "@material-ui/icons";
import { scrollHandler } from "../../../helper/general";

const ITEM_HEIGHT = 48;

const FreelancerRate = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const opens = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloses = () => {
    setAnchorEl(null);
  };
  const city = [
    { title: "موضوع تخلفات اینجا اضافه میشود" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
  ];
  useEffect(() => {
    scrollHandler(0, 0);
  }, []);
  return (
    <Layout>
      <Modal
        aria-labelledby="freelancerRate-reportModal"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2 id="transition-modal-title">گزارش</h2>
              <Close onClick={handleClose} style={{ cursor: "pointer" }} />
            </div>
            <p id="transition-modal-description">
              این فرم برای تخلف کاربران از
              <Link
                style={{ textDecoration: "none", color: "primary" }}
                to="/TermsAndConditions"
              >
                {" "}
                قوانین سایت{" "}
              </Link>{" "}
              است و نام شما فاش نخواهد شد.
            </p>
            <Autocomplete
              id="combo-box-demo"
              options={city}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="موضوع گزارش"
                  placeholder="انتخاب کنید"
                  variant="outlined"
                  style={{
                    width: "100%",
                  }}
                />
              )}
            />
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                marginTop: "2rem",
              }}
            >
              {" "}
              <div className={classes.DivTextArea}>
                <label>توضیحات</label>
                <br />
                <textarea
                  id="filled-multiline-static"
                  multiline
                  rows={6}
                  placeholder="توضیحات تخلف را بنویسید..."
                  style={{ width: 500, padding: "1rem" }}
                />
              </div>
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
                  style={{ marginLeft: "1rem" }}
                  variant="contained"
                >
                  انصراف
                </Button>
                <Button variant="contained" color="primary">
                  ثبت گزارش
                </Button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
      <Paper elevation={3} className={classes.urlPage}>
        پارک جاب/ فریلنسرها/پروفایل
      </Paper>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Card className={classes.profileCard}>
            <Grid
              xs={12}
              item
              justify="center"
              className="userProfileContainer"
            >
              <Avatar
                style={{ height: "9rem", width: "9rem" }}
                // src={}
                alt="profpic"
              />
            </Grid>
            <CardContent>
              <Typography className={classes.userName}>username</Typography>
              <Typography
                className={classes.graphistLogo}
                color="textSecondary"
              >
                گرافیست و طراح لوگو
              </Typography>
              <Box
                component="fieldset"
                mb={3}
                borderColor="transparent"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography style={{ paddingTop: ".5rem" }}>9.5</Typography>
                <Rating
                  name="half-rating-read"
                  defaultValue={4.5}
                  precision={0.5}
                  readOnly
                />
              </Box>
              <div className={classes.boxbtn}>
                <Button
                  className={classes.btnInvitation}
                  variant="contained"
                  color="primary"
                >
                  دعوت به همکاری
                </Button>
                <Button className={classes.btnInvitation} variant="contained">
                  دنبال کردن
                </Button>

                <div>
                  <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    className={classes.IconButton}
                    style={{
                      borderRadius: ".5rem",
                      border: "1px solid #C4CAD0",

                      padding: ".25rem",
                    }}
                  >
                    ...
                  </IconButton>
                  <Menu
                    className={classes.Menu}
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={opens}
                    onClose={handleCloses}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                        marginTop: "3rem",
                      },
                    }}
                  >
                    <MenuItem onClick={handleOpen} className={classes.MenuItem}>
                      <ErrorOutline />
                      <span onClick={handleCloses}>گزارش نقض قوانین</span>
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className={classes.aboutMe}>
            <CardContent>
              <h4>درباره من</h4>
              <p
                className={classes.textAboutMe}
                style={{ borderBottom: "1px solid #C4CAD0", padding: "1rem" }}
              >
                من علی محمدی هستم با 5 سال سابقه کار در زمینه طراحی گرافیک و
                همچنین طراحی لوگوو در زمینه برندینگ هم فعالیت میکنم.
              </p>
              <h4>مهارت ها</h4>
              <div
                style={{
                  borderBottom: "1px solid #C4CAD0",
                  padding: "1rem",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <span className={classes.styleSkills}>Branding</span>
                <span className={classes.styleSkills}>Adobe Illustrator</span>
                <span className={classes.styleSkills}>Adobe Photoshop</span>
              </div>
              <h4>سوابق شغلی</h4>
              <div
                className={classes.textSize}
                style={{ borderBottom: "1px solid #C4CAD0", padding: "1rem" }}
              >
                سوابق شغلی فرد در این قسمت اضافه میشود.
              </div>
              <h4>سوابق تحصیلی</h4>
              <div
                className={classes.textSize}
                style={{ borderBottom: "1px solid #C4CAD0", padding: "1rem" }}
              >
                در این قسمت سوابق تحصیلی فرد اضافه میشود.
              </div>
              <h4>سایر اطلاعات</h4>
              <div className={classes.textSize}>
                <div>
                  <span>محل سکونت:</span>
                  <span>تهران</span>
                </div>
                <div>
                  <span>دنبال کننده ها:</span>
                  <span>2050</span>
                </div>
                <div>
                  <span>پروژه های انجام شده:</span>
                  <span>150</span>
                </div>
                <div>
                  <span>تاریخ عضویت:</span>
                  <span>5 مرداد 1396</span>
                </div>
                <div>
                  <span>آخرین فعالیت:</span>
                  <span>هفته پیش</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <FreelancerTab />
        </Grid>
      </Grid>
    </Layout>
  );
};
export default FreelancerRate;
