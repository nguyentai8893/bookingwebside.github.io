import React from 'react';
import classNames from 'classnames/bind';
import styles from './DetailImage.module.scss';

const cx = classNames.bind(styles);
const DetailImage = (props) => {
	console.log(props.image);
	return (
		<div className={cx('container')}>
			{props.image.map((item, index) => {
				return <img key={index} className={cx('image')} src={item} placeholder="holtel" />;
			})}
		</div>
	);
};

export default DetailImage;
