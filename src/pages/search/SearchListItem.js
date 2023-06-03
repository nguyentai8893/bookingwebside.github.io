import React from 'react';
import classNames from 'classnames/bind';
import styles from './SearchListItem.module.scss';

const cx = classNames.bind(styles);

const SearchListItem = (props) => {
	return (
		<div className={cx('container')}>
			<div className={cx('content-image')}>
				<img className={cx('image')} src={props.search.image_url} />
			</div>
			<div className={cx('content-des')}>
				<h3 className={cx('description-name')}>{props.search.name}</h3>
				<p className={cx('description-rate')}>{props.search.distance} from center</p>
				<br />
				<p className={cx('description-tag')}>{props.search.tag}</p>
				<h4 className={cx('description-studio')}>{props.search.description}</h4>
				<p className={cx('description-type')}>{props.search.type}</p>
				{props.search.free_cancel ? (
					<div className={cx('frecancel')}>
						<h4 className={cx('')}>Free cancellaation</h4>
						<p className={cx('description-true')}>you can camcel later, so lock in this grest price today!</p>
					</div>
				) : (
					''
				)}
			</div>
			<div className={cx('conten-price')}>
				<div className={cx('description-name-rate')}>
					<p className={cx('description-rate-text')}>{props.search.rate_text}</p>
					<p className={cx('description-rate')}>{props.search.rate}</p>
				</div>
				<div className={cx('price')}>
					<p className={cx('price-price')}>${props.search.price}</p>
					<p className={cx('price-text')}>includes taxes and fees</p>
				</div>
				<div className={cx('price-btn')}>
					<button className={cx('btn')}> see availability</button>
				</div>
			</div>
		</div>
	);
};

export default SearchListItem;
