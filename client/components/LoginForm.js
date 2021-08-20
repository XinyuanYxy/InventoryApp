import React from 'react';

const LoginForm = (props) => (
	<form className='ui form container'>
		<div className='equal width fields'>
			<div className='field'>
				<label>Email</label>
				<div className='ui fluid input'>
					<input
						type='email'
						placeholder='Email'
						onChange={(e) => props.setEmail(e.target.value)}
						value={props.email}
					/>
				</div>
			</div>
			<div className='field'>
				<label>Password</label>
				<div className='ui fluid input'>
					<input
						type='password'
						placeholder='Password'
						onChange={(e) => props.setPass(e.target.value)}
						value={props.pass}
					/>
				</div>
			</div>
		</div>
		<div className='field'>
			<div className='ui button' onClick={props.handleSubmit}>
				Login
			</div>
		</div>
	</form>
);

export default LoginForm;
