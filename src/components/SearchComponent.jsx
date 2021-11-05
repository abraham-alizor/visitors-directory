import React, { Component } from 'react';

export default function Search({ placeHolder, handleChange }) {
	return (
		<div>
			<input
				className='py-2 px-3 border-none rounded-lg m-8 outline-none bg-red-100'
				type='search'
				placeholder={placeHolder}
				onChange={handleChange}
			/>
		</div>
	);
}
