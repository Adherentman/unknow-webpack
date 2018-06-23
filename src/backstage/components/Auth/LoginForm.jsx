import React from 'react';
import { Card } from 'antd';
import Login from './Login';
import './LoginForm.scss';

function LoginForm() {
	return (
		<div className="loginForm">
			<Card>
				<h2>登录</h2>
				<Login />
			</Card>
		</div>
	);
}

export default LoginForm;
