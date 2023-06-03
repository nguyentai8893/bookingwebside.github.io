import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';
import { faBed, faCalendar, faCircleXmark, faFemale } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
const cx = classNames.bind(styles);

const Input = () => {
	const [picker, setPicker] = useState(false);
	const [state, setState] = useState([
		{
			startDate: new Date(),
			endDate: null,
			key: 'selection',
		},
	]);
	const handleClikInput = () => {
		setPicker(true);
	};
	const handleClick = (e) => {
		e.preventDefault();
		window.location.replace('/search');
	};
	const handleChange = (item) => {
		setState([item.selection]);
	};
	const handleHide = () => {
		setPicker(false);
	};

	return (
		<form className={cx('form-input')}>
			<div>
				<FontAwesomeIcon className={cx('icon')} icon={faBed} />
				<input className={cx('input')} type="text" placeholder="Where are going?" />
			</div>
			<div>
				<FontAwesomeIcon className={cx('icon')} icon={faCalendar} />
				<input onClick={handleClikInput} className={cx('input')} type="number" placeholder="06/24/2022 to 06/24/2023" />
			</div>
			{picker ? (
				<div className={cx('date-range-container')}>
					<FontAwesomeIcon onClick={handleHide} className={cx('icon-x')} icon={faCircleXmark} />

					<DateRange
						className={cx('date-range')}
						editableDateInputs={true}
						onChange={handleChange}
						moveRangeOnFirstSelection={false}
						ranges={state}
					/>
				</div>
			) : null}
			<div>
				<FontAwesomeIcon className={cx('icon')} icon={faFemale} />
				<input className={cx('input')} type="number" placeholder="1 adult - 0 children - 1 room" />
			</div>
			<button onClick={handleClick} className={cx('btn-search')}>
				Search
			</button>
		</form>
	);
};

export default Input;
