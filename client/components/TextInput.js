import React from 'react';

const TextInput = (props) => (
	<div className='field'>
		<label>{props.inputLabel}</label>
		<div className='ui fluid input'>
			<input
				type={props.inputType}
				placeholder={props.inputPlaceholder}
				onChange={(e) => props.inputOnchange(e.target.value)}
				value={props.inputValue}
				required
			/>
		</div>
	</div>
);

export default TextInput;
