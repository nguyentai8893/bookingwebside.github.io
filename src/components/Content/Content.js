import React from 'react';
import City from '../City';
import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import Holtel from '../Holtels';
import Homes from '../Homes';

const cx = classNames.bind(styles);

const Content = () => {
	return (
		<div>
			<City />
			<h3 className={cx('title')}>Browse by property type</h3>
			<Holtel />
			<h3 className={cx('title')}>Home guests love</h3>
			<Homes />
		</div>
	);
};

export default Content;
