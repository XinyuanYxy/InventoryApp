import React from 'react';
import TextInput from './TextInput';
const RegisterForm = (props) => (
	<form className='ui form container'>
		<div className='equal width fields'>
			<TextInput
				inputLabel='First Name'
				inputType='text'
				inputPlaceholder='First Name'
				inputOnchange={props.setFirstName}
				inputValue={props.firstName}
			/>
			<TextInput
				inputLabel='Last Name'
				inputType='text'
				inputPlaceholder='Last Name'
				inputOnchange={props.setLastName}
				inputValue={props.lastName}
			/>
			<TextInput
				inputLabel='Gender'
				inputType='text'
				inputPlaceholder='Gender'
				inputOnchange={props.setGender}
				inputValue={props.gender}
			/>
			<TextInput
				inputLabel='Phone Number'
				inputType='tel'
				inputPlaceholder='Phone Number'
				inputOnchange={props.setPhoneNum}
				inputValue={props.phoneNum}
			/>
			<TextInput
				inputLabel='Email'
				inputType='email'
				inputPlaceholder='email'
				inputOnchange={props.setEmail}
				inputValue={props.email}
			/>

			<TextInput
				inputLabel='Password'
				inputType='password'
				inputPlaceholder='Password'
				inputOnchange={props.setPass}
				inputValue={props.pass}
			/>
		</div>
		<div className='field'>
			<div className='ui button' onClick={props.handleSubmit}>
				Register
			</div>
		</div>
	</form>
);

export default RegisterForm;
