import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

const REGISTER_Ql = gql`
	mutation RegisterUser(
		$username: String
		$password: String
		$confirm: String
		$email: String
	) {
		RegisterUser(
			username: $username
			password: $password
			confirm: $confirm
			email: $email
		) {
			username
			password
			confirm
			email
		}
	}
`;
class _Register extends React.Component {
	state = {
		confirmDirty: false,
		autoCompleteResult: []
	};
	// handleSubmit = ;
	handleConfirmBlur = e => {
		const value = e.target.value;
		this.setState({ confirmDirty: this.state.confirmDirty || !!value });
	};
	compareToFirstPassword = (rule, value, callback) => {
		const form = this.props.form;
		if (value && value !== form.getFieldValue('password')) {
			callback('Two passwords that you enter is inconsistent!');
		} else {
			callback();
		}
	};
	validateToNextPassword = (rule, value, callback) => {
		const form = this.props.form;
		if (value && this.state.confirmDirty) {
			form.validateFields(['confirm'], { force: true });
		}
		callback();
	};
	handleWebsiteChange = value => {
		let autoCompleteResult;
		if (!value) {
			autoCompleteResult = [];
		} else {
			autoCompleteResult = ['.com', '.org', '.net'].map(
				domain => `${value}${domain}`
			);
		}
		this.setState({ autoCompleteResult });
	};
	render() {
		const { getFieldDecorator } = this.props.form;

		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 8 }
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 16 }
			}
		};
		const tailFormItemLayout = {
			wrapperCol: {
				xs: {
					span: 24,
					offset: 0
				},
				sm: {
					span: 16,
					offset: 8
				}
			}
		};

		return (
			<Mutation mutation={REGISTER_Ql}>
				{(RegisterUser, { data }) => (
					<Form
						onSubmit={e => {
							e.preventDefault();
							this.props.form.validateFieldsAndScroll((err, values) => {
								if (!err) {
									console.log('Received values of form: ', values);
									RegisterUser({
										variables: {
											username: values.username,
											password: values.password,
											confirm: values.confirm,
											email: values.email
										}
									});
								}
							});
						}}
					>
						<FormItem {...formItemLayout} label="用户名">
							{getFieldDecorator('userName', {
								rules: [
									{ required: true, message: 'Please input your username!' }
								]
							})(<Input />)}
						</FormItem>
						<FormItem {...formItemLayout} label="密码">
							{getFieldDecorator('password', {
								rules: [
									{
										required: true,
										message: 'Please input your password!'
									},
									{
										validator: this.validateToNextPassword
									}
								]
							})(<Input type="password" />)}
						</FormItem>
						<FormItem {...formItemLayout} label="再次输入密码">
							{getFieldDecorator('confirm', {
								rules: [
									{
										required: true,
										message: 'Please confirm your password!'
									},
									{
										validator: this.compareToFirstPassword
									}
								]
							})(<Input type="password" onBlur={this.handleConfirmBlur} />)}
						</FormItem>
						<FormItem {...formItemLayout} label="邮箱">
							{getFieldDecorator('email', {
								rules: [
									{
										type: 'email',
										message: 'The input is not valid E-mail!'
									},
									{
										required: true,
										message: 'Please input your E-mail!'
									}
								]
							})(<Input />)}
						</FormItem>
						<FormItem {...tailFormItemLayout}>
							<Button type="primary" htmlType="submit">
								Register
							</Button>
						</FormItem>
					</Form>
				)}
			</Mutation>
		);
	}
}

const Register = Form.create()(_Register);

export default Register;
