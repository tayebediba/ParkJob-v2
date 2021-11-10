import React, { memo } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";

import logos from "../../../assets/Icons/dashboardIcon/logos.svg";
import dashboard from "./../../../assets/Icons/dashboardIcon/dashboard.svg";
import add from "./../../../assets/Icons/dashboardIcon/add.svg";
import chart from "./../../../assets/Icons/dashboardIcon/chart.svg";
import chat from "./../../../assets/Icons/dashboardIcon/chat.svg";
import list from "./../../../assets/Icons/dashboardIcon/list.svg";
import payment from "./../../../assets/Icons/dashboardIcon/payment.svg";
import pen from "./../../../assets/Icons/dashboardIcon/pen.svg";
import premium from "./../../../assets/Icons/dashboardIcon/premium.svg";
import setting from "./../../../assets/Icons/dashboardIcon/setting.svg";
import support from "./../../../assets/Icons/dashboardIcon/support.svg";
import group from "./../../../assets/Icons/dashboardIcon/group.svg";
import {
  ExpandMoreRounded,
  AccountBalanceWalletOutlined,
} from "@material-ui/icons";
import "./sidebar.css";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Navbar from "./../../../components/navbar/Navbar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "#f6f6f6",
      display: "none",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
const SideBar = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDisplaySidebarInMobile = () => {
    setMobileOpen(false);
  };

  // const drawer = (
  //   <div className="navBar">
  //     <div className={classes.toolbar} />
  //     <Divider />
  //     <List>
  //       {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>
  //             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //           </ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {["All mail", "Trash", "Spam"].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>
  //             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //           </ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //   </div>
  // );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <div>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Navbar />
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <div>
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === "ltr" ? "right" : "left"}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                <div className="sidebarBox">
                  <div className="logoBox">
                    <Link to="/">
                      <img src={logos} alt="parkJab-logo" />
                    </Link>
                  </div>
                  <div>
                    <Accordion expanded={false} elevation={0}>
                      <AccordionSummary className="sidebarItem">
                        <img src={dashboard} alt="dashboard" />
                        <Link
                          onClick={handleDisplaySidebarInMobile}
                          to="/dashboard"
                        >
                          داشبورد
                        </Link>
                      </AccordionSummary>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0} expanded={false}>
                      <AccordionSummary className="sidebarItem">
                        <img src={add} alt="add" />
                        <Link
                          onClick={handleDisplaySidebarInMobile}
                          to="/dashboard/bills"
                        >
                          {" "}
                          ایجاد پروژه
                        </Link>
                      </AccordionSummary>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0} expanded={false}>
                      <AccordionSummary className="sidebarItem">
                        <img src={setting} alt="dashboard" />
                        <Link
                          onClick={handleDisplaySidebarInMobile}
                          to="/dashboard/projectmanagement"
                        >
                          {" "}
                          مدیریت پروژه ها
                        </Link>
                      </AccordionSummary>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        className="sidebarItem"
                      >
                        <img src={list} alt="dashboard" />
                        <Typography> لیست</Typography>
                      </AccordionSummary>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link
                            onClick={handleDisplaySidebarInMobile}
                            to="/dashboard/FitsSkill"
                          >
                            مرتبط با تخصص من
                          </Link>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link
                            onClick={handleDisplaySidebarInMobile}
                            to="/dashboard/AllProject"
                          >
                            همه پروژه ها
                          </Link>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        className="sidebarItem"
                      >
                        <img src={pen} alt="dashboard" />
                        <Typography> ویرایش پروفایل</Typography>
                      </AccordionSummary>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link
                            onClick={handleDisplaySidebarInMobile}
                            to="/dashboard/profile"
                          >
                            اطلاعات فردی
                          </Link>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link
                            onClick={handleDisplaySidebarInMobile}
                            to="/dashboard/resume"
                          >
                            رزومه
                          </Link>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        className="sidebarItem"
                      >
                        <img src={group} alt="dashboard" />
                        <Typography> فریلنسرها</Typography>
                      </AccordionSummary>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link
                            onClick={handleDisplaySidebarInMobile}
                            to="/dashboard/followers"
                          >
                            دنبال کننده ها
                          </Link>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link
                            onClick={handleDisplaySidebarInMobile}
                            to="/dashboard/followings"
                          >
                            دنبال کردن
                          </Link>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        className="sidebarItem"
                      >
                        <AccountBalanceWalletOutlined fontSize="small" />
                        <Typography style={{ paddingRight: ".75rem" }}>
                          {" "}
                          امور مالی
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link
                            onClick={handleDisplaySidebarInMobile}
                            to="/dashboard/followers"
                          >
                            شماره حساب
                          </Link>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link
                            onClick={handleDisplaySidebarInMobile}
                            to="/dashboard/followings"
                          >
                            کیف پول
                          </Link>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link
                            onClick={handleDisplaySidebarInMobile}
                            to="/dashboard/followings"
                          >
                            گردش مالی
                          </Link>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link
                            onClick={handleDisplaySidebarInMobile}
                            to="/dashboard/followings"
                          >
                            برداشت
                          </Link>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link
                            onClick={handleDisplaySidebarInMobile}
                            to="/dashboard/followings"
                          >
                            آزادسازی وجه
                          </Link>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0} expanded={false}>
                      <AccordionSummary className="sidebarItem">
                        <img src={support} alt="dashboard" />
                        <Link
                          onClick={handleDisplaySidebarInMobile}
                          to="/dashboard/bills"
                        >
                          {" "}
                          پشتیبانی{" "}
                        </Link>
                      </AccordionSummary>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0} expanded={false}>
                      <AccordionSummary className="sidebarItem">
                        <img src={chat} alt="dashboard" />
                        <Link
                          onClick={handleDisplaySidebarInMobile}
                          to="/dashboard/Inbox"
                        >
                          {" "}
                          صندوق پیام ها{" "}
                        </Link>
                      </AccordionSummary>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0} expanded={false}>
                      <AccordionSummary className="sidebarItem">
                        <img src={premium} alt="dashboard" />
                        <Link
                          onClick={handleDisplaySidebarInMobile}
                          to="/dashboard/MembershipUpgrade"
                        >
                          {" "}
                          ارتقا عضویت{" "}
                        </Link>
                      </AccordionSummary>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0} expanded={false}>
                      <AccordionSummary className="sidebarItem">
                        <img src={chart} alt="dashboard" />
                        <Link
                          onClick={handleDisplaySidebarInMobile}
                          to="/dashboard/StatisticsFreelancer"
                        >
                          {" "}
                          آمار عملکرد{" "}
                        </Link>
                      </AccordionSummary>
                    </Accordion>
                  </div>
                </div>
              </Drawer>
            </Hidden>

            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                <div className="sidebarBox">
                  <div className="logoBox">
                    <Link to="/">
                      <img src={logos} alt="parkJab-logo" />
                    </Link>
                  </div>
                  <div>
                    <Accordion expanded={false} elevation={0}>
                      <AccordionSummary className="sidebarItem">
                        <img src={dashboard} alt="dashboard" />
                        <Link to="/dashboard">داشبورد</Link>
                      </AccordionSummary>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0} expanded={false}>
                      <AccordionSummary className="sidebarItem">
                        <img src={add} alt="add" />
                        <Link to="/dashboard/bills"> ایجاد پروژه</Link>
                      </AccordionSummary>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0} expanded={false}>
                      <AccordionSummary className="sidebarItem">
                        <img src={setting} alt="dashboard" />
                        <Link to="/dashboard/projectmanagement">
                          {" "}
                          مدیریت پروژه ها
                        </Link>
                      </AccordionSummary>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        className="sidebarItem"
                      >
                        <img src={list} alt="dashboard" />
                        <Typography> لیست</Typography>
                      </AccordionSummary>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link to="/dashboard/profile">مرتبط با تخصص من</Link>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link to="/dashboard/password">همه پروژه ها</Link>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        className="sidebarItem"
                      >
                        <img src={pen} alt="dashboard" />
                        <Typography> ویرایش پروفایل</Typography>
                      </AccordionSummary>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link to="/dashboard/profile">اطلاعات فردی</Link>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link to="/dashboard/resume">رزومه</Link>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        className="sidebarItem"
                      >
                        <img src={group} alt="dashboard" />
                        <Typography> فریلنسرها</Typography>
                      </AccordionSummary>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link to="/dashboard/followers">دنبال کننده ها</Link>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link to="/dashboard/followings">دنبال کردن</Link>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0} expanded={false}>
                      <AccordionSummary className="sidebarItem">
                        <img src={payment} alt="dashboard" />
                        <Link to="/dashboard/bills"> حساب بانکی </Link>
                      </AccordionSummary>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0} expanded={false}>
                      <AccordionSummary className="sidebarItem">
                        <img src={support} alt="dashboard" />
                        <Link to="/dashboard/bills"> پشتیبانی </Link>
                      </AccordionSummary>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0} expanded={false}>
                      <AccordionSummary className="sidebarItem">
                        <img src={chat} alt="dashboard" />
                        <Link to="/dashboard/Inbox"> صندوق پیام ها </Link>
                      </AccordionSummary>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0} expanded={false}>
                      <AccordionSummary className="sidebarItem">
                        <img src={premium} alt="dashboard" />
                        <Link to="/dashboard/MembershipUpgrade">
                          {" "}
                          ارتقا عضویت{" "}
                        </Link>
                      </AccordionSummary>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0} expanded={false}>
                      <AccordionSummary className="sidebarItem">
                        <img src={chart} alt="dashboard" />
                        <Link to="/dashboard/StatisticsFreelancer">
                          {" "}
                          آمار عملکرد{" "}
                        </Link>
                      </AccordionSummary>
                    </Accordion>
                  </div>
                </div>
                <div className="sidebarBox">
                  <div className="logoBox">
                    <Link to="/">
                      <img src={logos} alt="parkJab-logo" />
                    </Link>
                  </div>
                  <div>
                    <Accordion expanded={false} elevation={0}>
                      <AccordionSummary className="sidebarItem">
                        <img src={dashboard} alt="dashboard" />
                        <Link to="/dashboard">داشبورد</Link>
                      </AccordionSummary>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0} expanded={false}>
                      <AccordionSummary className="sidebarItem">
                        <img src={add} alt="add" />
                        <Link to="/dashboard/bills"> ایجاد پروژه</Link>
                      </AccordionSummary>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0} expanded={false}>
                      <AccordionSummary className="sidebarItem">
                        <img src={setting} alt="dashboard" />
                        <Link to="/dashboard/projectmanagement">
                          {" "}
                          مدیریت پروژه ها
                        </Link>
                      </AccordionSummary>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        className="sidebarItem"
                      >
                        <img src={list} alt="dashboard" />
                        <Typography> لیست</Typography>
                      </AccordionSummary>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link to="/dashboard/FitsSkill">
                            مرتبط با تخصص من
                          </Link>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link to="/dashboard/AllProject">همه پروژه ها</Link>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        className="sidebarItem"
                      >
                        <img src={pen} alt="dashboard" />
                        <Typography> ویرایش پروفایل</Typography>
                      </AccordionSummary>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link to="/dashboard/profile">اطلاعات فردی</Link>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link to="/dashboard/resume">رزومه</Link>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        className="sidebarItem"
                      >
                        <img src={group} alt="dashboard" />
                        <Typography> فریلنسرها</Typography>
                      </AccordionSummary>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link to="/dashboard/followers">دنبال کننده ها</Link>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link to="/dashboard/followings">دنبال کردن</Link>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        className="sidebarItem"
                      >
                        <AccountBalanceWalletOutlined fontSize="small" />
                        <Typography style={{ paddingRight: ".75rem" }}>
                          {" "}
                          امور مالی
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link
                            onClick={handleDisplaySidebarInMobile}
                            to="/dashboard/PaymentOne"
                          >
                            شماره حساب
                          </Link>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link
                            onClick={handleDisplaySidebarInMobile}
                            to="/dashboard/followings"
                          >
                            کیف پول
                          </Link>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link
                            onClick={handleDisplaySidebarInMobile}
                            to="/dashboard/followings"
                          >
                            گردش مالی
                          </Link>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link
                            onClick={handleDisplaySidebarInMobile}
                            to="/dashboard/followings"
                          >
                            برداشت
                          </Link>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails className="sidebarItem">
                        <Typography variant="button">
                          <Link
                            onClick={handleDisplaySidebarInMobile}
                            to="/dashboard/followings"
                          >
                            آزادسازی وجه
                          </Link>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0} expanded={false}>
                      <AccordionSummary className="sidebarItem">
                        <img src={support} alt="dashboard" />
                        <Link to="/dashboard/bills"> پشتیبانی </Link>
                      </AccordionSummary>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0} expanded={false}>
                      <AccordionSummary className="sidebarItem">
                        <img src={chat} alt="dashboard" />
                        <Link to="/dashboard/Inbox"> صندوق پیام ها </Link>
                      </AccordionSummary>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0} expanded={false}>
                      <AccordionSummary className="sidebarItem">
                        <img src={premium} alt="dashboard" />
                        <Link to="/dashboard/MembershipUpgrade">
                          {" "}
                          ارتقا عضویت{" "}
                        </Link>
                      </AccordionSummary>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion elevation={0} expanded={false}>
                      <AccordionSummary className="sidebarItem">
                        <img src={chart} alt="dashboard" />
                        <Link to="/dashboard/StatisticsFreelancer">
                          {" "}
                          آمار عملکرد{" "}
                        </Link>
                      </AccordionSummary>
                    </Accordion>
                  </div>
                </div>
              </Drawer>
            </Hidden>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
