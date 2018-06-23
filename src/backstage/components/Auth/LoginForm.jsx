import React from 'react';
import { Card } from 'antd';
import Login from './Login';
import styles from './LoginForm.scss';

function LoginForm() {
	return (
		<div className="loginForm">
			<Card title="LoginForm">
				<Login />
			</Card>
		</div>
	);
}

export default LoginForm;
