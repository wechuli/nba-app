import React from "react";
import classes from "./SideNavItems.module.css";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

const SideNavItems = props => {
  const items = [
    {
      type: classes.option,
      icon: "home",
      text: "Home",
      link: "/"
    },
    {
      type: classes.option,
      icon: "file-text-o",
      text: "News",
      link: "/news"
    },
    {
      type: classes.option,
      icon: "play",
      text: "Videos",
      link: "/videos"
    },
    {
      type: classes.option,
      icon: "sign-in",
      text: "Sign in",
      link: "/sign-in"
    },
    {
      type: classes.option,
      icon: "sign-out",
      text: "Sign out",
      link: "/sign-out"
    }
  ];
  const showItems = () => {
    return items.map((item, index) => {
      return (
        <div className={item.type} key={index}>
          <Link to={`${item.link}`} onClick={props.hideNav}>
            <FontAwesome name={item.icon} />
            {item.text}
          </Link>
        </div>
      );
    });
  };

  return <div>{showItems()}</div>;
};

export default SideNavItems;
