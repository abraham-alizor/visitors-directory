import React from 'react';
import Card from './Card';
export default function CardList(props) {
	return (
		<>
			<div className='md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 gap-8'>
				{props.visitors.map((user) => {
					return <Card key={user.id} user={user} />;
				})}
			</div>
		</>
	);
}
