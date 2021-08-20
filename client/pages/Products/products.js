import ProductCard from '../../components/ProductCard';
//file name not function name
import { parseCookies } from 'nookies';
import axios from 'axios';
const product = () => {
	return (
		<div className='ui cards container' style={{ marginTop: '3px' }}>
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</div>
	);
};

export async function getServerSideProps(context) {
	try {
		const cookies = parseCookies(context);
		console.log('nookies sending token', cookies);
		const { data } = await axios.get(`${process.env.api}/private-route`, {
			headers: { token: cookies.token },
		});
		console.log('private route', data);
		if (data.ok) {
			return {
				props: {}, // will be passed to the page component as props
			};
		}
	} catch (err) {
		return {
			redirect: {
				permanent: false,
				destination: '/login',
			},
			props: {},
		};
	}
}

export default product;
