import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

class _Login extends Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};
	render() {
		const { history } = this.props;
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className="login-form">
				<FormItem>
					{getFieldDecorator('userName', {
						rules: [{ required: true, message: 'Please input your username!' }]
					})(
						<Input
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="Username"
						/>
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator('password', {
						rules: [{ required: true, message: 'Please input your Password!' }]
					})(
						<Input
							prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
							type="password"
							placeholder="Password"
						/>
					)}
				</FormItem>
				<FormItem>
					<Button type="primary" htmlType="submit" style={{ width: '100%' }}>
						Log in
					</Button>
					<Button
						style={{ width: '100%' }}
						onClick={() => history.push('/register')}
					>
						register now!
					</Button>
					<Button
						type="primary"
						style={{ width: '100%' }}
						onClick={() => history.push('/dashboard')}
					>
						Log in
					</Button>
				</FormItem>
			</Form>
		);
	}
}

const Login = Form.create()(_Login);

export default withRouter(Login);
