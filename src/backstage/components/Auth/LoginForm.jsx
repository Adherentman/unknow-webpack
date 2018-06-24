import React from 'react';
import { Card } from 'antd';
import Login from './Login';
import Register from './Register';
import './LoginForm.scss';

function LoginForm() {
	return (
		<div className="loginForm">
			<Card>
				<h2>登 录 🧐hhh</h2>
				<Login />
			</Card>
		</div>
	);
}

export default LoginForm;
