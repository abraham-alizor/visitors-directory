import React, { Component } from 'react';
import CardList from './components/cardList/CardList';
import SearchComponent from './components/SearchComponent';
import './App.css';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			visitors: [],
			searchField: '',
		};
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ visitors: users }));
	}

	handleChange = (e) => {
		this.setState({ searchField: e.target.value });
	};
	render() {
		const { visitors, searchField } = this.state;
		const filteredVisitors = visitors.filter((visitor) =>
			visitor.name.toString().toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className='w-full lg:pr-32 lg:pl-32 flex flex-col items-center bg-white dark:bg-gray-800'>
				<h1 className='dark:text-purple-200'>Visitors Directory</h1>
				<SearchComponent placeHolder=' search users' handleChange={this.handleChange} />
				<CardList visitors={filteredVisitors} />
			</div>
		);
	}
}
