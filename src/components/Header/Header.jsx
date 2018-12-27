import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import SideNav from './SideNav/SideNav'

const Header = props => {
  const logo = () => {
    return (
      <Link to="/" className={classes.logo}>
        <img src="/images/nba_logo.png" alt="nba logo" />
      </Link>
    );
  };
  const navBars = () => (
    //we can skip including the return keyword and just write the jsx we want to return-not that we used the curly braces after the fat arrow symbol and not the curly braces
    <div className={classes.bars}>
      <FontAwesome name="bars"
      onClick={props.onOpenNav}
      
      style={{
          color:'#dfdfdf',
          padding:'10px',
          cursor:'pointer'
      }}/>
    </div>
  );

  return (
    <header className={classes.header}>
    <SideNav {...props}/>
      <div className={classes.headerOpt}>
        {navBars()}
        {logo()}
      </div>
    </header>
  );
};

export default Header;
