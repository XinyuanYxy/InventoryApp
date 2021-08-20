import React from 'react';
const productCard = (props) => (
	<div className='ui card'>
		<div className='content'>
			<div className='header'>Product Name</div>
			<div className='meta'>serial number and model</div>
			<div className='description'>unit of measurement:</div>
			<div className='description'>price:</div>
			<div className='description'>instock:</div>
			<div className='description'>transaction history:</div>
		</div>
		<div className='extra content'>
			<div className='ui two buttons'>
				<button className='ui green basic button'>Edit</button>
				<button className='ui red basic button'>Delete</button>
			</div>
		</div>
	</div>
);
export default productCard;
