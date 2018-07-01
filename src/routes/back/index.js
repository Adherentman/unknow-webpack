import React from 'react';
import Loadable from 'react-loadable';
import { LoadDashBoard } from './DashBoard';

const LoadLoginForm = Loadable({
	loader: () => import('../../backstage/components/Auth/LoginForm'),
	loading: () => <div>Loading</div>
});

const LoadRegisterForm = Loadable({
	loader: () => import('../../backstage/components/Auth/RegisterForm'),
	loading: () => <div>Loading</div>
});

export { LoadLoginForm, LoadRegisterForm, LoadDashBoard };
