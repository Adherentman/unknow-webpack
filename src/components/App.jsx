import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BackStage from '../backstage/BackStage';
import DashBoard from '../backstage/views/dashboard/DashBoard';
import Photos from '../backstage/views/photos/Photos';
import Posts from '../backstage/views/posts/Posts';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route path="/dashboard" component={DashBoard} />
						<Route path="/dashboard/:id" component={DashBoard} />
						<Route path="/posts" component={Photos} />
						<Route path="/photo" component={Posts} />
						<Route path="/" component={BackStage} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
