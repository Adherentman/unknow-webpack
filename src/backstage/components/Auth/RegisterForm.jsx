import React from 'react';
import { Card } from 'antd';
import Register from './Register';
import './RegisterForm.scss';

function RegisterForm() {
	return (
		<div className="registerForm">
			<Card>
				<h2>注 册 🧐</h2>
				<Register />
			</Card>
		</div>
	);
}

export default RegisterForm;
