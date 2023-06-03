import React from 'react';
import SearchListItem from './SearchListItem';
import classNames from 'classnames/bind';
import styles from './SearchList.module.scss';
import searchList from '../../data/search.json';

const cx = classNames.bind(styles);
const SearchList = () => {
	return (
		<div>
			{searchList.map((item, index) => {
				return (
					<div key={index}>
						<SearchListItem search={item} />
					</div>
				);
			})}
		</div>
	);
};

export default SearchList;
