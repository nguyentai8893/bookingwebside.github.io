import React from 'react';
import classNames from 'classnames/bind';
import styles from '../City/CityItem.module.scss';

const cx = classNames.bind(styles);

const CityItem = (props) => {
	return (
		<div className={cx('card')}>
			<img src={props.city.image} className={cx('card-image')} />
			<div className={cx('enclose-text')}>
				<h3 className={cx('name-city')}>{props.city.name}</h3>
				<span className={cx('title')}>{props.city.subText}</span>
			</div>
		</div>
	);
};

export default CityItem;
