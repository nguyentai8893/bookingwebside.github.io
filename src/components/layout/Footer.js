import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import footerList from '../../data/footer.json';
import FooterItem from './FooterItem';

const cx = classNames.bind(styles);

const Footer = () => {
	return (
		<div className={cx('container')}>
			{footerList.map((item, index) => {
				return <FooterItem key={index} footer={item} />;
			})}
		</div>
	);
};

export default Footer;
