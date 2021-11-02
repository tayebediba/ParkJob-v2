import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logos from "./../../assets/Icons/dashboardIcon/logos.svg";
import classes from "./navbarHome.module.css";
import Cookies from "js-cookie";
import account from "../../assets/Icons/home/account.svg";
import { Button, Menu, MenuItem } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MobileNavbar from "./MobileNavbar";
const NavbarHome = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMobileWidth, setIsMobileWidth] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) setIsMobileWidth(true);
      else setIsMobileWidth(false);
    });
    if (window.innerWidth <= 600) setIsMobileWidth(true);
    else setIsMobileWidth(false);

    return () => {};
  }, []);

  return isMobileWidth ? (
    <MobileNavbar mobile={isMobileWidth} />
  ) : (
    <nav className={classes.navbarbox}>
      <Menu
        style={{ marginTop: "2.5rem" }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link className={classes.linkMenu} to="/ProjectsList">
            طراحی و گرافیک
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className={classes.linkMenu} to="">
            تولید محتوا
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className={classes.linkMenu} to="">
            ترجمه و تایپ
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className={classes.linkMenu} to="">
            دیجیتال مارکتینگ سئو
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className={classes.linkMenu} to="">
            عکس , انیمشین و ویدئو
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className={classes.linkMenu} to="">
            طراحی سایت
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className={classes.linkMenu} to="">
            برنامه نویسی,نرم افزار
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className={classes.linkMenu} to="">
            سایر کسب و کارها
          </Link>
        </MenuItem>
      </Menu>
      <div className={classes.logoBox}>
        <img src={logos} alt="parkJab-logo" />
      </div>

      <div className={classes.navItems}>
        <Link to="/">صفحه اصلی</Link>
        <Button 
          className={classes.dropdownList}
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          endIcon={<ArrowDropDownIcon />}
          onClick={handleClick}
        >
          پروژه ها
        </Button>

        <Link to="/Freelancers">فریلنسرها</Link>

        <Link to="/PricingTableCommonPage">طرح های عضویت</Link>

        <Link to="/HomeAboutUs">درباره ما</Link>
      </div>
      <div className={classes.navBtn}>
        {Cookies.getJSON("login") ? (
          <button className={`${classes.btnAccount} ${classes.btn}`}>
            <img src={account} alt="account-svg" />
            <Link to={{ pathname: "/dashboard", data: false }}>
              حساب کاربری
            </Link>
          </button>
        ) : (
          <>
            <button className={`${classes.btnSignIn} ${classes.btn}`}>
              <Link to={{ pathname: "/login", data: true }}> ورود</Link>
            </button>
            <button className={`${classes.btnSignUp} ${classes.btn}`}>
              <Link to={{ pathname: "/signUp", data: false }}> ثبت نام</Link>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavbarHome;
