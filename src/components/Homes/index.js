import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import HomeItem from './HomeItem';
import hotelList from '../../data/hotel_list.json';

const cx = classNames.bind(styles);
const Homes = () => {
	return (
		<div className={cx('container')}>
			{hotelList.map((item, index) => {
				return <HomeItem key={index} {...item} />;
			})}
		</div>
	);
};

export default Homes;
