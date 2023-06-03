import React from 'react';
import classNames from 'classnames/bind';
import city from '../../data/city.json';
import styles from './index.module.scss';
import CityItem from './CityItem';

const cx = classNames.bind(styles);
const City = () => {
	return (
		<div className={cx('container')}>
			{city.map((item, index) => {
				return (
					<div key={index}>
						<CityItem key={index} city={item} />
					</div>
				);
			})}
		</div>
	);
};

export default City;
