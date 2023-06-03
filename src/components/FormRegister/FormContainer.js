import React from 'react';
import FormRegiter from './FormRegiter';
import classNames from 'classnames/bind';
import styles from './FormContainer.module.scss';

const cx = classNames.bind(styles);

const FormContainer = () => {
	return (
		<div className={cx('container')}>
			<FormRegiter />
		</div>
	);
};

export default FormContainer;
