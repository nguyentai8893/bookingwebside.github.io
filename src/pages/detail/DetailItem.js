import React from 'react';
import classNames from 'classnames/bind';
import styles from './DetailItem.module.scss';
import DetailImage from './DetailImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const DetailItem = (props) => {
	console.log(props.detail);
	return (
		<div className={cx('container')}>
			<div className={cx('container-conten')}>
				<div className={cx('container-flex')}>
					<h3 className={cx('name')}>{props.detail.name}</h3>
					<button className={cx('btn')}>Reserve or Book Now</button>
				</div>
				<p className={cx('position')}>
					<FontAwesomeIcon className={cx('icon')} icon={faLocationDot} />
					{props.detail.address}
				</p>

				<p className={cx('distance')}>{props.detail.distance}</p>
				<p className={cx('price')}>{props.detail.price}</p>
				<DetailImage image={props.detail.photos} />
				<div className={cx('text-price')}>
					<div className={cx('text')}>
						<h3 className={cx('text-h3')}>{props.detail.title}</h3>
						<p>
							Right in the city center. Located a short distance from the St. Florian in Krakow 5 minutes' walk, Tower Street
							Apartments offers accommodation with air conditioning and free Wi-Fi. Guest rooms feature hardwood floors and a
							fully equipped kitchenette with an oven microwave, flat-screen TV and private bathroom with shower and hairdryer.
							There are also refrigerator, electric teapot and coffee maker. Popular points of interest near the apartment
							Including Cloth Hall, Main Market Square and City Hall Tower. The nearest airport is John Paul II International
							Krakow- Balice, 16.1 km from Tower Street Apartments, and the hotel offers a chargeable airport shuttle service.
						</p>
					</div>
					<div className={cx('price-btn')}>
						<h5>Perfect for a 9 night stay!</h5>
						<p>Located in the heart of Krakow, This property has a score great mind - 9.8!</p>
						<p className={cx('price-p')}>
							${props.detail.nine_night_price}
							<span>(9 nights)</span>
						</p>
						<button className={cx('btn')}>Reserve or Book Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailItem;
