import React from 'react';
import classNames from 'classnames/bind'
import styles from './Button.module.scss'
const cx = classNames.bind(styles)
const Button = () => {
    return (
        <div className={cx('btn-container')}>
            <button className={cx('btn')} >Register</button>
            <button className={cx('btn')} >Login</button>
        </div>
    );
};

export default Button;