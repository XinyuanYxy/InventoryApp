import Link from 'next/link';
import { useContext } from 'react';
import { async } from 'regenerator-runtime';
import { Context } from '../context';
import firebase from '../firebase';
import { useRouter } from 'next/router';
const Nav = () => {
	const {
		state: { user },
		dispatch,
	} = useContext(Context);
	// const { user } = state;
	const router = useRouter();
	const handleLogout = async () => {
		await firebase.auth().signOut();
		dispatch({
			type: 'Logout',
		});
		router.push('/login');
	};
	return (
		<nav>
			<div className='ui pointing secondary menu'>
				<Link href='/'>
					<a className='item'>Home</a>
				</Link>
				<Link href={user ? '/Products/products' : '/login'}>
					<a className='item'>Products</a>
				</Link>
				{user ? (
					<div className='right menu'>
						<a onClick={handleLogout} className='item'>
							{user.email} - Logout
						</a>
					</div>
				) : (
					<div className='right menu'>
						<Link href='/login'>
							<a className='item'>Login </a>
						</Link>
						<Link href='/register'>
							<a className='item'>Register</a>
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Nav;
