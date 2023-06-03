import Footer from '../../components/layout/Footer';
import NavBar from '../../components/layout/NavBar';
import SearchPopup from './SearchPopup';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import SearchList from './SearchList';

const cx = classNames.bind(styles);

const Search = () => {
	return (
		<div>
			<NavBar />
			<div className={cx('content-search')}>
				<div className={cx('container')}>
					<SearchPopup />
					<SearchList />
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Search;
