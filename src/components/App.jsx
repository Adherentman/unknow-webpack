import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { LoadLoginForm, LoadRegisterForm, LoadDashBoard } from '../routes/back';
import LoginForm from '../backstage/components/Auth/LoginForm';
import Photos from '../backstage/views/photos/Photos';
import Posts from '../backstage/views/posts/Posts';

const Home = ({ match }) => <div>{match.params.id}</div>;
class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route exact={true} path="/dashboard" component={LoadDashBoard} />
						<Route exact={true} path="/dashboard/:id" component={Home} />
						<Route path="/posts" component={Photos} />
						<Route path="/photo" component={Posts} />
						<Route exact={true} path="/register" component={LoadRegisterForm} />
						<Route exact={true} path="/" component={LoginForm} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
