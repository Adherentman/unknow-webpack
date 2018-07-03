import React, { Fragment } from 'react';
import BackStage from '../../BackStage';
import MyEditor from '../../../components/markdown';

class DashBoard extends React.Component {
	render() {
		return (
			<Fragment>
				<BackStage>
					<MyEditor />
				</BackStage>
			</Fragment>
		);
	}
}

export default DashBoard;
