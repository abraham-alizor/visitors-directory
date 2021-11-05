import React from 'react';

export default function Card(props) {
	return (
		<div className='mt-4 px-3 lg:mt-0 bg-purple-100 rounded-2xl h-52  transition duration-500 ease-in-out hover:bg-red-300 transform hover:scale-110 hover:-translate-y-1 flex flex-col justify-center items-center'>
			<img src={`https://i.pravatar.cc/120?img=${props.user.id}`} class='rounded-full' alt='' />
			<h2 class='font-bold mt-4 text-gray-600 dark:text-gray-300'>{props.user.name}</h2>
			<p className='text-gray-600 dark:text-gray-300'>{props.user.email}</p>
		</div>
	);
}
