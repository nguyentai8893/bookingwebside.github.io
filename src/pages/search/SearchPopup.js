import React from 'react';
import classNames from 'classnames/bind';
import styles from './SearchPopup.module.scss';

const cx = classNames.bind(styles);
const SearchPopup = () => {
	return (
		<div className={cx('container')}>
			<div className={cx('container-sidebar')}>
				<h1 className={cx('search-tilte')}>Search</h1>
				<div>
					<p>Destination</p>
					<input className={cx('input-search')} />
					<p>Check-in Date</p>
					<input className={cx('input-search')} type="number" placeholder="06/24/2022 to 06/24/2023" />
				</div>
				<p>Optinons</p>
				<div className={cx('options')}>
					<p className={cx('option-input')}>
						<span>Min price per night</span>
						<input className={cx('input')} type="number" />
					</p>
					<p className={cx('option-input')}>
						<span>Max price per night</span>
						<input className={cx('input')} type="number" />
					</p>
					<p className={cx('option-input')}>
						<span>Adult</span>
						<input className={cx('input')} type="number" />
					</p>
					<p className={cx('option-input')}>
						<span>Children</span>
						<input className={cx('input')} type="number" />
					</p>
					<p className={cx('option-input')}>
						<span>Room</span>
						<input className={cx('input')} type="number" />
					</p>
				</div>
				<button className={cx('search-btn')}> Search</button>
			</div>
		</div>
	);
};

export default SearchPopup;
