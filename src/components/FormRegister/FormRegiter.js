import React from 'react';
import classNames from 'classnames/bind';
import styles from './FormRegiter.module.scss';

const cx = classNames.bind(styles);

const FormRegiter = () => {
	return (
		<div className={cx('container')}>
			<h2 className={cx('title')}> Save time, save money! </h2>
			<p className={cx('sub-title')}>sign up and we'll send the best deals to you</p>
			<div className={cx('input-form')}>
				<input className={cx('input')} type="email" placeholder="Your Email" />
				<button className={cx('btn-subscribe')}>subscribe</button>
			</div>
		</div>
	);
};

export default FormRegiter;
