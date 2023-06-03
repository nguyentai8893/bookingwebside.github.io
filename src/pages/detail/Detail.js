import DetailItem from './DetailItem';
import detailData from '../../data/detail.json';
import NavBar from '../../components/layout/NavBar';
import FormContainer from '../../components/FormRegister/FormContainer';
import Footer from '../../components/layout/Footer';
const Detail = () => {
	return (
		<div>
			<NavBar />
			<DetailItem detail={detailData} />
			<FormContainer />
			<Footer />
		</div>
	);
};

export default Detail;
