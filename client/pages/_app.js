import 'semantic-ui-css/semantic.min.css';
import Nav from '../components/Nav';
import { Provider } from '../context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FirebaseAuthState from '../components/FirebaseAuthState';
export default function MyApp({ Component, pageProps }) {
	return (
		<Provider>
			<FirebaseAuthState>
				<Nav />
				<ToastContainer />
				<Component {...pageProps} />
			</FirebaseAuthState>
		</Provider>
	);
}
