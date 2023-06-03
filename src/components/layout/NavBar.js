import React from 'react';
import classNames from 'classnames/bind';
import styles from './NavBar.module.scss';
import NavBarItem from '../NavBarItem';
import Button from '../button/Button';
import Input from '../Input';
import Header from './Header';
const cx = classNames.bind(styles);
const navBarData = [
	{
		type: 'Stays',
		icon: 'fa-bed',
		active: true,
	},
	{
		type: 'Flights',
		icon: 'fa-plane',
		active: false,
	},
	{
		type: 'Car rentals',
		icon: 'fa-car',
		active: false,
	},
	{
		type: 'Attractions',
		icon: 'fa-bed',
		active: false,
	},
	{
		type: 'Airport taxis',
		icon: 'fa-taxi',
		active: false,
	},
];

const NavBar = () => {
	return (
		<div className={cx('navbar-container')}>
			<div className={cx('container-item')}>
				<h1 className={cx('heading')}>Booking Webside</h1>
				<Button />
			</div>
			<NavBarItem navBarData={navBarData} />
			<Header />
		</div>
	);
};

export default NavBar;
