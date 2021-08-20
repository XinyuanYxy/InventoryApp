import { useState, useEffect, useContext } from 'react';
import firebase from '../firebase';
import { useRouter } from 'next/router';
import { Context } from '../context';
import { toast } from 'react-toastify';
const passwordReset = () => {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);
	const {
		state: { user },
	} = useContext(Context);

	let router = useRouter();

	useEffect(() => {
		if (user !== null) {
			router.push('/');
		}
	}, [user]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		const config = {
			url: process.env.passwordResetRedirect,
			handleCodeInApp: true,
		};

		await firebase
			.auth()
			.sendPasswordResetEmail(email, config)
			.then(() => {
				setEmail('');
				setLoading(false);
				toast('Check your email for password reset link');
			})
			.catch((err) => {
				setLoading(false);
				toast(err.message);
			});
	};
	return (
		<div className='ui container'>
			<h2 className='ui header center aligned'>
				If you have already registered, you can enter your email address to receive
				a password reset link
			</h2>
			<form className='ui form'>
				<div className='field'>
					<input
						type='email'
						className='ui input'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder='Type your email'
						autoFocus
					/>
				</div>
				<div>
					<div
						className='ui primary button'
						disabled={!email || loading}
						onClick={handleSubmit}
					>
						{loading ? 'Processing...' : 'Submit'}
					</div>
				</div>
			</form>
		</div>
	);
};

export default passwordReset;
