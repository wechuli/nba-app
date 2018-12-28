import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import { CURRENT_YEAR } from "../../config";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Link to="/" className={classes.logo}>
        <img src="/images/nba_logo.png" alt="nba logo" />
      </Link>
      <div className={classes.right}>
        @NBA {CURRENT_YEAR} All rights reserved
      </div>
    </div>
  );
};

export default Footer;
