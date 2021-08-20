import firebase from '../firebase';
import { useState } from 'react';
import { useRouter } from 'next/router';
import LoginForm from '../components/LoginForm';
import { toast } from 'react-toastify';
import Link from 'next/link';
const Login = () => {
	const [loginEmail, setLoginEmail] = useState('123@gmail.com');
	const [loginPass, setLoginPass] = useState('123456');
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const login = async () => {
		setLoading(true);
		console.log(loginEmail, loginPass);
		await firebase
			.auth()
			.signInWithEmailAndPassword(loginEmail, loginPass)
			.then((user) => {
				console.log('LOGIN', user);
				router.push('/');
			})
			.catch((err) => {
				console.log(err);
				toast(err.message);
				setLoading(false);
			});
	};

	return (
		<>
			<div>
				<h2 className='ui header center aligned'>
					{loading ? <div class='ui active centered inline loader'></div> : 'Login'}
				</h2>
			</div>
			<div className='ui container'>
				<LoginForm
					email={loginEmail}
					setEmail={setLoginEmail}
					pass={loginPass}
					setPass={setLoginPass}
					handleSubmit={login}
				/>
				<Link href='/resetPass'>
					<a className='ui btn'>Reset Password</a>
				</Link>
			</div>
		</>
	);
};

export default Login;
