import classNames from "classnames/bind";
import styles from "./NavBarItem.module.scss";

import React from "react";

const cx = classNames.bind(styles);
const NavBarItem = (props) => {
  return (
    <div className={cx("container")}>
      {props.navBarData.map((item, index) => {
        return (
          <li
            key={index}
            className={cx(
              "container-service",
              `${item.active ? "active" : ""}`
            )}
          >
            <i className={cx(`fa ${item.icon}`)}></i>
            <span className={cx("text")}>{item.type}</span>
          </li>
        );
      })}
    </div>
  );
};

export default NavBarItem;
