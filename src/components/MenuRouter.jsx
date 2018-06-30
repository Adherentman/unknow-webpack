import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const MenuItem = Menu.Item;

const MenuState = [
	{ nav: 'dashboard', key: '1', name: '控制台' },
	{ nav: 'posts', icon: '2', name: '文章' },
	{ nav: 'photo', icon: '3', name: '照片' }
];

class MenuRouter extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
					<MenuItem key="/dashboard">
						<Link to="/dashboard">控制台</Link>
					</MenuItem>
					<MenuItem key="/posts">
						<Link to="/posts">文章</Link>
					</MenuItem>
					<MenuItem key="/photo">
						<Link to="/photo">照片</Link>
					</MenuItem>
				</Menu>
			</div>
		);
	}
}

export default withRouter(MenuRouter);
