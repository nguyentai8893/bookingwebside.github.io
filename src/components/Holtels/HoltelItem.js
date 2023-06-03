import React from 'react';
import classNames from 'classnames/bind';
import styles from './HoltelItem.module.scss';

const cx = classNames.bind(styles);

const HoltelItem = ({ holtel: { name, image, count } }) => {
	return (
		<div className={cx('container')}>
			<div className={cx('card')}>
				<img src={image} className={cx('card-image')} />
			</div>
			<span className={cx('enclose-text')}>
				<h3 className={cx('name-holtel')}>{name}</h3>
				<span className={cx('count-holtel')}>{count}</span>
			</span>
		</div>
	);
};

export default HoltelItem;
