import React from 'react';
import HoltelItem from './HoltelItem';
import holtelarr from '../../data/type.json';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Holtel = () => {
	return (
		<div className={cx('container')}>
			{holtelarr.map((item, index) => {
				return (
					<div key={index}>
						<HoltelItem holtel={item} />
					</div>
				);
			})}
		</div>
	);
};

export default Holtel;
