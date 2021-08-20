import firebase from '../firebase';
import { useState } from 'react';
import { useRouter } from 'next/router';
import RegisterForm from '../components/RegisterForm';
import { toast } from 'react-toastify';

const Register = () => {
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerGender, setRegisterGender] = useState('');
	const [registerFirstName, setRegisterFirstName] = useState('');
	const [registerPhoneNum, setRegisterPhoneNum] = useState('');
	const [registerLastName, setRegisterLastName] = useState('');
	const [registerPass, setRegisterPass] = useState('');
	// const [name, setName] = useState('');
	// const [gender, setGender] = useState('');
	// const [phonenum, setPhoneNum] = useState('');
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const register = async () => {
		console.log('REGISTER');
		console.log(
			registerEmail,
			registerFirstName,
			registerLastName,
			registerGender,
			registerPhoneNum
		);
		await firebase
			.auth()
			.createUserWithEmailAndPassword(registerEmail, registerPass)
			.then((user) => {
				console.log('Register done: ', user);
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
					{loading ? (
						<div class='ui active centered inline loader'></div>
					) : (
						'Register'
					)}
				</h2>
			</div>
			<div className='ui container'>
				<RegisterForm
					email={registerEmail}
					setEmail={setRegisterEmail}
					pass={registerPass}
					setPass={setRegisterPass}
					gender={registerGender}
					setGender={setRegisterGender}
					firstName={registerFirstName}
					setFirstName={setRegisterFirstName}
					lastName={registerLastName}
					setLastName={setRegisterLastName}
					phoneNum={registerPhoneNum}
					setPhoneNum={setRegisterPhoneNum}
					handleSubmit={register}
				/>
			</div>
		</>
	);
};

export default Register;
