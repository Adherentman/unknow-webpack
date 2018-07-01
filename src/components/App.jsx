import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BackStage from '../backstage/BackStage';
import { LoadDashBoard } from '../routes/DashBoard';
import Photos from '../backstage/views/photos/Photos';
import Posts from '../backstage/views/posts/Posts';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route path="/dashboard" component={LoadDashBoard} />
						<Route path="/dashboard/:id" component={LoadDashBoard} />
						<Route path="/posts" component={Photos} />
						<Route path="/photo" component={Posts} />
						<Route exact={true} path="/" component={BackStage} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
