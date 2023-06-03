import NavBar from '../../components/layout/NavBar';
import Content from '../../components/Content/Content';
import FormContainer from '../../components/FormRegister/FormContainer';
import Footer from '../../components/layout/Footer';
import Input from '../../components/Input';

const Home = () => {
	return (
		<div>
			<NavBar />
			<Input />
			<Content />
			<FormContainer />
			<Footer />
		</div>
	);
};

export default Home;
