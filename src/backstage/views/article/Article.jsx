import React from 'react';
import BackStage from '../../BackStage';
import AddarticleForm from '../../components/Article/AddarticleForm';

class Article extends React.Component {
	render() {
		return (
			<div>
				<BackStage>
					<AddarticleForm />
				</BackStage>
			</div>
		);
	}
}

export default Article;
