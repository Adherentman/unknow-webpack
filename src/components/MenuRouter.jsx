import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';

const MenuItem = Menu.Item;

const MenuState = [
	{ nav: '/dashboard', key: '1', name: '控制台' },
	{ nav: '/article', icon: '2', name: '文章' },
	{ nav: '/photo', icon: '3', name: '照片' }
];

class MenuRouter extends Component {
	render() {
		return (
			<Fragment>
				<Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
					{MenuState.map((r, index) => (
						<MenuItem key={r.nav}>
							<Link to={r.nav}>{r.name}</Link>
						</MenuItem>
					))}
				</Menu>
			</Fragment>
		);
	}
}

export default withRouter(MenuRouter);
