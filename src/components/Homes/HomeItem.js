import React from 'react';
import classNames from 'classnames/bind';
import styles from './HomeItem.module.scss';

const cx = classNames.bind(styles);

const HomeItem = ({ name, city, price, rate, type, image_url }) => {
	return (
		<div className={cx('container')}>
			<div className={cx('card')}>
				<img src={image_url} className={cx('card-image')} />
			</div>
			<a href="/detail" rel={name} className={cx('card-name')}>
				{name}
			</a>
			<span>
				<p className={cx('card-city')}>{city}</p>
				<p className={cx('card-price')}> Starting from ${price}</p>
				<span className={cx('card-rate-type')}>
					<p className={cx('card-rate')}> {rate} </p>
					<p className={cx('card-type')}> {type} </p>
				</span>
			</span>
		</div>
	);
};

export default HomeItem;
