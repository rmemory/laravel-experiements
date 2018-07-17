import React, { Component, Fragment } from 'react';
import axios from 'axios';

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

	getUsers() {
		axios('https://api.randomuser.me/?nat=US&results=5')
			.then(response => this.setState({ users: response.data.results }));
	}

	render() {
		return (<div>
			{!this.state.loading ? 
				this.state.users.map((user) => {
					return (
						<Fragment>
							<h3>{user.name.first}</h3>
							<p>{user.email}</p>
							<hr/>
						</Fragment>
					)
				}
				): 'Loading'}
			</div>);
	}
}

export default App;
