// NAVBAR

import React, { memo, useState, useEffect } from "react";
import Logo from "./logo/Logo";
import classes from "./NavbarStyles.module.css";
import NavItem from "./navItem/NavItem";
import Link from "next/link";
import Button from "../../../common/Buttons/Button";
import {
  Avatar,
  Button as MenuButton,
  MenuItem,
  Menu,
} from "@material-ui/core";
import { ArrowDropDownRounded } from "@material-ui/icons";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { clearCookies } from "../../../helper/auth/cookies";
import { deAuthenticate } from "../../../services/deAuthenticationService";
import { getUserInfo } from "../../../services/dashboard/dashboardApi";
import MobileNavbar from "../mobileNavbar/MobileNavbar";

const Navbar = ({ search }) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const [userAvatar, setUserAvatar] = useState("");
  const [isMobileWidth, setIsMobileWidth] = useState(false);
  let isLogin = !!Cookies.getJSON("isLogin");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
 
  const handleClose = (path) => {
    setAnchorEl(null);
    router.push(path);
  };

  const dashboardHandler = () => {
    router.push("/dashboard");
    setAnchorEl(null);
  };
  const logoutHandler = () => {
    deAuthenticate();
    setAnchorEl(null);
    clearCookies();
    window.location.reload();
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) setIsMobileWidth(true);
      else setIsMobileWidth(false);
    });
    if (window.innerWidth <= 600) setIsMobileWidth(true);
    else setIsMobileWidth(false);
    if (isLogin)
      getUserInfo().then((res) => setUserAvatar(res.appUserInfo.profileImage));

    return () => {};
  }, []);

  const button = isLogin ? (
    <div className={classes.avatarBox}>
      <MenuButton
        style={{ backgroundColor: "transparent" }}
        onClick={handleClick}
      >
        <Avatar
          className={classes.avatarPic}
          src={userAvatar}
          alt="profile-image"
        />
        <ArrowDropDownRounded
          fontSize="large"
          color="primary"
          className={classes.arrowDropDownRoundedIcon}
        />
      </MenuButton>
      <Menu
        className={classes.menu}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => handleClose("/feed")}
          className={classes.menuItem}
        >
          <div>
            <img src="/svg/layout/feed.svg" alt="feed" />
          </div>
          <p>فید</p>
        </MenuItem>
        <MenuItem onClick={dashboardHandler} className={classes.menuItem}>
          <div>
            <img src="/svg/layout/dashboard.svg" alt="dashboard" />
          </div>
          <p>داشبورد</p>
        </MenuItem>
        <MenuItem
          onClick={() => handleClose("/dashboard")}
          className={classes.menuItem}
        >
          <div>
            <img
              src="/svg/layout/company-management.svg"
              alt="company-management"
            />
          </div>
          <p>مدیریت شرکت</p>
        </MenuItem>
        <MenuItem
          onClick={() => handleClose("/dashboard/lists")}
          className={classes.menuItem}
        >
          <div>
            <img src="/svg/layout/list-management.svg" alt="list-management" />
          </div>
          <p>مدیریت لیست</p>
        </MenuItem>
        <MenuItem onClick={logoutHandler} className={classes.menuItem}>
          <div>
            <img src="/svg/layout/logout.svg" alt="logout" />
          </div>
          <p>خروج‌ از حساب </p>
        </MenuItem>
      </Menu>
    </div>
  ) : null;

  const authentication = isLogin ? null : (
    <Link href="/login">
      <a>
        <Button btnType="register">ورود | ثبت‌نام</Button>
      </a>
    </Link>
  );

  const vipAccount = (
    <Link href="/pricing">
      <a>
        <MenuButton className={classes.vip}>
          عضو ویژه شوید
          <img src="/image/svg/navbar/shuttle.svg" alt="shuttle-svg" />
        </MenuButton>
      </a>
    </Link>
  );

  return isMobileWidth ? (
    <MobileNavbar mobile={isMobileWidth} search={search} />
  ) : (
    <nav className={classes.navbarContainer}>
      <div className={classes.logoBox}>
        <Logo mobile={isMobileWidth} />
      </div>

      <div className={classes.searchBox}>{search === null ? null : search}</div>

      <ul className={classes.tabsBox}>
        <NavItem />
      </ul>

      <div className={classes.sideBox}>
        <div className={classes.container}>
          {vipAccount}
          <div className={classes.profile}>
            <>{button}</>
          </div>
          {!isLogin ? <div>{authentication}</div> : null}
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);








// Mobile Navbar

import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { ArrowDropDownRounded, Menu as MenuIcon } from "@material-ui/icons";
import React, { useState } from "react";
import classes from "./mobileNavbar.module.css";
import Logo from "../navbar/logo/Logo";
import NavbarDrawer from "./drawer/NavbarDrawer";
import {
  Avatar,
  Button as MenuButton,
  MenuItem,
  Menu,
} from "@material-ui/core";
import { deAuthenticate } from "../../../services/deAuthenticationService";
import { clearCookies } from "../../../helper/auth/cookies";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const MobileNavbar = ({ mobile ,search}) => {
  const [open, setOpen] = useState(false);
  const onCloseHandler = () => setOpen(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [userAvatar, setUserAvatar] = useState("");
  let isLogin = !!Cookies.getJSON("isLogin");
  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (path) => {
    setAnchorEl(null);
    router.push(path);
  };

  const dashboardHandler = () => {
    router.push("/dashboard");
    setAnchorEl(null);
  };
  const logoutHandler = () => {
    deAuthenticate();
    setAnchorEl(null);
    clearCookies();
    window.location.reload();
  };

  const userMenu = (
    <div className={classes.avatarBox}>
      <MenuButton
        style={{ backgroundColor: "transparent" }}
        onClick={handleClick}
      >
        <Avatar
          className={classes.avatarPic}
          src={userAvatar}
          alt="profile-image"
        />
        <ArrowDropDownRounded
          fontSize="large"
          color="primary"
          className={classes.arrowDropDownRoundedIcon}
        />
      </MenuButton>
      <Menu
        className={classes.menu}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => handleClose("/feed")}
          className={classes.menuItem}
        >
          <div>
            <img src="/svg/layout/feed.svg" alt="feed" />
          </div>
          <p>فید</p>
        </MenuItem>
        <MenuItem onClick={dashboardHandler} className={classes.menuItem}>
          <div>
            <img src="/svg/layout/dashboard.svg" alt="dashboard" />
          </div>
          <p>داشبورد</p>
        </MenuItem>
        <MenuItem
          onClick={() => handleClose("/dashboard")}
          className={classes.menuItem}
        >
          <div>
            <img
              src="/svg/layout/company-management.svg"
              alt="company-management"
            />
          </div>
          <p>مدیریت شرکت</p>
        </MenuItem>
        <MenuItem
          onClick={() => handleClose("/dashboard/lists")}
          className={classes.menuItem}
        >
          <div>
            <img src="/svg/layout/list-management.svg" alt="list-management" />
          </div>
          <p>مدیریت لیست</p>
        </MenuItem>
        <MenuItem onClick={logoutHandler} className={classes.menuItem}>
          <div>
            <img src="/svg/layout/logout.svg" alt="logout" />
          </div>
          <p>خروج‌ از حساب </p>
        </MenuItem>
      </Menu>
    </div>
  );

  return (
    <React.Fragment>
          <NavbarDrawer open={open} onClose={onCloseHandler} />
         
          <AppBar position="fixed" color="default">
              <Toolbar className={classes.innerToolbar}>
                  <Logo mobile={mobile}/>
        
                  <div className={classes.searchBox}>{search === null ? null : search}</div>
              <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  onClick={() => setOpen(true)}
              >
                  <MenuIcon />
              </IconButton>
                  {isLogin ? userMenu : null}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};

export default MobileNavbar;
