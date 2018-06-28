import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const MenuItem = Menu.Item;

const MenuState = [
	{ nav: 'dashboard', key: '1', name: '控制台' },
	{ nav: 'posts', icon: '2', name: '文章' },
	{ nav: 'photo', icon: '3', name: '照片' }
];

const MenuRouter = withRouter(({ location }) => (
	<div>
		<Menu
			theme="dark"
			mode="inline"
			defaultSelectedKeys={['1']}
			selectedKeys={[location.pathname]}
		>
			<MenuItem key="1">
				<Link to="/dashboard">控制台</Link>
			</MenuItem>w
			<MenuItem key="2">
				<Link to="/posts">文章</Link>
			</MenuItem>
			<MenuItem key="3">
				<Link to="/photo">照片</Link>
			</MenuItem>
		</Menu>

		{
			//MenuState.map((x, index) => (
			// 	<Menu
			// 		theme="dark"
			// 		mode="inline"
			// 		defaultSelectedKeys={[`${x.key}`]}
			// 		key={x.key}
			// 	>
			// 		<MenuItem key={x.key}>
			// 			<Link to={'/' + x.nav}>{x.name}</Link>
			// 		</MenuItem>
			// 	</Menu>
			// ))
		}
	</div>
));

export default MenuRouter;
