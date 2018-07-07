import React, { Component } from 'react';
import { Editor, EditorState, RichUtils, Modifier } from 'draft-js';

class MyEditor extends Component {
	constructor(props) {
		super(props);
		this.state = { editorState: EditorState.createEmpty() };
		this.onChange = editorState => this.setState({ editorState });
		// this.handleKeyCommand = this.handleKeyCommand.bind(this);

		// const contentState = this.state.editorState.getCurrentContent();
		// const contentStateWithEntity = contentState.createEntity(
		// 	'LINK',
		// 	'MUTABLE',
		// 	{ url: 'https://www.baidu.com' }
		// );

		// const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

		// const contentStateWithLink = Modifier.applyEntity(
		// 	contentStateWithEntity,
		// 	selectionState,
		// 	entityKey
		// );
	}

	handleKeyCommand = (command, editorState) => {
		const newState = RichUtils.handleKeyCommand(editorState, command);
		if (newState) {
			this.onChange(newState);
			console.log(newState.toJS());
			return 'handled';
		}
		return 'not-handled';
	};

	onClickBold = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
	};
	render() {
		return (
			<React.Fragment>
				<div style={styles.editor}>
					<Editor
						editorState={this.state.editorState}
						onChange={this.onChange}
						placeholder="Enter some text..."
						handleKeyCommand={this.handleKeyCommand}
					/>
				</div>
				<button onClick={this.onClickBold}>粗体</button>
			</React.Fragment>
		);
	}
}
const styles = {
	root: {
		fontFamily: "'Helvetica', sans-serif",
		padding: 20,
		width: 600
	},
	editor: {
		border: '1px solid #ccc',
		cursor: 'text',
		minHeight: 80,
		padding: 10
	}
};

export default MyEditor;
