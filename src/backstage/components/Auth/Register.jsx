import React from 'react';
import { Mutation } from 'react-apollo';
import { Form, Input, Button } from 'antd';
import { REGISTER_Ql } from '../../../Api/Auth';
const FormItem = Form.Item;

class _Register extends React.Component {
	state = {
		confirmDirty: false
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
											username: values.userName,
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
								rules: [{ required: true, message: '请输入用户名!' }]
							})(<Input />)}
						</FormItem>
						<FormItem {...formItemLayout} label="密码">
							{getFieldDecorator('password', {
								rules: [
									{
										required: true,
										message: '请输入密码!'
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
										message: '请再次输入密码!'
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
										message: '请符合E-mail格式!'
									},
									{
										required: true,
										message: '请输入E-mail!'
									}
								]
							})(<Input />)}
						</FormItem>
						<FormItem {...tailFormItemLayout}>
							<Button type="primary" htmlType="submit">
								注册哦！
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
