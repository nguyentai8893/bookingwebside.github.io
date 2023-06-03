import React from "react";
import classNames from "classnames/bind";
import styles from './Header.module.scss'
import Button from "../button/Button";
 const cx = classNames.bind(styles)

const Header = () => {
  return <header className={cx('header')}>
    <h1 className={cx('header-title')}> Alifrtime of discounts? It's Genius.</h1>
    <span className={cx('sub-title')}>Get rewarded for your travels - unlock install savings of 10% or more with a free acount</span><br/>
    <button className={cx('btn')}>Sign in/Register</button>
  </header>;
};

export default Header;
