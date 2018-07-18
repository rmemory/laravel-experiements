import React, { Component } from 'react';
import axios from 'axios';

import Loading from './Loading.jsx';

class App extends Component {
	state = {
		users: [],
		loading: true,
	}

	componentWillMount() {
		this.state.loading = true;
		this.getUsers();
		this.state.loading = false;
	}

	getUsers = () => {
		axios('https://api.randomuser.me/?nat=US&results=5')
			.then(response => this.setState({ users: [...this.state.users, ...response.data.results] }));
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.getUsers();
	}

	render() {
		const { loading, users} = this.state;
		return (
			<div>
				{!loading ?
					users.map(user => (
						<div key={user.id.value}>
							<h3 style={{ color: 'red' }}>
								{user.name.first}
							</h3>
							<p>
								{user.email}
							</p>
							<hr />
						</div>
					),
					) : <Loading message="users" />}
				<form onSubmit={this.handleSubmit}>
					<input type="submit" value="load users" />
				</form>
			</div>);
	}
}

export default App;
