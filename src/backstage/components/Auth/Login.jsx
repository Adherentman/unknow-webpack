import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { Form, Icon, Input, Button, Alert } from 'antd';
import { LOGIN_QL } from '../../../Api/Auth';

const FormItem = Form.Item;

class _Login extends Component {
	render() {
		const { history } = this.props;
		const { getFieldDecorator, validateFields } = this.props.form;
		return (
			<ApolloConsumer>
				{client => (
					<Form
						onSubmit={e => {
							e.preventDefault();
							validateFields(async (err, values) => {
								if (!err) {
									console.log('Received values of form: ', values);
									const { data } = await client.query({
										query: LOGIN_QL,
										variables: {
											username: values.username,
											password: values.password
										}
									});
									if (data) {
										localStorage.setItem('token', data.Login.token || '');
										console.log(localStorage.getItem('token'));
										history.push('/dashboard');
									}
									console.log(data, '啦啦啦啦我是data!');
								}
							});
						}}
						className="login-form"
					>
						<FormItem>
							{getFieldDecorator('username', {
								rules: [
									{ required: true, message: 'Please input your username!' }
								]
							})(
								<Input
									prefix={
										<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
									}
									placeholder="Username"
								/>
							)}
						</FormItem>
						<FormItem>
							{getFieldDecorator('password', {
								rules: [
									{ required: true, message: 'Please input your Password!' }
								]
							})(
								<Input
									prefix={
										<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
									}
									type="password"
									placeholder="Password"
								/>
							)}
						</FormItem>
						<FormItem>
							<Button
								type="primary"
								htmlType="submit"
								style={{ width: '100%' }}
							>
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
				)}
			</ApolloConsumer>
		);
	}
}

const Login = Form.create()(_Login);

export default withRouter(Login);
