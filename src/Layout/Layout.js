import React from "react";
import FooterHome from "./footerHome/FooterHome";
import NavbarHome from './navbarHome/NavbarHome'
import classes from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={classes.container}>
      <NavbarHome />
      <main className={classes.main}>{children}</main>
      <FooterHome />
    </div>
  );
};

export default Layout;
