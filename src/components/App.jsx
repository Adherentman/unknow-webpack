import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoadLoginForm, LoadRegisterForm, LoadDashBoard } from '../routes/back';
import Posts from '../backstage/views/posts/Posts';
import Article from '../backstage/views/article/Article';

const Home = ({ match }) => <div>{match.params.id}</div>;
class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route exact={true} path="/dashboard" component={LoadDashBoard} />
						<Route exact={true} path="/dashboard/:id" component={Home} />
						<Route path="/photo" component={Posts} />
						<Route path="/article" component={Article} />
						<Route exact={true} path="/register" component={LoadRegisterForm} />
						<Route exact={true} path="/" component={LoadLoginForm} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
