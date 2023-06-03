import React from 'react';
import classNames from 'classnames/bind';
import styles from './FooterItem.module.scss';

const cx = classNames.bind(styles);

const FooterItem = (props) => {
	return (
		<div className={cx('footer-col')}>
			{props.footer.col_values.map((item, index) => {
				return (
					<a key={index} className={cx('footer-link')} href="/">
						<li className={cx('footer-list')}>{item}</li>
					</a>
				);
			})}
		</div>
	);
};

export default FooterItem;
